import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { HOMEPAGE_PATH } from "../constants/constants";
import Homepage from "../pages/Homepage";
import Preloader from "../components/loading/Preloader";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route
                        path={HOMEPAGE_PATH}
                        element={
                            <Preloader>
                                <Homepage />
                            </Preloader>
                        }
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;
