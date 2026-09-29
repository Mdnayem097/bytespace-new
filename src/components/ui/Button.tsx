import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
};

const variants: Record<Variant, string> = {
    primary: "bg-lime-400 text-gray-950 hover:brightness-95",
    secondary: "bg-blue-800 text-gray-50 hover:brightness-110",
    outline: "border border-gray-950 text-gray-950 hover:bg-gray-100",
};

export default function Button({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}