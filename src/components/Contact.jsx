export function Contact() {
  return (
    <div
      style={{
        background: "#fafafa",
        fontFamily: "'Inter', sans-serif",
        padding: "90px 60px",
      }}
    >

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <p
          style={{
            color: "#7c3aed",
            fontWeight: 700,
            letterSpacing: "3px",
            fontSize: "13px",
          }}
        >
          CONTACT ✦
        </p>

        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            letterSpacing: "-0.06em",
            margin: "15px 0",
            color: "#18181b",
          }}
        >
          Let’s Work Together
        </h1>

        <p style={{ color: "#71717a", fontSize: "1.1rem" }}>
          Got a project or idea? Send me a message.
        </p>
      </div>

      {/* CONTACT BOX */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        {/* FORM */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "#ffffff",
            border: "1px solid #eee",
            borderRadius: "25px",
            padding: "30px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#18181b" }}>
            Send a Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              outline: "none",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              outline: "none",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              outline: "none",
              resize: "none",
            }}
          />

          <button
            style={{
              width: "100%",
              background: "#18181b",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "12px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>

        {/* INFO BOX */}
        <div
          style={{
            width: "280px",
            background: "#ffffff",
            border: "1px solid #eee",
            borderRadius: "25px",
            padding: "30px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
            height: "fit-content",
          }}
        >
          <h2 style={{ marginBottom: "15px", color: "#18181b" }}>
            Contact Info
          </h2>

          <p style={{ color: "#52525b", marginBottom: "10px" }}>
            📧 gavankarsanika6128@gmail.com
          </p>

          <p style={{ color: "#52525b", marginBottom: "10px" }}>
            📍 India
          </p>

          <p style={{ color: "#52525b" }}>
            💼 Available for freelance work
          </p>
        </div>

      </div>

    </div>
  );
}