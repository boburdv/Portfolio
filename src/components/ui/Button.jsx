export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-5 py-1.5 rounded-lg font-medium transition duration-200";

  const variants = {
    primary: "bg-[#162232] text-white border border-black hover:bg-gray-700",

    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className} font-semibold`} {...props}>
      {children}
    </button>
  );
}
