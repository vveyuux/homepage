import React from "react";
import SunIcon from "../icon/SunIcon";

const ThemeToggleButton: React.FC = () => {
    return (
        <button
            className="fixed z-30 bottom-4 right-4 p-3 bg-secondary text-white rounded-md shadow-lg hover:bg-gray-300 hover:text-gray-800 active:bg-white transition-all duration-150 ease-in-out"
            type="submit"
        >
            <SunIcon />
        </button>
    );
};

export default ThemeToggleButton;
