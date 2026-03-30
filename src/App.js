function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #e0f7fa, #ffffff)"
    }}>
      <div style={{
        width: "360px",
        background: "#fff",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ marginBottom: "5px" }}>Educase Task</h2>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          React Assignment UI
        </p>

        <input
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            marginBottom: "15px",
            outline: "none"
          }}
        />

        <button style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(90deg, #007bff, #00c6ff)",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;