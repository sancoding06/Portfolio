export function About() {
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
          ABOUT ME ✦
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
          My Profile
        </h1>

        <p style={{ color: "#71717a", fontSize: "1.1rem" }}>
          Education and certifications that define my journey.
        </p>
      </div>

      {/* INTRO BLOCK */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
          maxWidth: "1000px",
          margin: "0 auto 70px",
          padding: "40px",
          background: "#ffffff",
          border: "1px solid #eee",
          borderRadius: "25px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
        }}
      >

        <div style={{ flex: 1 }}>

          <h2 style={{ color: "#18181b", marginBottom: "10px" }}>
            Hi, I’m Sanika!
          </h2>

          <p style={{ color: "#52525b", lineHeight: "1.8" }}>
            I am a Cloud Computing and Big Data student with a strong interest in web development, cloud technologies, and software engineering. Passionate about technology and continuous learning, I enjoy building practical projects that combine creativity with problem-solving. I am constantly exploring new tools and technologies, transforming ideas into functional applications, and developing solutions that create real-world impact. My goal is to strengthen my technical expertise, gain industry experience, and grow into a skilled software developer who contributes to meaningful and innovative projects.
          </p>

        </div>

      </div>

      {/* EDUCATION */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 70px" }}>

        <h2
          style={{
            textAlign: "center",
            fontSize: "2.3rem",
            marginBottom: "30px",
            color: "#18181b",
          }}
        >
          Education
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >

          {[
            ["School", "Completed schooling through SSC Exam in 2024"],
            ["College", "Pursuing Diploma in Cloud Computing and Big Data from Bhausaheb Vartak Polytechnic."],
            ["Internship", "Training at Elite Forums"],
          ].map((item) => (
            <div
              key={item[0]}
              style={{
                width: "320px",
                padding: "25px",
                background: "#ffffff",
                border: "1px solid #eee",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ margin: "0 0 10px", color: "#18181b" }}>
                {item[0]}
              </h3>
              <p style={{ color: "#71717a", lineHeight: "1.6" }}>
                {item[1]}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        <h2
          style={{
            textAlign: "center",
            fontSize: "2.3rem",
            marginBottom: "30px",
            color: "#18181b",
          }}
        >
          Certifications
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >

          {[
            "EY-Microsoft AI Skills Passport",
            "EY-Microsoft Green Skills Passport",
            "AWS Cloud Practitioner Essentials",
          ].map((cert) => (
            <div
              key={cert}
              style={{
                width: "300px",
                padding: "20px",
                background: "#ffffff",
                border: "1px solid #eee",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
                color: "#52525b",
                fontWeight: 600,
              }}
            >
              {cert}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}