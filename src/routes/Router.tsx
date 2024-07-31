import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { HOMEPAGE_PATH, PROJECTPAGE_PATH } from "../constants/constants";
import HomePage from "../pages/HomePage";
// import Preloader from "../components/loading/Preloader";
import ProjectPage from "../pages/ProjectPage";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            {/* <Preloader> */}
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path={HOMEPAGE_PATH} element={<HomePage />} />
                        <Route path={PROJECTPAGE_PATH} element={<ProjectPage />} />
                    </Routes>
                </Suspense>
            {/* </Preloader> */}
        </BrowserRouter>
    );
};

export default Router;
