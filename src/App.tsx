import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage"
import CoursePage from "./pages/course"
import AuthEmail from "./pages/auth"
import ExamPage from "./pages/exam"
import SuccessPage from "./pages/success"


import ProtectedRoute from "./components/ProtectedRoute"
import DesktopOnly from "./components/DesktopOnly"

function App() {


  return (
    <DesktopOnly>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<ProtectedRoute><CoursePage /></ProtectedRoute>} />
        <Route path="/auth" element={<AuthEmail />} />
        <Route path="/exam/start/:courseId" element={<ProtectedRoute><ExamPage /></ProtectedRoute>} />
        <Route path="/success" element={<ProtectedRoute><SuccessPage /></ProtectedRoute>} />
      </Routes>
    </DesktopOnly>
  )
}

export default App
