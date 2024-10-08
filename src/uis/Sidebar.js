import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
  const globalOptions = useSelector((state) => state.global);
  const { showSidebar } = globalOptions;
  return (
    <div
      className={`w-[300px] bg-white rounded shadow fixed top-5 left-5 bottom-5 transition-all  ${
        showSidebar ? "" : "-translate-x-[200%]"
      } `}
    >
      {links.map((item) => (
        <div className="p-4 cursor-pointer hover:bg-gray-50" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
