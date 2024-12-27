import React, { useState, useEffect } from "react";
import ConfigureModal from "../modal/ConfigureModal";
import DropArea from "./DropArea";
import { useModal } from "../../context/ModalContext";
import RepoTable from "./RepoTable"

const   SourceCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const localRepoData = JSON.parse(localStorage.getItem("repoData"));

  const [repoData, setRepoData] = useState(localRepoData || []);
  const { activeModal, openModal, closeModal } = useModal();

  const [modalData, setModalData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showData, setShowData] = useState(false);

  const modifyRepoData = (data) => {
    const currentRepoData = [...repoData];
    currentRepoData.push(data);
    setRepoData(currentRepoData);
    localStorage.setItem('repoData', JSON.stringify(currentRepoData))
    setShowData(true);
  }

  const handleDrop = (item) => {
    setModalData(item);
    closeModal();
    openModal("ConfigureModal");
  };

  const closeConfigureModal = () => {
    closeModal();
    setModalData(null);
  };

  const [finalData, setFinalData] = useState(null);
  // State to store the retrieved user data
  const [data, setData] = useState(null);
  // State to indicate if data is being fetched
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true); // Set loading to true while fetching data
      fetch("https://api.github.com/user", {
        headers: { Authorization: token },
      })
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => {
          setData(data); // Update state with fetched user data
          setLoading(false); // Set loading to false when done fetching
        }).catch((e)=> setData(null));
    } else if (code) {
      // If no token but 'code' is available (GitHub OAuth flow)
      setLoading(true); // Set loading to true while fetching data
      fetch(
        `http://localhost:3001/oauth/redirect?code=${code}&state=YOUR_RANDOMLY_GENERATED_STATE`
      )
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => {
          setData(data.userData); // Update state with user data from response
          localStorage.setItem(
            "token",
            `${data.tokenType} ${data.token}`
          ); // Store access token in local storage
          setLoading(false); // Set loading to false when done fetching
        });
    }
  }, [code, selectedUser]);

  useEffect(()=> {
    if (data) {
      console.log('Jay data', data)
      // If no token but 'code' is available (GitHub OAuth flow)
      setLoading(true); // Set loading to true while fetching data
      const token = localStorage.getItem("token")
      fetch(
        `http://localhost:3001/api/repos?user=${data?.login}&token=${token}`
      )
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => {
          // setData(data.userData); // Update state with user data from response
          setFinalData(data)
          localStorage.setItem("repoDetails", JSON.stringify(data) );
          setLoading(false); // Set loading to false when done fetching
          setShowData(true);
        });
    }
  }, [data]);

  const redirectToGitHub = (event) => {
    console.log('jay', event)
    const client_id = "Ov23li5Jw5KcbfCU0rXB";
    const redirect_uri = "http://localhost:3000/dashboard";
    const scope = "read:user";
    const userName = event?.target?.textContent.replace('https://github.com/', '')
    setSelectedUser(userName)
 
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
 
    window.open(authUrl, "_top")
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      {/* DropArea */}
      <DropArea onDrop={handleDrop} />

      {showData && (
        <>
          {/* Table count */}
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Total: {repoData.length}
          </div>

          {/* Table structure */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr", // Single column layout
              gap: "20px",
              marginBottom: '20px'
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              <span style={{ flex: 1 }}>Source</span>
              <span style={{ flex: 2 }}>Details</span>
              <span style={{ flex: 1 }}>Status</span>
            </div>

            {/* Rows */}
            {repoData.map((row, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span style={{ flex: 1, fontWeight: "500", color: "#333" }}>
                  {row.source}
                </span>
                {/* Clickable Details */}
                <span
                  style={{ flex: 2, color: "#555", cursor: "pointer" }}
                  onClick={redirectToGitHub} // Open URL in new tab
                >
                  {row.details}
                </span>
                <span
                  style={{
                    flex: 1,
                    color: row.status === "Active" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {finalData && <RepoTable tableData={finalData}></RepoTable>}
      {/* ConfigureModal */}
      {activeModal === "ConfigureModal" && (
        <ConfigureModal
          show={true}
          showData={showData}
          modifyRepoData={modifyRepoData}
          item={modalData}
          onClose={closeConfigureModal}
        />
      )}
    </div>
  );
};

export default SourceCode;
