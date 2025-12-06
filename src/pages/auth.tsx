import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import axios from "axios"


const AuthEmail = () => {

  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter your email")
      return
    }

    try {
      // Request camera and microphone permissions
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

      // Stop the stream immediately as we just needed to verify permissions
      stream.getTracks().forEach(track => track.stop())

      // Proceed with login
      const response = await axios.post("https://seeding.goshenrealm.com/login", { email })
      if (response.data.success) {
        toast.success("Login successful")
        localStorage.setItem("user", JSON.stringify(response.data.message))
        navigate("/courses")
      }
      //eslint-disable-next-line
    } catch (error: any) {
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        toast.error("Camera and microphone permissions are required to take the exam.")
      } else if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Login failed")
      } else {
        console.error(error)
        toast.error("An unexpected error occurred")
      }
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-50 p-5'>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Candidate Login</h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-700">
            <strong>Important Notice:</strong> This exam is proctored. By logging in, you consent to having your video and audio recorded during the assessment. These recordings will be sent to the organization for review. Please ensure you grant camera and microphone permissions when prompted.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Start Assessment
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthEmail