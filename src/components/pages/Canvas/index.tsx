import React, { useState } from "react";
import { Stage, Layer, Rect, Circle, Star } from "react-konva";
import {
  ColorBox,
  Container,
  Description,
  LegendItem,
  ShapeLegend,
  StageContainer,
  Title,
} from "./styled";

interface Shape {
  id: string;
  type: "rectangle" | "circle" | "star";
  x: number;
  y: number;
  isDragging: boolean;
  fill: string;
}

const CanvasPage: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([
    {
      id: "1",
      type: "rectangle",
      x: 100,
      y: 100,
      isDragging: false,
      fill: "#ff7675",
    },
    {
      id: "2",
      type: "circle",
      x: 250,
      y: 150,
      isDragging: false,
      fill: "#74b9ff",
    },
    {
      id: "3",
      type: "star",
      x: 400,
      y: 200,
      isDragging: false,
      fill: "#55efc4",
    },
  ]);

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    setShapes(
      shapes.map((shape) => ({
        ...shape,
        isDragging: shape.id === id,
      }))
    );
  };

  const handleDragEnd = (e: any) => {
    const id = e.target.id();
    setShapes(
      shapes.map((shape) => ({
        ...shape,
        isDragging: false,
        x: shape.id === id ? e.target.x() : shape.x,
        y: shape.id === id ? e.target.y() : shape.y,
      }))
    );
  };

  const renderShape = (shape: Shape) => {
    const commonProps = {
      id: shape.id,
      x: shape.x,
      y: shape.y,
      draggable: true,
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      opacity: shape.isDragging ? 0.5 : 1,
      fill: shape.fill,
    };

    switch (shape.type) {
      case "rectangle":
        return <Rect {...commonProps} width={100} height={50} />;
      case "circle":
        return <Circle {...commonProps} radius={30} />;
      case "star":
        return (
          <Star
            {...commonProps}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Title>Interactive Canvas</Title>
      <Description>
        Drag and move the shapes around the canvas. Each shape can be freely
        positioned.
      </Description>
      <StageContainer>
        <Stage width={1024} height={400}>
          <Layer>
            {shapes.map((shape) => (
              <React.Fragment key={shape.id}>
                {renderShape(shape)}
              </React.Fragment>
            ))}
          </Layer>
        </Stage>
      </StageContainer>
      <ShapeLegend>
        <LegendItem>
          <ColorBox color="#ff7675" /> Rectangle
        </LegendItem>
        <LegendItem>
          <ColorBox color="#74b9ff" /> Circle
        </LegendItem>
        <LegendItem>
          <ColorBox color="#55efc4" /> Star
        </LegendItem>
      </ShapeLegend>
    </Container>
  );
};

export default CanvasPage;
