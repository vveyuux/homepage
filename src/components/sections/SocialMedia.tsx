import React from "react";
import { SocialMediaPropsInterface } from "../../interfaces/social.interface";

const SocialMedia: React.FC<SocialMediaPropsInterface> = ({ menu }) => {
    return (
        <ul className="ml-1 mt-8 flex items-center">
            {menu.map((m, index) => {
                const Icon = m.icon;
                return (
                    <li key={index} className="mr-5 text-xs shrink-0">
                        <a className="block" title={m.title} href={m.href} target="_blank">
                            <span className="sr-only">{m.title}</span>
                            <Icon />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SocialMedia;
