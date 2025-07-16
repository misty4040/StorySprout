import React from "react";

const Button = React.forwardRef(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button ;
