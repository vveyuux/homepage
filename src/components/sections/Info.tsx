import React from "react";
import { InfoPropsInterface } from "../../interfaces/info.interface";
import LinkIcon from "../icon/LinkIcon";

import myPic from "../../assets/images/me.jpg"

const Info: React.FC<InfoPropsInterface> = ({ fullname, position, status }) => {
    return (
        <>
            <div className="lg:mb-6 group relative grid lg:place-items-center gap-4 sm:grid-cols-8 sm:gap-8 md:gap-4">
                <img
                    loading="lazy"
                    className="sm:order-1 sm:col-span-2 sm:translate-y-1 info-img hidden lg:block"
                    src={myPic}
                    alt="me"
                />
                <h1 className="sm:order-2 sm:col-span-6 text-5xl font-bold tracking-tight text-text md:text-4xl">
                    {fullname ? fullname : "Full Name Here"}
                </h1>
            </div>
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
