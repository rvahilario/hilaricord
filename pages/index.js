import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <main>
        <Title>Welcome to the jungle!</Title>
      </main>
    </div>
  );
}

const Title = styled.h1`
  color: red;
`;
