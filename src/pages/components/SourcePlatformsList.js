import React from "react";
import DraggableItem from "./DraggableItem ";

const SourcePlatformsList = ({ platforms }) => {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {platforms.map((platform, index) => (
        <DraggableItem
          key={index}
          name={platform.name}
          icon={platform.icon}
          color={platform.color}
        />
      ))}
    </div>
  );
};

export default SourcePlatformsList;
