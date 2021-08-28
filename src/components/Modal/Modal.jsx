import React from "react";
import styled from "styled-components";
import { ModalArea, ModalBackground } from "./style";

export default function Modal(props) {
  return (
    <>
      {props.visible === true && (
        <ModalBackground>
          <ModalArea>{props.children}</ModalArea>
        </ModalBackground>
      )}
    </>
  );
}
