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
        ref={drop}
      >
        {activeContent === "sourceCode" && <SourceCode/>}
        {activeContent === "help" && <div>Help Content Goes Here</div>}
      </div>
    </div>
  );
};

export default Dashboard;
