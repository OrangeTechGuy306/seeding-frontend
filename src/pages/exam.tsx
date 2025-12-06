import { useState, useEffect, useRef, type ChangeEvent } from "react"

import { FiFilePlus } from "react-icons/fi"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { toast } from "sonner"


// interface ExamData {
//     id: number;
//     link: string;
//     module: string;
//     subtitle: string;
//     questions: string[];
//     file: JSX.Element;
// }


const ExamPage = () => {


    const [step, setStep] = useState<number>(0)
    const [files, setFiles] = useState<{ [key: number]: File | null }>({})
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const navigate = useNavigate()
    const { courseId } = useParams()

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => ({ ...prev, [id]: e.target.files![0] }))
            toast.success("File uploaded")
        }
    }

    const questionModules = [
        {
            id: 1,
            module: "SECTION A - MICROSOFT WORD",
            subtitle: "Using MSword, complete the following steps",
            questions: ["type 100-word career statement on the topic: My Career goals and why I want to learn data skills, include a bulleted list of at least 3 skills you want to develop", "apply this formatting rules:,  add a centered heading with your name (bold, size 16px), make the body text justify, line spacing 1.5pt, font size 12", "Safe the document using this filename format: yourName_career_statement.docx"],
            file: <form action="">
                <div className="flex flex-col">
                    <label htmlFor="word1" className="w-full h-[200px] rounded-md bg-blue-50 border-2 flex flex-col gap-3 justify-center items-center cursor-pointer">
                        <FiFilePlus size={50} />
                        <h1>{files[1] ? files[1].name : "Upload your microsoft word File here..."}</h1>
                    </label>
                    <input type="file" id="word1" className="hidden" onChange={(e) => handleFileChange(e, 1)} />
                </div>
            </form>
        },
        {
            id: 2,
            module: "SECTION B - MICROSOFT EXCEL",
            subtitle: "Using Microsoft Excel, complete the following steps based on WOMEN IN TECH LEARNING PERFORMANCE DATASET. First, open the Excel Online link below. When the file opens in your browser, click File > Create a Copy > Download a Copy to download the dataset to your computer before starting the task:",
            questions: ["Open the Dataset and review the information.", "Create a new column named Total Score.Note That: Total Score = Assignment Score + Test Score", "Create another column named Average Performance.Note That: Average Performance = Total Score/2", `Create a column named Status. The intention is to Categorize Status into Pass or Fail using a Benchmark score of 40. To get the Status, use an IF statement with this condition: "Passed" is when Total Score > 30"Failed" is when Total Score <=30`, `Rename the workbook to: YourName_WomenInTechTest.xlsx`],
            link: "https://bit.ly/49UO1OZ",
            file: <form action="">
                <div className="flex flex-col">
                    <label htmlFor="word2" className="w-full h-[200px] rounded-md bg-blue-50 border-2 flex flex-col gap-3 justify-center items-center cursor-pointer">
                        <FiFilePlus size={50} />
                        <h1>{files[2] ? files[2].name : "Upload your microsoft excel File here..."}</h1>
                    </label>
                    <input type="file" id="word2" className="hidden" onChange={(e) => handleFileChange(e, 2)} />
                </div>
            </form>
        },
        {
            id: 3,
            module: "SECTION C - MICROSOFT POWERPOINT",
            subtitle: " Using Microsoft PowerPoint, complete the following tasks",
            questions: ["Open MS PowerPoint and Create 2 slides.", `Apply the following layout requirements: Slide 1: Title: “Tech Innovators – My Career Journey”Subtitle: Type your full name. Slide 2: Add a 3-point bulleted list explaining what motivates you to learn digital skills`, `Apply these formatting instructions: - Choose a professional and simple theme - Set all slide titles to font size 32 - Ensure all body text is between font size 20–24`, `Save your presentation using this filename: YourName_WomenInTechSlides.pptx`],
            file: <form action="">
                <div className="flex flex-col">
                    <label htmlFor="word3" className="w-full h-[200px] rounded-md bg-blue-50 border-2 flex flex-col gap-3 justify-center items-center cursor-pointer">
                        <FiFilePlus size={50} />
                        <h1>{files[3] ? files[3].name : "Upload your microsoft powerpoint File here..."}</h1>
                    </label>
                    <input type="file" id="word3" className="hidden" onChange={(e) => handleFileChange(e, 3)} />
                </div>
            </form>
        },
    ]


    const dataScience = [
        {
            id: 1,
            module: "SECTION A - MICROSOFT WORD",
            subtitle: "Using MS Word, complete the following steps:",
            questions: ["Type a 100-word Personal Development Statement on the topic: “How Digital Skills Will Shape My Future Career.” Insert a bulleted list with at least three digital competencies you hope to build", "Apply the following formatting: - Create a centered heading with your full name (bold, font size 16) - Format the main paragraph as justified text, with line spacing 1.15pt and font size 12", "Save the document using this filename format: YourName_CareerStatement.docx"],
            file: <form action="">
                <div className="flex flex-col">
                    <label htmlFor="ds_word1" className="w-full h-[200px] rounded-md bg-blue-50 border-2 flex flex-col gap-3 justify-center items-center cursor-pointer">
                        <FiFilePlus size={50} />
                        <h1>{files[1] ? files[1].name : "Upload your microsoft word File here..."}</h1>
                    </label>
                    <input type="file" id="ds_word1" className="hidden" onChange={(e) => handleFileChange(e, 1)} />
                </div>
            </form>
        },
        {
            id: 2,
            module: "SECTION B - MICROSOFT EXCEL",
            subtitle: "Using Microsoft Excel, complete the following steps based on the Digital Skills Readiness Survey Dataset. First, open the Excel Online link below. When the file opens in your browser, click File > Create a Copy > Download a Copy to download the dataset to your computer before starting the task:",
            questions: ["The dataset includes the following fields: Name, TypingSpeed_WPM, PracticeHours, TasksCompleted", "Open the Dataset and review the information.", "Create a new column named Productivity Score. Note:  Productivity Score = PracticeHours + TasksCompleted)", "Create another column named Efficiency Level. Note: Efficiency Level = AVERAGE(TypingSpeed_WPM, TasksCompleted)", `Create a column named Status. The intention is to Categorize Status into Ready or Not Ready using a Benchmark Efficiency Level of 30. To get the Status, use an IF statement with this condition: "Ready" is when Efficiency Level >= 30 "Not Ready" is when Efficiency Level < 30`, `Insert a Column Chart using the Name and Efficiency Level Columns and set the chart title to: “Efficiency Overview.”`, `Rename your workbook to: YourName_TechReadiness.xlsx`],
            link: "https://bit.ly/48wqHEJ",
            file: <form action="">
                <div className="flex flex-col">
                    <label htmlFor="ds_word2" className="w-full h-[200px] rounded-md bg-blue-50 border-2 flex flex-col gap-3 justify-center items-center cursor-pointer">
                        <FiFilePlus size={50} />
                        <h1>{files[2] ? files[2].name : "Upload your microsoft excel File here..."}</h1>
                    </label>
                    <input type="file" id="ds_word2" className="hidden" onChange={(e) => handleFileChange(e, 2)} />
                </div>
            </form>
        },
        {
            id: 3,
            module: "SECTION C - MICROSOFT POWERPOINT",
            subtitle: "Using Microsoft PowerPoint, complete the following tasks: ",
            questions: ["Open MS PowerPoint and Create 2 slides.", "Apply the slide structure below: Slide 1: Title: “Women in Tech – My Future Path” Subtitle: Write your full name Slide 2: Create a 3-point bulleted list describing why technology interests you.", "Apply basic formatting: - Use a clean theme of your choice - Set all slide titles to font size 32 - Ensure bullet points are font size 20–24 for readability", `Save your presentation using this filename: YourName_WomenInTechSlides.pptx`],
            file: <form action="">
                <div className="flex flex-col">
                    <label htmlFor="ds_word3" className="w-full h-[200px] rounded-md bg-blue-50 border-2 flex flex-col gap-3 justify-center items-center cursor-pointer">
                        <FiFilePlus size={50} />
                        <h1>{files[3] ? files[3].name : "Upload your microsoft powerpoint File here..."}</h1>
                    </label>
                    <input type="file" id="ds_word3" className="hidden" onChange={(e) => handleFileChange(e, 3)} />
                </div>
            </form>
        },
    ]


    const [timeLeft, setTimeLeft] = useState<number>(3600) // 1 hour in seconds
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const videoChunksRef = useRef<Blob[]>([])

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    handleSubmit()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const [permissionGranted, setPermissionGranted] = useState<boolean>(false)

    useEffect(() => {
        const startRecording = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                const mediaRecorder = new MediaRecorder(stream)
                mediaRecorderRef.current = mediaRecorder

                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        videoChunksRef.current.push(event.data)
                    }
                }

                mediaRecorder.start()
                setPermissionGranted(true)
            } catch (error) {
                console.error("Error accessing media devices:", error)
                toast.error("Camera/Microphone permission required for proctoring")
                setPermissionGranted(false)
            }
        }

        startRecording()

        return () => {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
                mediaRecorderRef.current.stop()
            }
            // Stop all tracks
            if (mediaRecorderRef.current && mediaRecorderRef.current.stream) {
                mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
            }
        }
    }, [])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            if (mediaRecorderRef.current.state === "recording") {
                mediaRecorderRef.current.stop()
            }
            if (mediaRecorderRef.current.stream) {
                mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
            }
        }
    }

    const handleSubmit = async () => {
        // Validate last step file
        const currentModules = courseId === "data-analysis" ? questionModules : dataScience
        const currentModuleId = currentModules[step].id
        if (!files[currentModuleId]) {
            toast.error("Please upload a file to complete the exam")
            return
        }

        const userStr = localStorage.getItem("user")
        if (!userStr) {
            toast.error("User not found")
            return
        }
        const user = JSON.parse(userStr)

        setIsSubmitting(true)

        stopRecording()

        // Wait a bit for the last chunk
        await new Promise(resolve => setTimeout(resolve, 1000))

        const videoBlob = new Blob(videoChunksRef.current, { type: 'video/webm' })

        const formData = new FormData()
        formData.append("userId", user.id)
        formData.append("course", courseId || "")
        formData.append("video", videoBlob, "proctoring.webm")

        Object.values(files).forEach((file) => {
            if (file) {
                formData.append("files", file)
            }
        })

        try {
            const response = await axios.post("https://seeding.goshenrealm.com/submit", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (response.data.success) {
                toast.success("Exam submitted successfully")
                navigate("/success")
            }
        } catch (error) {
            console.error(error)
            toast.error("Error submitting exam")
            setIsSubmitting(false)
        }
    }

    const increment = () => {
        const currentModules = courseId === "data-analysis" ? questionModules : dataScience
        const currentModuleId = currentModules[step].id

        if (!files[currentModuleId]) {
            toast.error("Please upload a file to proceed")
            return
        }

        if (step < currentModules.length - 1) {
            setStep(step + 1)
            return
        }
    }
    const decrement = () => {
        if (step > 0) {
            setStep(step - 1)
            return
        }
    }

    if (!permissionGranted) {
        return (
            <div className="min-h-screen flex justify-center items-center p-5 flex-col gap-5">
                <div className="bg-red-50 border border-red-500 p-10 rounded-md text-center max-w-md">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Permission Required</h1>
                    <p className="text-gray-700 mb-6">
                        This exam requires camera and microphone permissions for proctoring.
                        Please enable permissions in your browser settings and refresh the page to continue.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                        Refresh Page
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen flex justify-center items-center p-5 flex-col gap-5'>
            <div className="fixed top-5 right-5 bg-white p-3 rounded-md shadow-md border border-red-500 text-red-600 font-bold text-xl z-50">
                Time Left: {formatTime(timeLeft)}
            </div>

            {
                courseId === "data-analysis" ?
                    <div className="border border-blue-500 rounded-md p-10 flex flex-col gap-5 md:w-[700px]">

                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-3xl text-blue-500">{questionModules[step].module}</h1>
                            <h1 className="text-xl text-red-500 capitalize">{questionModules[step].subtitle}</h1>
                            <hr />
                            <div className="mt-4 flex flex-col gap-4">
                                {questionModules[step].questions.map((que, i) => (
                                    <p className="capitalize" key={i}>{i + 1}. {que}</p>
                                ))}
                            </div>
                        </div>

                        {
                            questionModules[step].file
                        }


                        <button
                            className="bg-amber-400 rounded-md cursor-pointer py-3 px-5"
                            onClick={decrement}
                        >Previous</button>
                        <button
                            className="bg-blue-600 text-white rounded-md cursor-pointer py-3 px-5 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={step === questionModules.length - 1 ? handleSubmit : increment}
                            disabled={isSubmitting}
                        >
                            {step === questionModules.length - 1 ? (isSubmitting ? "Submitting..." : "Submit") : "Next"}
                        </button>
                    </div>
                    :
                    <div className="border border-blue-500 rounded-md p-10 flex flex-col gap-5 md:w-[700px]">

                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-3xl text-blue-500">{dataScience[step].module}</h1>
                            <h1 className="text-xl text-red-500 capitalize">{dataScience[step].subtitle}</h1>
                            <hr />
                            <div className="mt-4 flex flex-col gap-4">
                                {dataScience[step].questions.map((que, i) => (
                                    <p className="capitalize" key={i}>{i + 1}. {que}</p>
                                ))}
                            </div>
                        </div>

                        {
                            dataScience[step].file
                        }


                        <button
                            className="bg-amber-400 rounded-md cursor-pointer py-3 px-5"
                            onClick={decrement}
                        >Previous</button>
                        <button
                            className="bg-blue-600 text-white rounded-md cursor-pointer py-3 px-5 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={step === dataScience.length - 1 ? handleSubmit : increment}
                            disabled={isSubmitting}
                        >
                            {step === dataScience.length - 1 ? (isSubmitting ? "Submitting..." : "Submit") : "Next"}
                        </button>
                    </div>

            }


        </div>
    )
}

export default ExamPage