import express from "express";
import multer from "multer";
import mammoth from "mammoth";
import {PDFParse} from "pdf-parse";
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

        return res.status(200).json({
            success: true,
            message: "Resume processed successfully",
            resumeText: resumeText,
            jobDescription: jobDescription
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