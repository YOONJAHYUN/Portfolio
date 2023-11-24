"use client";

import React from "react";
import styled from "styled-components";

interface cardProps {
  background: string;
}

const Wrapper = styled.section<cardProps>`
  background: ${(props) => props.background};
`;

export default function Card({ background }: cardProps) {
  return (
    <Wrapper
      background={background}
      className="absolute w-[200px] h-[110px] p-[15px]
    rounded-xl shadow text-right text-[#ffffff80]"
    >
      card
    </Wrapper>
  );
}
