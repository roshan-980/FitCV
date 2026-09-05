import React from 'react'
import { useState } from 'react'
import { useForm, FormProvider } from "react-hook-form";
// import Form from '../components/Form.jsx'
import ResumePreview from '../components/Livepreview.jsx'
import PersonalInfo from '../form/personalinfo.jsx'
import Education from '../form/Education.jsx'
import Experience from '../form/Exp.jsx'
import Projects from '../form/Projects.jsx'
import Skills from '../form/Skills.jsx'
import Navbar from '../components/Navbar.jsx'
import Achievements from '../form/Achievements.jsx';
import Certifications from '../form/Certifications.jsx';
const Builder = () => {
    const methods = useForm();
    const [step, setcount] = useState(0);
    const totalsteps = [PersonalInfo, Education, Experience, Projects, Skills,Achievements,Certifications];
    const CurrentStep = totalsteps[step];
    const onSubmit = (data) => { console.log(data); };
    return (
        <div>
            <Navbar />
            <FormProvider {...methods}>
                <form className="mainform" onSubmit={methods.handleSubmit(onSubmit)}>
                    <CurrentStep />
                    <div className='prevbtn'>
                        <button type='button' onClick={() => setcount(step - 1)} disabled={step === 0}>Previous</button>
                    </div>
                    <div className='nextbtn'>
                        <button type='button' onClick={() => setcount(step + 1)} disabled={step === totalsteps.length - 1}>Next</button>
                    </div>
                    {
                        step === totalsteps.length - 1 && (
                            <button type="submit">Save Resume</button>
                        )
                    }
                    <ResumePreview />
                </form>
            </FormProvider>
        </div>
    )
}



export default Builder
