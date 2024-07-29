import React from "react";
import coffeeGif from "../../assets/images/coffee-loading.gif";

const Loading: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <img className="rounded-full h-20 w-20 " src={coffeeGif} alt={"coffee-loading"} />
        </div>
    );
};

export default Loading;
