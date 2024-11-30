import Opportunities from "@/src/components/Opportunities";
import Image from "next/image";

export default function WorkplaceSection() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#fff",
      }}
    >
      <div style={{  marginBottom: "1rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            lineHeight: "1.4",
          }}
        >
          We’re more than just a workplace.
          <br />
          We’re a family.
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            marginBottom: "2rem",
            maxWidth:'900px'
          }}
        >
          We know that finding a meaningful and rewarding career can be a long
          journey. Our goal is to make that process easy for you and to create a
          work environment that's enriching—one that you'll look forward to
          every day.
        </p>
        <button
          style={{
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#d00000")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "red")}
        >
          View Open Roles
        </button>
      </div>
      <div style={{ textAlign: "center", padding: "2rem" }}>
      <Image
        src="/assets/img/zh.png"
        alt="Your Image Description"
        width={1200} // Set the desired width
        height={300} // Set the desired height
        style={{ borderRadius: "8px" }} // Optional styling
      />
    </div>      
      
      <Opportunities />
    </section>


    


  );
}