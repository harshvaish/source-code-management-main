// import React, { useState } from "react";
// import { FaGithub, FaGitlab, FaBitbucket } from "react-icons/fa";
// import { useDrag } from "react-dnd";
// import SourceSideNav from "../navbar/SourceSideNav";

// // Drag Item Component
// const DragItem = ({ name, icon: Icon, color, detail }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "platform", // The type of item being dragged
//     item: { name, icon: Icon, color, detail },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="text-center"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "move",
//       }}
//     >
//       <Icon size={50} color={color} />
//       <p className="mt-2">{name}</p>
//     </div>
//   );
// };

// const SourceCodeModal = ({ show, onClose }) => {
//   const [searchQuery, setSearchQuery] = useState(""); // State for search query
//   const platforms = [
//     { name: "GitHub", icon: FaGithub, color: "#333", detail: "https://github.com/login", },
//     { name: "GitLab", icon: FaGitlab, color: "#fc6d26", detail: "https://gitlab.com/users/sign_in" },
//     { name: "Bitbucket", icon: FaBitbucket, color: "#0052cc", detail: "https://bitbucket.org/account/signin/" },
//   ];

//   const filteredPlatforms = platforms.filter((platform) =>
//     platform.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (!show) return null;
//   return (
//     <div
//       className={`modal show d-block open`}
//       tabIndex="-1"
//       role="dialog"
//       onClick={onClose}
//       style={{
//         background: "rgba(0, 0, 0, 0.5)",
//         display: "flex",
//         zIndex: 1000,
//         maxWidth: "630px",
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {/* SideNav Section */}
//       <div style={{ width: "40%" }}>
//         <SourceSideNav />
//       </div>

//       {/* Modal Content */}
//       <div
//         className="modal-dialog modal-dialog-scrollable modal-fullscreen slide-modal"
//         role="document"
//         style={{
//           width: "62%",
//           height: "100%",
//           position: "absolute",
//           top: 0,
//           left: "240px",
//           margin: 0,
//           borderRadius: 0,
//           background: "#fff",
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="modal-content" style={{ height: "100%" }}>
//           <div
//             className="modal-header"
//             style={{
//               borderRadius: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <h6 style={{ fontWeight: "400", paddingRight: "10px" }} className="modal-title">
//               Source Code
//             </h6>
//             <input
//               type="text"
//               placeholder="Search"
//               className="form-control"
//               style={{ width: "60%" }}
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button
//               type="button"
//               className="btn-close"
//               onClick={onClose}
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="modal-body">
//             {/* Icons Section */}
//             <div className="d-flex justify-content-around my-4">
//               {filteredPlatforms.map((platform) => (
//                 <div key={platform.name} className="card text-center m-2 platform-card small-card">
//                   <div className="m-card-body">
//                     <DragItem
//                       name={platform.name}
//                       icon={platform.icon}
//                       color={platform.color}
//                       detail={platform.detail}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SourceCodeModal;
import React, { useState } from "react";
import { FaGithub, FaGitlab, FaBitbucket } from "react-icons/fa";
import { useDrag } from "react-dnd";
import SourceSideNav from "../navbar/SourceSideNav";

// Drag Item Component
const DragItem = ({ name, icon: Icon, color, detail }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "platform", // The type of item being dragged
    item: { name, icon: Icon, color, detail },
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
      }}
    >
      <Icon size={50} color={color} />
      <p className="mt-2">{name}</p>
    </div>
  );
};

const SourceCodeModal = ({ show, onClose }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const platforms = [
    {
      name: "GitHub",
      icon: FaGithub,
      color: "#333",
      detail: "https://github.com/login",
    },
    {
      name: "GitLab",
      icon: FaGitlab,
      color: "#fc6d26",
      detail: "https://gitlab.com/users/sign_in",
    },
    {
      name: "Bitbucket",
      icon: FaBitbucket,
      color: "#0052cc",
      detail: "https://bitbucket.org/account/signin/",
    },
  ];

  const filteredPlatforms = platforms.filter((platform) =>
    platform.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* SideNav Section */}
      <div
        className={`side-nav-left ${show ? "active" : ""}`}
        style={{
          position: "absolute",
          left: show ? "0" : "-100%",
          transition: "left 0.3s ease-in-out",
        }}
        tabIndex="-1"
        role="dialog"
        onClick={onClose}
      >
        <SourceSideNav />
        <div className="sceond-sidebar">
          <div
            className="modal-content"
            style={{ height: "100%", padding: "20px" }}
          >
            <div
              className="modal-header"
              style={{
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h6
                style={{ fontWeight: "400", paddingRight: "10px" }}
                className="modal-title"
              >
                Source Code
              </h6>
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                style={{ width: "60%" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Icons Section */}
              <div className="d-flex justify-content-around my-4">
                {filteredPlatforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="card text-center m-2 platform-card small-card"
                  >
                    <div className="m-card-body">
                      <DragItem
                        name={platform.name}
                        icon={platform.icon}
                        color={platform.color}
                        detail={platform.detail}
                      />
                    </div>
                    <span className="msg-popover">Drag and Drop Item</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SourceCodeModal;
