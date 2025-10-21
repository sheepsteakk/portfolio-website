export function Card({ className = "", ...props }) {
  return <div className={`rounded-xl border border-gray-200 bg-white ${className}`} {...props} />;
}
