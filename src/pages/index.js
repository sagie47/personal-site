import * as React from "react";

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "100vh",
};

const headingStyles = {
  fontSize: "48px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "16px",
};

const paragraphStyles = {
  fontSize: "24px",
  textAlign: "center",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Welcome to My Text-Based Homepage</h1>
      <p style={paragraphStyles}>
        This is a simple text-based homepage for my Gatsby app.
      </p>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
