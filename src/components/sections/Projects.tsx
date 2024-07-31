import React from "react";
import { ProjectPropsInterface } from "../../interfaces/project.interface";
import LinkIcon from "../icon/LinkIcon";
import ImageZoomIn from "../image/ImageZoomIn";
import { PROJECTPAGE_PATH } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import RightArrow from "../icon/RightArrow";

const Projects: React.FC<ProjectPropsInterface> = ({ projects }) => {
    const navigate = useNavigate();
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-30 -mx-6 mb-4 w-screen bg-primary/75 backdrop:blur-md px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((proj, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/25 dark:lg:group-hover:bg-secondary/15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        {proj.href ? (
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-textDark hover:text-primary dark:hover:text-textDark focus-visible:text-accent  group/link text-base"
                                                href={proj.href}
                                                target="_blank"
                                            >
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    {proj.projectName}{" "}
                                                    <span className="inline-block">
                                                        {proj.subName} <LinkIcon />
                                                    </span>
                                                </span>
                                            </a>
                                        ) : (
                                            <div className="inline-flex items-baseline font-medium leading-tight text-primary dark:text-textDark hover:text-primary dark:hover:text-textDark focus-visible:text-accent  group/link text-base">
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    {proj.projectName} <span className="inline-block">{proj.subName}</span>
                                                </span>
                                            </div>
                                        )}
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal text-text dark:text-slate-300">{proj.description}</p>
                                    {proj.techStacks && (
                                        <ul className="mt-2 flex flex-wrap">
                                            {proj.techStacks.map((tech, index) => (
                                                <li key={index} className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-accent/50 dark:bg-accentDark/50 px-3 py-1 text-xs font-medium leading-5 text-accentDark dark:text-textDark ">
                                                        {tech}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <ImageZoomIn imagePath={proj.imgPath} imageAlt={proj.imgAlt} />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-12">
                    <a
                        className="inline-flex items-center font-medium leading-tight text-primary dark:text-primaryDark group"
                        aria-label="View Full Project Archive"
                        onClick={() => navigate(PROJECTPAGE_PATH)}
                    >
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-primary dark:group-hover:border-primaryDark motion-reduce:transition-none">
                                View My All{" "}
                            </span>
                            <span className="whitespace-nowrap">
                                <span className="border-b border-transparent pb-px transition group-hover:border-primary dark:group-hover:border-primaryDark motion-reduce:transition-none">
                                    Project
                                </span>
                                <RightArrow />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
