export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        background:
          "radial-gradient(1200px 600px at 10% -10%, #24315a 0%, #0b1020 55%)",
        padding: "48px 24px 80px",
      }}
    >
      <header style={{ maxWidth: 960, margin: "0 auto 40px" }}>
        <p style={{ letterSpacing: "0.18em", fontSize: 12, color: "#9bb0d3" }}>
          INFLIGHT LAB
        </p>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: "8px 0 12px" }}>
          Boarding Pass Studio
        </h1>
        <p style={{ fontSize: 20, color: "#c9d4ea", maxWidth: 640 }}>
          Design your boarding pass in 30 seconds. Pick a photo, choose a
          seat, and leave gate notes the crew can actually pin.
        </p>
      </header>

      <section
        style={{
          maxWidth: 960,
          margin: "0 auto 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {[
          ["01", "Photo", "Drop a traveler portrait. We crop it to the pass."],
          ["02", "Seat", "Window, aisle, or extra-legroom for IF-204."],
          ["03", "Gate notes", "Pin a comment on the map so ops sees it."],
        ].map(([n, title, body]) => (
          <article
            key={n}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: 20,
            }}
          >
            <p style={{ color: "#7d93c0", fontSize: 12 }}>{n}</p>
            <h2 style={{ margin: "6px 0 8px", fontSize: 22 }}>{title}</h2>
            <p style={{ color: "#c9d4ea", margin: 0 }}>{body}</p>
          </article>
        ))}
      </section>

      <section
        style={{
          maxWidth: 960,
          margin: "0 auto",
          background: "#f4f1ea",
          color: "#1b1b1b",
          borderRadius: 20,
          padding: 28,
          display: "flex",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: 12, letterSpacing: "0.14em" }}>
            SAMPLE PASS
          </p>
          <h2 style={{ margin: "8px 0 0", fontSize: 28 }}>Josephine Rider</h2>
          <p style={{ margin: "8px 0 0" }}>Flight IF-204 · Seat 12A · Gate C4</p>
          <p style={{ margin: "8px 0 0", color: "#5b5b5b" }}>
            Kalamazoo (AZO) → San Francisco (SFO)
          </p>
        </div>
        <div
          style={{
            background: "#0b1020",
            color: "#f4f1ea",
            borderRadius: 14,
            padding: "16px 20px",
            minWidth: 200,
          }}
        >
          <p style={{ margin: 0, fontSize: 12, color: "#9bb0d3" }}>LEAVE A PIN</p>
          <p style={{ margin: "8px 0 0", fontWeight: 600 }}>
            Gate map is live. Comment on the jet bridge before pushback.
          </p>
        </div>
      </section>
    </main>
  );
}
