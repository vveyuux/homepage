import React from "react";
import SunIcon from "../icon/SunIcon";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { RootState } from "../redux/store";
import MonnIcon from "../icon/MonnIcon";

const ThemeToggleButton: React.FC = () => {
    const toggle = useSelector((state: RootState) => state.theme.toggle);
    const dispatch = useDispatch();

    const darkModeHandler = () => {
        dispatch(toggleTheme())
        document.body.classList.toggle("dark");
    }
    return (
        <button
            className="fixed bottom-4 right-4 p-3 bg-primary rounded-md shadow-lg hover:bg-[#b09e9a] active:bg-textDark z-50 transition-all duration-150 ease-in-out"
            type="button"
            onClick={() => darkModeHandler()}
        >
            {toggle ? <MonnIcon /> : <SunIcon />}
        </button>
    );
};

export default ThemeToggleButton;
