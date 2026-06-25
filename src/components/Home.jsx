import img from "../assets/img.png"
export function Home() {
  return (
    <div
      style={{
        background: "#fafafa",
        fontFamily: "'Inter', sans-serif",
        padding: "90px 60px",
      }}
    >

      {/* HEADER */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >

        {/* TEXT SIDE */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <p
            style={{
              color: "#7c3aed",
              fontWeight: 700,
              letterSpacing: "3px",
              fontSize: "13px",
            }}
          >
            OVERVIEW ✦
          </p>

          <h1
            style={{
              fontSize: "3.8rem",
              fontWeight: 800,
              letterSpacing: "-0.07em",
              margin: "15px 0",
              color: "#18181b",
              lineHeight: "1.1",
            }}
          >
            Learning.
            <br />
            Building.
            <br/>
            Growing.
          </h1>

          <p style={{ color: "#71717a", fontSize: "1.1rem" }}>
            Driven by curiosity and continuous learning, 
            as well as exploring new ways to creating solutions.
          </p>
        </div>

        {/* IMAGE BOX */}
<div
  style={{
    width: "260px",
    height: "260px",
    borderRadius: "25px",
    background: "linear-gradient(135deg,#ddd6fe,#f5f3ff)",
    border: "1px solid #eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
    overflow: "hidden",
  }}
>
  <img
    src={img}   // or imported image
    alt="profile"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>

      </div>

      {/* CONTENT STACK */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >

        {/* CARD 1 */}
        <div
          style={{
            padding: "40px",
            background: "#ffffff",
            border: "1px solid #eee",
            borderRadius: "25px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ margin: 0, color: "#18181b" }}>
            What I Do
          </h2>

          <p style={{ color: "#52525b", lineHeight: "1.8", marginTop: "10px" }}>
            I build responsive web applications and user-friendly interfaces using React, 
            JavaScript, and modern web technologies. I enjoy creating clean, efficient solutions 
            while continuously learning new technologies.
          </p>

          <a
            href="/project"
            style={{
              display: "inline-block",
              marginTop: "15px",
              textDecoration: "none",
              color: "#7c3aed",
              fontWeight: 700,
            }}
          >
            Explore Projects →
          </a>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            padding: "40px",
            background: "#ffffff",
            border: "1px solid #eee",
            borderRadius: "25px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ margin: 0, color: "#18181b" }}>
            Design Philosophy
          </h2>

          <p style={{ color: "#52525b", lineHeight: "1.8", marginTop: "10px" }}>
            I believe great design should be simple, intuitive, and accessible.
            My focus is on creating user experiences that are visually appealing, 
             functional, and easy to navigate.
          </p>

          <a
            href="/about"
            style={{
              display: "inline-block",
              marginTop: "15px",
              textDecoration: "none",
              color: "#7c3aed",
              fontWeight: 700,
            }}
          >
            Read More →
          </a>
        </div>

        {/* CARD 3 */}
        <div
          style={{
            padding: "40px",
            background: "linear-gradient(135deg,#ddd6fe,#f5f3ff)",
            borderRadius: "25px",
            border: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div>
            <h2 style={{ margin: 0, color: "#18181b" }}>
              Featured Work
            </h2>

            <p style={{ color: "#52525b", marginTop: "10px" }}>
              A collection of selected projects and experiments.
            </p>

            <a
              href="/projects"
              style={{
                display: "inline-block",
                marginTop: "15px",
                textDecoration: "none",
                background: "#18181b",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              View Work
            </a>
          </div>

          <div style={{ fontSize: "2.5rem" }}>✨</div>
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "50px",
            background: "#18181b",
            color: "white",
            borderRadius: "25px",
          }}
        >
          <h2 style={{ fontSize: "2.2rem" }}>
            Let’s build something together
          </h2>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#7c3aed",
              color: "white",
              padding: "12px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Contact Me →
          </a>
        </div>

      </div>
    </div>
  );
}