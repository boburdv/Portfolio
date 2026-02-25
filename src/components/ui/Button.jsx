export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-5 py-1.5 rounded-lg font-semibold transition-all duration-150 active:scale-99 active:translate-y-[1px]";

  const variants = {
    primary: "bg-[#162232] text-white border border-black hover:bg-gray-700 active:bg-black",

    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100 active:bg-gray-200",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
