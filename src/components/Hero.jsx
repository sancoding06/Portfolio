export function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#fafafa",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "#ffffff",
          border: "1px solid #eeeeee",
          borderRadius: "30px",
          padding: "50px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.06)",
          textAlign: "center",
        }}
      >

        {/* PROFILE PIC */}
        <div
          style={{
            width: "120px",
            height: "120px",
            margin: "0 auto 25px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#ddd6fe,#f5f3ff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            border: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        >
          👩‍💻
        </div>

        {/* LABEL */}
        <p
          style={{
            color: "#7c3aed",
            fontWeight: 700,
            letterSpacing: "3px",
            fontSize: "12px",
            marginBottom: "15px",
          }}
        >
          PORTFOLIO ✦ 2026
        </p>

        {/* NAME */}
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: 800,
            color: "#18181b",
            letterSpacing: "-0.06em",
            margin: 0,
          }}
        >
          Hi, I'm Sanika Gavankar
        </h1>

        {/* ROLE */}
        <p
          style={{
            marginTop: "10px",
            fontSize: "1.1rem",
            color: "#52525b",
          }}
        >
          Full Stack Developer | Cloud Computing and Big Data Student
        </p>

        {/* DESCRIPTION */}
        <p
          style={{
            marginTop: "25px",
            fontSize: "1rem",
            color: "#71717a",
            lineHeight: "1.8",
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Motivated Cloud Computing and Big Data student with skills in web development and cloud technologies.
          I focus on aesthetics, usability and smooth user experiences
          that feel simple yet premium.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >

          <a
            href="/home"
            style={{
              textDecoration: "none",
              background: "#18181b",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "12px",
              fontWeight: 700,
            }}
          >
            Enter Portfolio →
          </a>
        </div>

      </div>
    </div>
  );
}