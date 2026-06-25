export function Skills() {
  const skillGroups = [
    {
      title: "Tech Skills",
      skills: ["Python","React", "JavaScript", "HTML", "CSS","C++","C","SQL","UI/UX","Responsive Design","Cloud Architecture Basics","Cloud Storage Concepts","Cloud Security Concepts"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma","Supabase","Vercel","DBMS"],
    },
    {
      title: "Soft Skills",
      skills: ["Quick Learning", "Teamwork", "Time Management", "Attention to deatail","Effective Communication"],
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
          SKILLS ✦
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
          What I Know
        </h1>

        <p style={{ color: "#71717a", fontSize: "1.1rem" }}>
          Technologies and tools I use to build modern web experiences.
        </p>
      </div>

      {/* SKILL GROUPS */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >

        {skillGroups.map((group) => (
          <div
            key={group.title}
            style={{
              padding: "40px",
              background: "#ffffff",
              border: "1px solid #eee",
              borderRadius: "25px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
            }}
          >

            {/* TITLE */}
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: "20px",
                color: "#18181b",
              }}
            >
              {group.title}
            </h2>

            {/* SKILLS TAGS */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "#f4f4f5",
                    border: "1px solid #eee",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    color: "#52525b",
                    fontWeight: 600,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}