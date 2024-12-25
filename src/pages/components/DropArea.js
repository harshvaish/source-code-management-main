// import React from "react";
// import { useDrop } from "react-dnd";

// const DropArea = ({ selectedItem, onDrop }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "platform",
//     drop: (item) => onDrop(item),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));
//   console.log(isOver, "isOver");
//   return (
//     <div
//       ref={drop}
//       className="border border-dashed border-2 p-4 text-center"
//       style={{
//         minHeight: "150px",
//         background: isOver ? "#e6f7ff" : "#f8f9fa",
//         boxSizing: "border-box",
//       }}
//     >
//       {selectedItem ? (
//         <div className="text-center">
//           <selectedItem.icon size={50} color={selectedItem.color} />
//           <p className="mt-2">{selectedItem.name}</p>
//         </div>
//       ) : (
//         <p className="text-muted">
//           {isOver ? "Release to Drop" : "Drop Selected Item Here"}
//         </p>
//       )}
//     </div>
//   );
// };

// export default DropArea;
import React, { useState } from "react";
import { useDrop } from "react-dnd";

const DropArea = ({ selectedItem, onDrop }) => {
  const [isOver, setIsOver] = useState(false); // Manage isOver state manually
  console.log(isOver, "isOver");
  const [, drop] = useDrop(() => ({
    accept: "platform",
    drop: (item) => {
      onDrop(item); // Handle item drop
      setIsOver(false); // Reset isOver after drop
    },
    hover: () => {
      setIsOver(true); // Set isOver to true when an item is hovering
    },
    collect: (monitor) => {
      if (!monitor.isOver()) {
        setIsOver(false); // Reset isOver when the item leaves
      }
    },
  }));

  return (
    <div
      ref={drop}
      className="border border-dashed border-2 p-4 text-center"
      style={{
        minHeight: "150px",
        background: isOver ? "#e6f7ff" : "#f8f9fa",
        boxSizing: "border-box",
      }}
    >
      {selectedItem ? (
        <div className="text-center">
          <selectedItem.icon size={50} color={selectedItem.color} />
          <p className="mt-2">{selectedItem.name}</p>
        </div>
      ) : (
        <p className="text-muted">
          {isOver ? "Release to Drop" : "Drop Selected Item Here"}
        </p>
      )}
    </div>
  );
};

export default DropArea;
