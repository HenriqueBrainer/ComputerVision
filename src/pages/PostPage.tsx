import { useNavigate, useParams } from "react-router"
import { posts } from "../data/posts"

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const idx = posts.findIndex((p) => p.slug === slug)
  const post = posts[idx]

  if (!post) {
    return (
      <div
        style={{
          backgroundColor: "#080808",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          color: "#606060",
        }}
      >
        Post não encontrado.{" "}
        <span onClick={() => navigate("/")} style={{ color: "#c8ff00", cursor: "pointer", marginLeft: "8px" }}>
          Voltar
        </span>
      </div>
    )
  }

  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx < posts.length - 1 ? posts[idx + 1] : null

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
        <div
          onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
        >
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

        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#a0a0a0",
            fontSize: "12px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "8px 20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#c8ff00"
            e.currentTarget.style.color = "#c8ff00"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
            e.currentTarget.style.color = "#a0a0a0"
          }}
        >
          <span style={{ fontSize: "16px", lineHeight: 1 }}>←</span>
          Voltar ao blog
        </button>
      </header>

      {/* Hero section */}
      <section style={{ position: "relative", height: "60vh", minHeight: "440px", overflow: "hidden" }}>
        {post.heroImage ? (
          <img
            src={post.heroImage}
            alt={post.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${post.color}33 0%, #0d0d0d 70%)`,
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.7) 60%, rgba(8,8,8,1) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "48px",
            right: "48px",
            maxWidth: "900px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span
              style={{
                background: post.color,
                color: "#080808",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "5px 12px",
                fontWeight: 600,
              }}
            >
              {post.tag}
            </span>
            <span style={{ fontSize: "13px", color: "#606060" }}>{post.date}</span>
            <span style={{ fontSize: "13px", color: "#606060" }}>·</span>
            <span style={{ fontSize: "13px", color: "#606060" }}>{post.readTime} de leitura</span>
          </div>
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 68px)",
              color: "#f0f0f0",
              margin: "0 0 16px",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#909090",
              margin: 0,
              lineHeight: 1.6,
              maxWidth: "680px",
            }}
          >
            {post.subtitle}
          </p>
        </div>
      </section>

      {/* Post number marker */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "64px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "80px",
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {String(post.id).padStart(2, "0")}
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* Content */}
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "32px 48px 80px",
        }}
      >
        {/* Lead */}
        <p
          style={{
            fontSize: "19px",
            textAlign: "justify",
            lineHeight: 1.75,
            color: "#c0c0c0",
            margin: "0 0 64px",
            borderLeft: `3px solid ${post.color}`,
            paddingLeft: "28px",
          }}
        >
          {post.description}
        </p>

        {/* Sections */}
        {post.sections.map((section, i) => (
          <div key={i} style={{ marginBottom: "64px" }}>
            {section.heading && (
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "28px",
                  color: "#e8e8e8",
                  margin: "0 0 20px",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.2,
                }}
              >
                {section.heading}
              </h2>
            )}

            <p
              style={{
                fontSize: "16px",
                textAlign: "justify",
                lineHeight: 1.85,
                color: "#808080",
                margin: "0 0 24px",
              }}
            >
              {section.body}
            </p>

            {section.code && (
              <div
                style={{
                  background: "#0d0d0d",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: `3px solid ${post.color}`,
                  padding: "24px 28px",
                  marginBottom: "24px",
                  overflowX: "auto",
                }}
              >
                <pre
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
                    fontSize: "13px",
                    color: "#a0c8a0",
                    margin: 0,
                    lineHeight: 1.7,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {section.code}
                </pre>
              </div>
            )}

            {section.image && (
              <figure style={{ margin: "0 -48px 24px", position: "relative" }}>
                <div style={{ overflow: "hidden", aspectRatio: "16/9" }}>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                {section.imageCaption && (
                  <figcaption
                    style={{
                      fontSize: "12px",
                      color: "#505050",
                      marginTop: "12px",
                      letterSpacing: "0.02em",
                      paddingLeft: "48px",
                    }}
                  >
                    {section.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        ))}
      </article>

      {/* Post navigation */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {prev ? (
          <div
            onClick={() => navigate(`/post/${prev.slug}`)}
            style={{
              padding: "48px 48px",
              cursor: "pointer",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0f0f0f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ fontSize: "11px", color: "#404040", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              ← Anterior
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "18px",
                color: "#e0e0e0",
                lineHeight: 1.3,
              }}
            >
              {prev.title}
            </div>
          </div>
        ) : (
          <div />
        )}

        {next ? (
          <div
            onClick={() => navigate(`/post/${next.slug}`)}
            style={{
              padding: "48px 48px",
              cursor: "pointer",
              textAlign: "right",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0f0f0f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ fontSize: "11px", color: "#404040", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Próximo →
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "18px",
                color: "#e0e0e0",
                lineHeight: 1.3,
              }}
            >
              {next.title}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "40px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "15px", color: "#303030" }}>
          CompVis © 2026
        </span>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "none",
            color: "#404040",
            fontSize: "12px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#c8ff00")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#404040")}
        >
          ↑ Todos os posts
        </button>
      </footer>
    </div>
  )
}
