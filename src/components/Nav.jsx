export function Nav() {
  return (
    <nav
      style={{
        background: "#fafafa",
        padding: "20px 50px",
        borderBottom: "1px solid #ededed",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* Logo */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            fontSize: "2.2rem",
            fontWeight: 800,
            color: "#18181b",
            letterSpacing: "-0.07em",
          }}
        >
          Sanika Gavankar<span style={{color:"#7c3aed"}}>.</span>
        </a>


        {/* Links */}
        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"42px",
          }}
        >

          {["Home","About","Project","Skills","Contact"].map((item)=>(
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{
                textDecoration:"none",
                color:"#52525b",
                fontSize:"15px",
                fontWeight:600,
                position:"relative",
              }}
            >
              {item}
            </a>
          ))}

        </div>


        {/* CTA */}
        <a
          href="/contact"
          style={{
            textDecoration:"none",
            background:"#18181b",
            color:"#ffffff",
            padding:"13px 28px",
            borderRadius:"14px",
            fontSize:"15px",
            fontWeight:700,
            boxShadow:"0 10px 25px rgba(0,0,0,0.12)",
          }}
        >
          Let's Connect ✦
        </a>

      </div>
    </nav>
  );
}