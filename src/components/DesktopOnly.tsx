import { useEffect, useState, type ReactNode } from "react"

const DesktopOnly = ({ children }: { children: ReactNode }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    if (!isDesktop) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100 p-5 text-center">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Desktop Only</h1>
                    <p className="text-gray-600">
                        This application is optimized for desktop devices. Please access it from a computer or increase your browser window size.
                    </p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}

export default DesktopOnly
