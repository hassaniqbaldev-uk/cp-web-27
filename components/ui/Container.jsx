export function Container({ children, className }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] ${className}`}>
      {children}
    </div>
  );
}
