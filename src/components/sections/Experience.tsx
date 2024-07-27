import React from "react";
import { ExperiencePropsInterface } from "../../interfaces/experience.interface";
import LinkIcon from "../icon/LinkIcon";

const Experience: React.FC<ExperiencePropsInterface> = ({ experiences }) => {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-text lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((experience, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary sm:col-span-2">
                                    {`${experience.startDate} - ${experience.endDate}`}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-primary">
                                        <div>
                                            {experience.href ? (
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-primary focus-visible:text-accent  group/link text-base"
                                                    href={experience.href}
                                                    target="_blank"
                                                >
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        {experience.title} ·{" "}
                                                        <span className="inline-block">
                                                            {experience.companyName}
                                                            <LinkIcon />
                                                        </span>
                                                    </span>
                                                </a>
                                            ) : (
                                                <div className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-primary focus-visible:text-accent  group/link text-base">
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        {experience.title} ·{" "}
                                                        <span className="inline-block">
                                                            {experience.companyName}
                                                        </span>
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">{experience.description}</p>
                                    <ul className="mt-2 flex flex-wrap">
                                        {experience.techStacks.map((tech, index) => (
                                            <li key={index} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-accent/25 px-3 py-1 text-xs font-medium leading-5 text-primary ">
                                                    {tech}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
                {/* <div className="mt-12">
                    <a
                        className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-secondary focus-visible:text-secondary font-semibold text-primary group/link text-base"
                        href="/homepage/resume.pdf"
                        target="_blank"
                    >
                        <span>
                            View My{" "}
                            <span className="inline-block">
                                CV
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </span>
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Experience;
