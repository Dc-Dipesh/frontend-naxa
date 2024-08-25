import { ArrowUp } from "lucide-react"
import React, { useEffect } from "react"

const BackToTop = () => {


  const [isVisible, setIsVisible] = React.useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    isVisible && (
      <div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    )
  )
}

export default BackToTop
