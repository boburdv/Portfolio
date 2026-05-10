export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-5 py-2 rounded-lg font-semibold transition-all duration-150 active:scale-[0.97] active:translate-y-[1px]";

  const variants = {
    primary: "bg-[#162232] text-white border border-[#162232] hover:bg-gray-700 active:bg-black text-[15px]",

    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100 active:bg-gray-200 text-[15px]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
