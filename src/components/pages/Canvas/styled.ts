import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: #636e72;
  margin-bottom: 2rem;
`;

export const StageContainer = styled.div`
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f6fa;
`;

export const ShapeLegend = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2d3436;
`;

export const ColorBox = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
`;
