import React, { useEffect, useState } from 'react'
import './styledComponent.js';
import { getContainerSize } from '../Constants/getDimension';
import {debounce} from '../Constants/debounce';
import { ParentResizableBox } from './styledComponent';

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
    let m_pos;
    function resize(e) {
        const dx = m_pos - e.x;
        m_pos = e.x;
        panel.style.width = (parseInt(getComputedStyle(panel, '').width) - dx) + "px";
      
    }
    if (panel) {
        panel.addEventListener("mousedown", debounce(function (e) {
            m_pos = e.x;
            document.addEventListener("mousemove", resize, false);
        }, 500), false);

        document.addEventListener("mouseup", debounce(function () {
            document.removeEventListener("mousemove", resize, false);
        }, 500), false);
    }




    return (
        <div id="side">

            <ParentResizableBox height={`${dimension.screenHeight / 2}px`} width={`${dimension.screenWidth / 2}px`}>
                <div className="resize_box" id="resizavle_div">
                    <p className="box_text">ResizableBox</p>
                </div>
            </ParentResizableBox>
        </div>
    )
}
export default ResizableBox;