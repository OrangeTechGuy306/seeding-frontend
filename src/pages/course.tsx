
import { useNavigate } from 'react-router-dom'

const CoursePage = () => {

    const navigate = useNavigate()

    const courses = [
        { id: 1, courseName: "data-analysis" },
        { id: 2, courseName: "data-science" },
    ]


    const gotoAuth = (courseId: string) => navigate(`/exam/start/${courseId}`)



    return (
        <div className='min-h-screen flex justify-center items-center gap-10 flex-col flex-wrap p-10'>
            {courses.map((course) => (
                <button
                    key={course.id}
                    className='md:w-[400px] w-full h-[200px] text-2xl font-bold text-white bg-blue-600 rounded-md cursor-pointer capitalize'
                    onClick={() => gotoAuth(course.courseName)}
                >
                    {course.courseName}
                </button>
            ))
            }
        </div>
    )
}

export default CoursePage