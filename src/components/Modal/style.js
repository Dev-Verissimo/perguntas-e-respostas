import styled from "styled-components";

export const ModalBackground = styled.div ` 
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
    background-color: rgba(0,0,0,0.92);

    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalArea = styled.div ` 
    background-color: white;
    padding: 20px;
    height: 351px;
    width: 326px;
`