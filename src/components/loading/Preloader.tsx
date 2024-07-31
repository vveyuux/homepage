import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import coffeeGif from "../../assets/images/coffee-loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { changeLoadedStatus } from "../redux/slices/preLoaderSlice";
import { AppDispatch, RootState } from "../redux/store";

const Preloader: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [progress, setProgress] = useState(0);
    const [fadeInContent, setFadeInContent] = useState(false);

    const loaded = useSelector((state: RootState) => state.preLoader.loaded)

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    dispatch(changeLoadedStatus(true))
                    setTimeout(() => setFadeInContent(true), 500); // Delay before showing content
                    return 100;
                }
                return prev + 1;
            });
        }, 50); // Adjust speed of the loader

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <AnimatePresence>
                {!loaded && (
                    <motion.div
                        className="flex items-center justify-center flex-col"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img className="rounded-full h-20 w-20 " src={coffeeGif} alt={"coffee-loading"} />
                        <div className="w-64 bg-gray-200 rounded-lg">
                            <motion.div
                                className="bg-primary h-2 rounded-lg"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                )}
                {fadeInContent && (
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Preloader;
