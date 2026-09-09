import express from "express";
import multer from "multer";
import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";
import { groq } from '@ai-sdk/groq';
import { generateText, Output } from 'ai';
import { z } from 'zod';
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
});

router.post("/", upload.single("resume"), async (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a resume"
            });
        }

        const file = req.file;
        const jobDescription = req.body.jobDescription;

        console.log("File:", file.originalname);
        console.log("Type:", file.mimetype);
        console.log("JD:", jobDescription);

        let resumeText = "";

        // PDF
        if (file.mimetype === "application/pdf") {

            const parser = new PDFParse({
                data: file.buffer
            });

            const result = await parser.getText();

            resumeText = result.text;

            await parser.destroy();
        }

        // DOCX
        else if (
            file.mimetype ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {

            const result = await mammoth.extractRawText({
                buffer: file.buffer
            });

            resumeText = result.value;
        }

        // Unsupported file
        else {
            return res.status(400).json({
                success: false,
                message: "Only PDF and DOCX files are supported"
            });
        }

        console.log("Resume Text:");
        console.log(resumeText);

        //ai api part


        const atsResult = await generateText({
            model: groq('openai/gpt-oss-120b'),

            output: Output.object({
                schema: z.object({
                    overallScore: z.number().min(0).max(100),

                    resumeQualityScore: z.number().min(0).max(100),

                    skillsMatchScore: z.number().min(0).max(100),

                    experienceMatchScore: z.number().min(0).max(100),

                    roleAlignmentScore: z.number().min(0).max(100),

                    keywordMatchScore: z.number().min(0).max(100),

                    summary: z.string(),

                    matchedSkills: z.array(z.string()),

                    missingSkills: z.array(z.string()),

                    preferredSkills: z.array(z.string()),

                    missingPreferredSkills: z.array(z.string()),

                    strengths: z.array(z.string()),

                    weaknesses: z.array(z.string()),

                    improvements: z.array(z.string()),

                    atsIssues: z.array(z.string()),

                    relevantExperience: z.array(z.string()),

                    irrelevantExperience: z.array(z.string()),

                    keywordSuggestions: z.array(z.string()),

                    recruiterFeedback: z.string(),

                    finalRecommendation: z.string()
                })
            }),

            prompt: `
        You are an expert ATS resume analyzer and technical recruiter.
        Analyze the candidate's resume against the job description.
        Rules:
        - Do not invent information.
        - Only consider skills supported by the resume.
        - Distinguish between matched and missing skills.
        - Do not recommend keyword stuffing.
        - Give realistic scores between 0 and 100.
        - If no job description is provided, perform a resume-only analysis.
        - Pay attention to actual evidence in projects and experience.

        For the job description:
        - Identify required skills.
        - Identify preferred or nice-to-have skills.
        - Compare them against the resume.

        Resume:
        <resume>
        ${resumeText}
        </resume>

        Job Description:
        <job_description>
        ${jobDescription || "NO JOB DESCRIPTION PROVIDED"}
        </job_description>

        Provide a complete ATS evaluation.
    `
        });

        console.log("=======ATS result op============");
        console.log(atsResult.output);

        return res.status(200).json({
            success: true,
            message: "Resume processed successfully",
            desc  : atsResult.output
        });

    } catch (error) {

        console.error("Resume processing error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to process resume"
        });
    }
});

export default router;