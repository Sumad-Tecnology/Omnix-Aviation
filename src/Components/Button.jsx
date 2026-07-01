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
      "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-aviation-blue dark:bg-accent dark:text-primary dark:shadow-accent/20 dark:hover:bg-white dark:hover:text-primary",

    secondary:
      "bg-white text-primary shadow-lg shadow-black/10 hover:bg-accent hover:text-primary dark:bg-white dark:text-primary dark:hover:bg-accent dark:hover:text-primary",

    accent:
      "bg-accent text-primary shadow-lg shadow-accent/20 hover:bg-white hover:text-primary dark:bg-accent dark:text-primary dark:hover:bg-white dark:hover:text-primary",

    glass:
      "border border-white/35 bg-white/15 text-white backdrop-blur-md shadow-lg shadow-black/10 hover:bg-white/25 dark:border-white/25 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",

    outline:
      "border border-primary/20 bg-transparent text-primary hover:bg-primary hover:text-white dark:border-accent/50 dark:text-accent dark:hover:bg-accent dark:hover:text-primary",

    light:
      "bg-muted text-primary hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/20",

    ghost:
      "bg-transparent text-primary hover:bg-primary/5 dark:text-accent dark:hover:bg-accent/10",
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