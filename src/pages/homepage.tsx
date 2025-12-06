import { useNavigate } from "react-router-dom"


const Homepage = () => {

    const navigate = useNavigate()

    const gotoCourses =  ()=> navigate("/courses")

  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-10'>
        <h1 className='text-5xl text-center font-bold'>
            SEEDING AFRICA QUALIFYING TEST <br /> FOR DATA ANALYSIS (2026 Cohort)
        </h1>
        <button onClick={gotoCourses} className='bg-blue-500 py-5 px-10 rounded-md cursor-pointer text-white font-bold'>Get started</button>
    </div>
  )
}

export default Homepage