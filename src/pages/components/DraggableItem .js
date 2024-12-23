import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ name, icon: Icon, color }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "platform",
    item: { name, icon: Icon, color },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="text-center"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        padding: "10px",
      }}
    >
      <Icon size={50} color={color} />
      <p className="mt-2">{name}</p>
    </div>
  );
};

export default DraggableItem;
