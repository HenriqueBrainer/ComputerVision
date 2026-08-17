import { useNavigate } from "react-router"
import { posts } from "../data/posts"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: "#080808", minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "0 48px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(8,8,8,0.92)",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              background: "#c8ff00",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3px",
              padding: "5px",
            }}
          >
            <div style={{ background: "#080808" }} />
            <div style={{ background: "#080808" }} />
            <div style={{ background: "#080808" }} />
            <div style={{ background: "#c8ff00" }} />
          </div>
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "18px",
              color: "#f0f0f0",
              letterSpacing: "-0.02em",
            }}
          >
            CompVis
          </span>
        </div>
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <a href="#posts" style={{ color: "#606060", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none", textTransform: "uppercase" }}>
            Posts
          </a>
          <a href="#" style={{ color: "#606060", fontSize: "13px", letterSpacing: "0.06em", textDecoration: "none", textTransform: "uppercase" }}>
            Sobre
          </a>
          <span
            style={{
              background: "#c8ff00",
              color: "#080808",
              fontSize: "12px",
              padding: "6px 16px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Newsletter
          </span>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ padding: "100px 48px 80px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#c8ff00",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "24px",
                fontWeight: 500,
              }}
            >
              Blog · Computação Visual
            </div>
            <h1
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(56px, 8vw, 104px)",
                color: "#f0f0f0",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                margin: 0,
                maxWidth: "820px",
              }}
            >
              Computação
              <br />
              <span style={{ color: "#c8ff00" }}>Visual</span>
            </h1>
          </div>
          <div style={{ maxWidth: "360px" }}>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#707070",
                margin: 0,
                borderLeft: "2px solid rgba(255,255,255,0.1)",
                paddingLeft: "24px",
              }}
            >
              Ainda não sei como definir rs!
            </p>
            <div style={{ marginTop: "20px", paddingLeft: "24px", fontSize: "13px", color: "#404040" }}>
              8 POST · Publicado em 2026
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: "80px",
            height: "1px",
            background: "linear-gradient(to right, rgba(200,255,0,0.5), rgba(255,255,255,0.06) 60%, transparent)",
          }}
        />
      </section>

      {/* Posts Grid */}
      <section id="posts" style={{ padding: "0 48px 120px", maxWidth: "1400px", margin: "0 auto" }}>
        <div
          className="post-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onClick={() => navigate(`/post/${post.slug}`)} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "40px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "15px", color: "#303030" }}>
          @henriquebrainer
        </span>
        <span style={{ fontSize: "12px", color: "#303030", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Arte · Matemática · Código
        </span>
      </footer>
    </div>
  )
}

function PostCard({ post, onClick }: { post: (typeof posts)[0]; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        aspectRatio: "1 / 1",
        backgroundColor: "#0f0f0f",
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector(".card-img") as HTMLElement
        const overlay = e.currentTarget.querySelector(".card-overlay") as HTMLElement
        const info = e.currentTarget.querySelector(".card-info") as HTMLElement
        const num = e.currentTarget.querySelector(".card-num") as HTMLElement
        if (img) img.style.transform = "scale(1.08)"
        if (overlay) overlay.style.opacity = "0.85"
        if (info) info.style.transform = "translateY(0)"
        if (num) num.style.color = post.color
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector(".card-img") as HTMLElement
        const overlay = e.currentTarget.querySelector(".card-overlay") as HTMLElement
        const info = e.currentTarget.querySelector(".card-info") as HTMLElement
        const num = e.currentTarget.querySelector(".card-num") as HTMLElement
        if (img) img.style.transform = "scale(1)"
        if (overlay) overlay.style.opacity = "0.6"
        if (info) info.style.transform = "translateY(12px)"
        if (num) num.style.color = "#282828"
      }}
    >
      {/* Image */}
      <img
        className="card-img"
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Overlay */}
      <div
        className="card-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.98) 30%, rgba(0,0,0,0.3) 70%, transparent)",
          opacity: 0.6,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Post number — top left */}
      <div
        className="card-num"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "13px",
          color: "#282828",
          transition: "color 0.4s ease",
          letterSpacing: "0.04em",
          fontWeight: 400,
        }}
      >
        {String(post.id).padStart(2, "0")}
      </div>

      {/* Tag — top right */}
      <div
        style={{
          position: "absolute",
          top: "18px",
          right: "18px",
          background: "rgba(0,0,0,0.7)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#909090",
          fontSize: "10px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "4px 10px",
          backdropFilter: "blur(4px)",
        }}
      >
        {post.tag}
      </div>

      {/* Content — bottom */}
      <div
        className="card-info"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "28px 24px 24px",
          transform: "translateY(12px)",
          transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: post.color,
            marginBottom: "12px",
          }}
        />
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "18px",
            color: "#f0f0f0",
            margin: "0 0 8px",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          {post.title}
        </h2>
        <p
          style={{
            fontSize: "12px",
            color: "#808080",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {post.readTime} leitura
        </p>
      </div>
    </div>
  )
}
