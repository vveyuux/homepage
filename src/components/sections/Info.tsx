import React from "react";
import { InfoPropsInterface } from "../../interfaces/info.interface";
import LinkIcon from "../icon/LinkIcon";

const Info: React.FC<InfoPropsInterface> = ({ fullname, position, status }) => {
    return (
        <>
            <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">{fullname ? fullname : "Full Name Here"}</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-text sm:text-xl">{position ? position : "Position Here"}</h2>
            <p className="mt-4 max-w-xs leading-normal">
                {status ? status : "Status Here"}
                <a
                    className="ml-2 inline-flex items-baseline font-medium leading-tight text-primary hover:text-secondary focus-visible:text-secondary font-semibold text-primary group/link text-base"
                    href="/homepage/resume.pdf"
                    target="_blank"
                >
                    <span>
                        View My{" "}
                        <span className="inline-block">
                            CV
                            <LinkIcon />
                        </span>
                    </span>
                </a>
            </p>
        </>
    );
};

export default Info;
