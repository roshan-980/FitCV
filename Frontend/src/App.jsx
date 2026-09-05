import { useState } from 'react'
import { useForm, FormProvider } from "react-hook-form";
import './App.css'
import Form from './components/Form.jsx'
import ResumePreview from './components/Livepreview.jsx'
import Home from './pages/Home.jsx'
import Builder from './pages/Builder.jsx'
function App() {

  return (
    <>
      {/* <Home /> */}
      <Builder />
    </>
  )
}

export default App
