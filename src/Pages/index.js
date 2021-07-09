import React, { useEffect, useState } from 'react'
import './index.css';
import { getContainerSize } from '../Constants/getDimension';

function ResizableBox() {
    const [dimension, setDimension] = useState({
        screenWidth: "",
        screenHeight: ""
    })
    useEffect(() => {
        const result = getContainerSize()
        setDimension({ ...dimension, screenHeight: result.screenHeight, screenWidth: result.screenWidth })
    }, []);



    const panel = document.getElementById("resizavle_div");
    debounce(function resize(e) {
        if (window.event.clientX > dimension.screenWidth / 2) {
            panel.style.width = 2 * (window.event.clientX - dimension.screenWidth / 2) + "px";
        } else {
            panel.style.width = -2 * (window.event.clientX - dimension.screenWidth / 2) + "px";
        }
    }, 500)

    if (panel) {
        panel.addEventListener("mousedown", function (e) {
            document.addEventListener("mousemove", resize(), false);
        }, false);

        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", resize(), false);
        }, false);
    }

    const debounce = (func, wait) => {
        let timeout;

        // This is the function that is returned and will be executed many times
        // We spread (...args) to capture any number of parameters we want to pass
        return function executedFunction(...args) {

            // The callback function to be executed after 
            // the debounce time has elapsed
            const later = () => {
                // null timeout to indicate the debounce ended
                timeout = null;

                // Execute the callback
                func(...args);
            };
            // This will reset the waiting every function execution.
            // This is the step that prevents the function from
            // being executed because it will never reach the 
            // inside of the previous setTimeout  
            clearTimeout(timeout);

            // Restart the debounce waiting period.
            // setTimeout returns a truthy value (it differs in web vs Node)
            timeout = setTimeout(later, wait);
        };
    };



    return (
        <div id="side" className="resize_parent_box" >
            <div className="resize_box" id="resizavle_div" style={{ width: `${dimension.screenWidth / 2}px`, height: `${dimension.screenHeight / 2}px` }}>
                <p className="box_text">ResizableBox</p>
            </div>
        </div>
    )
}
export default ResizableBox;