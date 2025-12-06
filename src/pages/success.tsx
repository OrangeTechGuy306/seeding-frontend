import { IoMdDoneAll } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };

  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5'>
      <IoMdDoneAll size={100} className="text-emerald-600" />
      <h1 className="text-5xl font-bold text-center text-emerald-600">Congratulations</h1>
      <p className="text-lg">your Assessment has been submitted successfully</p>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  )
}

export default SuccessPage