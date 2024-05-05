import React, { useState } from "react";
import Lottie from "lottie-react";
import bg from "./bg.json";

const styles = {
  marginTop: 100,
  paddingtop: 0,
  marginLeft: 600,
  width: "60%",
  height: "60%",
  zindex: -1,
  position: "absolute",
  opacity: 0.5,
  overflow: "hidden",
};
const DoctorLogin = () => {
  const [fullName, setFullName] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement logic to send data to your backend API here
    // This API should handle the connection and interaction with your MySQL database
    // Example using fetch:
    fetch("/api/doctor/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, registerNumber, username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful login
        console.log("Login successful:", data);
      })
      .catch((error) => {
        // Handle login error
        console.error("Login failed:", error);
      });
  };

  return (
    <div
      className="doctor-login"
      style={{
        textAlign: "left",

        marginTop: "90px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Lottie style={styles} animationData={bg} />

      <h1
        style={{
          margin: "45px 0",
          fontSize: 45,
          color: "#38b6ff",
          fontWeight: 750,
          marginLeft: "225px",
        }}
      >
        DOCTORS LOGIN
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <div style={{ marginBottom: "15px", marginLeft: "250px" }}>
          <label
            htmlFor="fullName"
            style={{
              display: "block",
              marginBottom: "0px",
              marginLeft: "8px",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Bro"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={{
              padding: "10px",
              marginTop: "5px",
              border: "3px solid #38b6ff",
              borderRadius: "8px",
              width: "300px",
              marginBottom: "15px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px", marginLeft: "250px" }}>
          <label
            htmlFor="registerNumber"
            style={{
              display: "block",
              marginBottom: "0px",
              marginLeft: "8px",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Doctor's Register Number
          </label>
          <input
            type="text"
            placeholder="12345"
            id="registerNumber"
            value={registerNumber}
            onChange={(e) => setRegisterNumber(e.target.value)}
            required
            style={{
              padding: "10px",
              marginTop: "5px",
              border: "3px solid #38b6ff",
              borderRadius: "8px",
              width: "300px",
              marginBottom: "15px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px", marginLeft: "250px" }}>
          <label
            htmlFor="username"
            style={{
              display: "block",
              marginBottom: "0px",
              marginLeft: "8px",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Username
          </label>
          <input
            type="text"
            placeholder="johnbro123"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "10px",
              marginTop: "5px",
              border: "3px solid #38b6ff",
              borderRadius: "8px",
              width: "300px",
              marginBottom: "15px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px", marginLeft: "250px" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              marginBottom: "0px",
              marginLeft: "8px",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              marginTop: "5px",
              border: "3px solid #38b6ff",
              borderRadius: "8px",
              width: "300px",
              marginBottom: "15px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px", marginLeft: "250px" }}>
          <label
            htmlFor="confirmPassword"
            style={{
              display: "block",
              marginBottom: "0px",
              marginLeft: "8px",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="********"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              marginTop: "5px",
              border: "3px solid #38b6ff",
              borderRadius: "8px",
              width: "300px",
              marginBottom: "15px",
            }}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://verfication.streamlit.app/";
          }}
          type="submit"
          style={{
            backgroundColor: "#38b6ff",
            color: "white",
            padding: "10px 100px",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            marginLeft: "260px",
            fontWeight: "600",
            fontSize: "28px",
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default DoctorLogin;
