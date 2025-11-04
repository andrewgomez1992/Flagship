import styled from "styled-components";

export const FlagsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const FlagCard = styled.div`
  background: #181b21;
  border: 1px solid #2b2e36;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  }
`;

export const FlagInfo = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

export const FlagTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;
`;

export const FlagDescription = styled.p`
  font-size: 0.95rem;
  color: #9a9a9a;
  margin: 0.3rem 0 0;
`;

export const ToggleButton = styled.button`
  background: ${({ enabled }) => (enabled ? "#00c6ff" : "#333")};
  color: ${({ enabled }) => (enabled ? "#000" : "#bbb")};
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ enabled }) => (enabled ? "#44dfff" : "#444")};
    transform: scale(1.05);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  color: #999;
  font-size: 1.1rem;
  margin-top: 2rem;
`;
