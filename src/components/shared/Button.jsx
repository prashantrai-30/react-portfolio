const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyle = "relative px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 overflow-hidden group";
    const variants = {
      primary: `bg-gradient-to-r from-accent to-highlight text-white 
                hover:shadow-lg hover:shadow-accent/25 hover:scale-105`,
      outline: `border-2 border-accent/50 text-accent-light 
               hover:border-accent hover:bg-accent/10 hover:scale-105`
    };
  
    return (
      <button
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-highlight/50 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </button>
    );
  };
  
  export default Button;