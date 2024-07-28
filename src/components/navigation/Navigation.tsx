import React from "react";
import { NavigationPropsInterface } from "../../interfaces/navigation.interface";

const Navigation: React.FC<NavigationPropsInterface> = ({navMenu}) => {
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                {navMenu.map((nav, index) => (
                    <li key={index}>
                        <a className="group flex items-center py-3 active transition-all duration-150 ease-in-out" href={nav.href}>
                            <span className="nav-indicator mr-4 h-px w-8 bg-primary dark:bg-textDark/75 transition-all group-hover:w-16 group-hover:bg-secondary dark:group-hover:bg-textDark group-focus-visible:w-16 group-focus-visible:bg-accent dark:group-focus-visible:bg-accentDark motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-primary dark:text-textDark/75 group-hover:text-secondary dark:group-hover:text-textDark group-focus-visible:text-accent dark:group-focus-visible:text-accentDark">
                                {nav.title}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
