import React, { useState } from "react";
import SideNav from "../navbar/SideNav";
import SourceCode from "./SourceCode";
import { useDrop } from "react-dnd";

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState("sourceCode");
  const [tableData, setTableData] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "platform",
    drop: (item) => {
      // Handle the drop event by adding the dropped platform to the table
      setTableData((prevData) => [
        ...prevData,
        {
          source: item.name,
          details: item.detail,
          status: "Success", // Initial status for the dropped item
        },
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="dashboard-container d-flex">
      {/* Side Navigation */}
      <div className="sidenav">
        <SideNav
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
      </div>

      {/* Main Content */}
      <div
        className="main-content"
        style={{ flex: 1, padding: "20px", position: "relative" }}
        ref={drop}
      >
        {isOver && (
          <div
            style={{
              backgroundColor: "rgba(0, 255, 0, 0.2)",
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
        )}
        {activeContent === "sourceCode" && <SourceCode/>}
        {activeContent === "help" && <div>Help Content Goes Here</div>}
      </div>
    </div>
  );
};

export default Dashboard;
