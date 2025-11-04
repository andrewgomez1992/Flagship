import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0e1014;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  color: #fff;
  font-family: "Inter", sans-serif;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  background: linear-gradient(90deg, #7b61ff, #00c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
