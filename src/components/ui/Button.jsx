export default function Button({ children, variant = "primary", className = "", ...props }) {
  // py-1.5 o'rniga py-2.5 qildik (standart), lekin md:py-2 orqali desktopda kichikroq saqlab qolish mumkin
  const base = "px-6 py-2.5 md:py-2 rounded-lg font-semibold transition-all duration-150 active:scale-[0.98] active:translate-y-[1px]";

  const variants = {
    primary: "bg-[#162232] text-white border border-[#162232] hover:bg-gray-700 active:bg-black text-sm md:text-base",

    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100 active:bg-gray-200 text-sm md:text-base",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
