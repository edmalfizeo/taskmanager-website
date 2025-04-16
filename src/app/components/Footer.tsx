import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="text-black py-20 px-6 font-jakarta md:mt-40 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo e Descrição */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Task Manager</h2>
          <p className="text-gray-600 max-w-xs">
            Simplify your workflow and boost productivity with our intuitive
            task management tools.
          </p>
          <div className="flex gap-4 mt-2">
            <i className="bi bi-facebook text-xl cursor-pointer hover:scale-125 transition-transform duration-300"></i>
            <i className="bi bi-twitter text-xl cursor-pointer hover:scale-125 transition-transform duration-300"></i>
            <i className="bi bi-linkedin text-xl cursor-pointer hover:scale-125 transition-transform duration-300"></i>
            <i className="bi bi-instagram text-xl cursor-pointer hover:scale-125 transition-transform duration-300"></i>
          </div>
        </div>

        {/* Links (visível apenas em telas grandes) */}
        <div className="hidden md:flex gap-20">
          {/* Coluna 1 - Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-2">Links</h3>
            <a href="#" className="text-gray-900 hover:text-emerald-600">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:text-emerald-600">
              About Us
            </a>
            <a href="#" className="text-gray-900 hover:text-emerald-600">
              Bookings
            </a>
            <a href="#" className="text-gray-900 hover:text-emerald-600">
              Blog
            </a>
          </div>

          {/* Coluna 2 - Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-2">Legal</h3>
            <span className="text-gray-900 hover:text-emerald-600 cursor-pointer">
              Terms of Use
            </span>
            <span className="text-gray-900 hover:text-emerald-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-gray-900 hover:text-emerald-600 cursor-pointer">
              Cookie Policy
            </span>
          </div>

          {/* Coluna 3 - Product */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-2">Product</h3>
            <span className="text-gray-900 hover:text-emerald-600 cursor-pointer">
              Take Tour
            </span>
            <span className="text-gray-900 hover:text-emerald-600 cursor-pointer">
              Live Chat
            </span>
            <span className="text-gray-900 hover:text-emerald-600 cursor-pointer">
              Reviews
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
