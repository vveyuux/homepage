import React from "react";
import { NavigationPropsInterface } from "../../interfaces/navigation.interface";

const Navigation: React.FC<NavigationPropsInterface> = ({navMenu}) => {
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                {navMenu.map((nav, index) => (
                    <li key={index}>
                        <a className="group flex items-center py-3 active" href={nav.href}>
                            <span className="nav-indicator mr-4 h-px w-8 bg-primary transition-all group-hover:w-16 group-hover:bg-secondary group-focus-visible:w-16 group-focus-visible:bg-accent motion-reduce:transition-none"></span>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary group-focus-visible:text-accent">
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
