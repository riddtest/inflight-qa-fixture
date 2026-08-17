import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boarding Pass Studio",
  description:
    "Design a boarding pass in 30 seconds. Photo, seat, and gate notes in one preview.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0b1020", color: "#f4f1ea" }}>
        {children}
        <script
          src="https://inflight.co/widget.js"
          data-org="l9jhk897"
          async
        ></script>
      </body>
    </html>
  );
}
