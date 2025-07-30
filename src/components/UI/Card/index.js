import "./style.css";

// Card Component
// This component is a styled container that can be used to wrap content
export default function Card({ className = null, children, style, ...res }) {
  const _class = className ? `card ${className}` : `card`;
  return (
    <div className={_class} style={style} {...res}>
      {children}
    </div>
  );
}
