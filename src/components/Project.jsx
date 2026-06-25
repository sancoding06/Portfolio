import home from "../assets/home.png"
import quiz from "../assets/quiz.png"
import car from "../assets/car.png"
import fitzy from "../assets/fitzy.png"
import musofy from "../assets/musofy.png"
export function Project() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A modern fashion e-commerce platform designed to showcase clothing. Features include product browsing, category filtering, responsive design amnd engaging shopping experience implemented with backend.",
      tag: "Full-Stack",
      img:home,
    },
    {
      title: "Music Website",
      desc: "Designed and developed a responsive music website that allows users to browse songs, view and explore artist information. Implemented structured webpages with Interactive navigation.",
      tag: "HTML, CSS",
      img:musofy,
    },
    {
      title: "Fitzy",
      desc: "AI-powered wardrobe assistant that provides personalized outfit recommendations, wardrobe organization, and smart styling suggestions based on user preferences.",
      tag: "Full-Stack",
      img:fitzy,
    },
    {
      title: "Quiz Game",
      desc: "Created a modern and user-friendly quiz game interface in Figma, featuring engaging question screens, score tracking, progress indicators, and responsive layouts. Focused on enhancing user experience through intuitive navigation and visually appealing design.",
      tag: "Figma-UI/UX",
      img:quiz,
    },
    {
      title: "Car Racing Game",
      desc: "Designed and prototyped an interactive car racing game Interface using Figma. Created engaging screens Including start menu, gameplay layout and navigation controls.",
      tag: "Figma-UI/UX",
      img:car,
    },
  ];

  return (
    <div
      style={{
        background: "#fafafa",
        fontFamily: "'Inter', sans-serif",
        padding: "90px 60px",
      }}
    >

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <p
          style={{
            color: "#7c3aed",
            fontWeight: 700,
            letterSpacing: "3px",
            fontSize: "13px",
          }}
        >
          SELECTED WORK ✦
        </p>

        <h1
          style={{
            fontSize: "3.8rem",
            fontWeight: 800,
            letterSpacing: "-0.07em",
            margin: "15px 0",
            color: "#18181b",
          }}
        >
          Things I’ve Built
        </h1>

        <p style={{ color: "#71717a", fontSize: "1.1rem" }}>
          A few projects that showcase my skills and design thinking.
        </p>
      </div>

      {/* PROJECT LIST (NEW LAYOUT) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >

        {projects.map((p, index) => (
          <div
            key={p.title}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "50px",
              padding: "40px",
              background: "#ffffff",
              border: "1px solid #eee",
              borderRadius: "25px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
            }}
          >

            {/* LEFT TEXT */}
            <div style={{ flex: 1 }}>

              <p
                style={{
                  color: "#7c3aed",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "2px",
                }}
              >
                {p.tag}
              </p>

              <h2
                style={{
                  fontSize: "2rem",
                  margin: "10px 0",
                  color: "#18181b",
                }}
              >
                {p.title}
              </h2>

              <p
                style={{
                  color: "#52525b",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                }}
              >
                {p.desc}
              </p>

              {/* BUTTONS */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >

                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    background: "#18181b",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    border: "1px solid #e5e7eb",
                    color: "#18181b",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Code
                </a>

              </div>

            </div>

            {/* RIGHT PREVIEW IMAGE */}
<div
  style={{
    width: "220px",
    height: "160px",
    borderRadius: "18px",
    border: "1px solid #eee",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    flexShrink: 0,
  }}
>
  <img
    src={p.img}
    alt={p.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>
          </div>
        ))}

      </div>

    </div>
  );
}