export default function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`w-full ${className}`}>
      {children}
    </section>
  );
}
