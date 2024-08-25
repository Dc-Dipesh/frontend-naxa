import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute w-full z-10 bg-white">
      <div className="text-center p-2 bg-custom-100">
        <Link
          to="https://naxa.com.np/blog/unified-action-naxa-nepal-flying-labs-and-partners-respond-to-the-western-nepal-earthquake-2023-28"
          className="group hover:text-blue-500 flex justify-center gap-1 text-xs md:text-sm items-center transition-all duration-300 font-semibold underline"
        >
          <span>
            We have been working on several initiatives during the
            Jajarkot-Rukum Earthquake Response 2023. Check them out
          </span>
          <ArrowRight className="size-4 group-hover:block hidden" />
        </Link>
      </div>
      <nav className="flex justify-between items-center container mx-auto p-4 relative">
        <div className="flex justify-between w-full md:w-auto items-center">
          <Link to="/">
            <img
              src="/images/naxa-logo.png"
              alt="NAXA Logo"
              className="h-10 w-auto"
            />
          </Link>
          <button
            className="text-gray-800 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className="md:flex justify-center gap-6 py-4 hidden">
          <li>
            <Link to="/" className=" hover:text-blue-600">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/map" className=" hover:text-blue-600">
              Map
            </Link>
          </li>
        </ul>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden md:items-center md:gap-6 py-4 md:py-0 absolute top-full bg-white left-2 right-2 transition-all duration-300`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-4 hover:text-blue-600 md:p-0"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/map"
              className="block py-2 px-4 hover:text-blue-600 md:p-0"
              onClick={() => setIsOpen(false)}
            >
              Map
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block md:hidden mx-auto mt-2 w-full text-center py-2 bg-custom-100 hover:bg-custom-200 rounded-md group gap-2 items-center transition-all duration-300 text-sm"
            >
              Let's Talk
              <ArrowRight className="size-4 group-hover:block hidden mx-auto" />
            </Link>
          </li>
        </ul>

        <Link
          to="/contact"
          className="hidden md:flex px-6 py-2 bg-custom-100 hover:bg-custom-200 rounded-md group gap-2 items-center transition-all duration-300 text-sm"
        >
          Let's Talk
          <ArrowRight className="size-4 group-hover:block hidden" />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
