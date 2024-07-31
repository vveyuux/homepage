import React from "react";
import ThemeToggleButton from "../components/button/ThemeToggleButton";
import { allProjectData, HOMEPAGE_PATH, projectTableHeads } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../components/icon/LeftArrow";
import Table from "../components/table/Table";
import { ProjectTableBodyRowPropInterface } from "../interfaces/table.interface";

const ProjectPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-background dark:bg-backgroundDark transition-all duration-150 ease-in-out">
            <ThemeToggleButton />
            <div className="lg:py-24">
                <a
                    className="group mb-2 inline-flex items-center font-semibold leading-tight text-primary dark:text-primaryDark"
                    onClick={() => navigate(HOMEPAGE_PATH)}
                >
                    <LeftArrow />
                    <span className="border-b border-transparent pb-px transition group-hover:border-primary dark:group-hover:border-primaryDark motion-reduce:transition-none">
                        Go Back To Home Page
                    </span>
                </a>
                <h1 className="text-4xl font-bold tracking-tight text-text dark:text-textDark sm:text-5xl">All Projects</h1>
                <Table<ProjectTableBodyRowPropInterface> data={allProjectData} columns={projectTableHeads}/>
            </div>
        </div>
    );
};

export default ProjectPage;
