import React, { useEffect, useState } from 'react'
import './index.css';
import { getContainerSize } from '../Constants/getDimension';
import {debounce } from '../Constants/deBounce';
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
    const resizableWindow =  function resize(e) {
        if (window.event.clientX > dimension.screenWidth / 2) {
            panel.style.width = 2 * (window.event.clientX - dimension.screenWidth / 2) + "px";
        } else {
            panel.style.width = -2 * (window.event.clientX - dimension.screenWidth / 2) + "px";
        }
    }


    if (panel) {
        panel.addEventListener("mousedown", function (e) {
            document.addEventListener("mousemove",debounce(resizableWindow,100 ) , false);
        }, false);

        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", debounce(resizableWindow,100) , false);
        }, false);
    }

 


    return (
        <div id="side" className="resize_parent_box" >
            <div className="resize_box" id="resizavle_div" style={{ width: `${dimension.screenWidth / 2}px`, height: `${dimension.screenHeight / 2}px` }}>
                <p className="box_text">ResizableBox</p>
            </div>
        </div>
    )
}
export default ResizableBox;