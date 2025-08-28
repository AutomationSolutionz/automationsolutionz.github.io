import React, { useRef } from 'react';

interface IssueItemProps {
  title: string;
  eta?: string;
  fixedIn?: string;
  children?: React.ReactNode;
};

const IssueItem: React.FC<IssueItemProps> = ({ title, eta, fixedIn, children }) => {
  const ref = useRef<HTMLDetailsElement>(null);

  return (
    <details>
      <summary
        style={{
          padding: "16px",
          borderBottom: "2px solid #eee",
          margin: "4px",
          cursor: "pointer",
          textWrap: "pretty",
        }}
        ref={ref}
        onMouseEnter={() => { ref.current!!.style.backgroundColor = "#eddcffaa" }}
        onMouseLeave={() => { ref.current!!.style.backgroundColor = "transparent" }}>
        {title}
        {eta ?
          <em style={{ fontSize: "0.8em", float: "right" }}>[ETA: {eta}]</em>
          : null}
        {fixedIn ?
          <em style={{ color: "green", fontWeight: "bold", fontSize: "0.8em", float: "right" }}>[Fixed in: {fixedIn}]</em>
          : null}
      </summary>

      <div
        style={{ padding: "16px" }}
      >
        {children || "Details not available."}
      </div>
    </details >
  );
};

export default IssueItem;
