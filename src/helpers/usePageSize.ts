import { useState, useEffect } from "react";

const useResize = () => {
    const [widthHeight, setWidthHeight] = useState([0, 0]);

    useEffect(() => {
        const getWidthHeight = () => {
            setWidthHeight([window.innerWidth, window.innerHeight]);
        };
        getWidthHeight();
        window.addEventListener('resize', getWidthHeight);
        return () => {
            window.removeEventListener('resize', getWidthHeight);
        }
    },[]);

    return widthHeight;
};

export default useResize;