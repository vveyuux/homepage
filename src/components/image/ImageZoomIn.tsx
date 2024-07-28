import React, { useEffect, useState } from "react";
import { ImagePropInterface } from "../../interfaces/image.interface";
import { AnimatePresence, motion } from "framer-motion";

const ImageZoomIn: React.FC<ImagePropInterface> = ({ imagePath, imageAlt }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>  
            <img
                alt={imageAlt}
                loading={"lazy"}
                width={"200"}
                height={"48"}
                onClick={openModal}
                className="cursor-pointer z-20 rounded border-2 border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 transition-transform duration-300 transform hover:scale-105"
                style={{ color: "transparent" }}
                src={imagePath}
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className={"relative grid place-items-center"}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={imagePath} alt={imageAlt} className="w-10/12 rounded-lg max-w-full max-h-screen" />
                            <button className="mt-5 text-white text-md w-full" onClick={closeModal}>
                                Click anywhere to exit
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageZoomIn;
