import { NavLink } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-gradient-to-b from-[#2e2b2b] to-[#1c1a1a] flex flex-col shadow-xl">

      {/* Logo Section */}
      <div className="py-6 px-6 border-b border-gray-700">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Sasanam
        </h1>
        <p className="text-gray-400 text-sm mt-1">Historical Records</p>
      </div>

      {/* Menu Section */}
      <div className="flex flex-col mt-6 px-4 gap-3">

        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
            ${
              isActive
                ? "bg-[#3b3838] text-white shadow-md scale-[1.02]"
                : "text-gray-300 hover:bg-[#3b3838] hover:text-white hover:translate-x-1"
            }`
          }
        >
          <BookOpen size={18} />
          <span className="text-sm font-medium">Hero Stones</span>
        </NavLink>

        <NavLink
          to={"/inscriptions"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
            ${
              isActive
                ? "bg-[#3b3838] text-white shadow-md scale-[1.02]"
                : "text-gray-300 hover:bg-[#3b3838] hover:text-white hover:translate-x-1"
            }`
          }
        >
          <BookOpen size={18} />
          <span className="text-sm font-medium">Inscriptions</span>
        </NavLink>

        <NavLink
          to={"/temples"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
            ${
              isActive
                ? "bg-[#3b3838] text-white shadow-md scale-[1.02]"
                : "text-gray-300 hover:bg-[#3b3838] hover:text-white hover:translate-x-1"
            }`
          }
        >
          <BookOpen size={18} />
          <span className="text-sm font-medium">Temples</span>
        </NavLink>

        <NavLink
          to={"/manuscripts"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
            ${
              isActive
                ? "bg-[#3b3838] text-white shadow-md scale-[1.02]"
                : "text-gray-300 hover:bg-[#3b3838] hover:text-white hover:translate-x-1"
            }`
          }
        >
          <BookOpen size={18} />
          <span className="text-sm font-medium">Manuscripts</span>
        </NavLink>

        <NavLink
          to={"/archives"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
            ${
              isActive
                ? "bg-[#3b3838] text-white shadow-md scale-[1.02]"
                : "text-gray-300 hover:bg-[#3b3838] hover:text-white hover:translate-x-1"
            }`
          }
        >
          <BookOpen size={18} />
          <span className="text-sm font-medium">Archives</span>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
