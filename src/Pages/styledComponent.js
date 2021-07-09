import styled from "styled-components";

export const ParentResizableBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
  .resize_box{ 
    background-color: #fff;
    box-shadow: 0 2px 5px 1px rgba(64,60,67,.16);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: col-resize;
    height : ${(props) => props.height && props.height};
    width :  ${(props) => props.width && props.width};
    &::after {
      content: " ";
      background-color: #ccc;
      position: absolute;
      left: 0;
      width: 4px;
      height: 100%;
      cursor: col-resize;
    }
   
  }
  .box_text{
    font-size : 30px;
    

  }
`;