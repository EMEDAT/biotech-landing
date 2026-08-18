interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({
  children,
  className = "",
  from = "#00C2FF",
  to = "#0EA96A",
}: GradientTextProps) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {children}
    </span>
  );
}
