const Button = ({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-ring/40 focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-aviation-blue",

    secondary:
      "bg-background text-primary shadow-lg shadow-foreground/10 hover:bg-accent hover:text-accent-foreground",

    accent:
      "bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-background",

    glass:
      "border border-background/35 bg-background/15 text-background backdrop-blur-md shadow-lg shadow-foreground/10 hover:bg-background/25",

    outline:
      "border border-primary/15 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",

    light:
      "bg-muted text-primary hover:bg-background dark:bg-muted dark:text-foreground dark:hover:bg-card",

    ghost:
      "bg-transparent text-primary hover:bg-primary/5 dark:text-foreground dark:hover:bg-background/10",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base",
    xl: "px-12 py-5 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;