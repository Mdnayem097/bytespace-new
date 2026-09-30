import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    id: string;
};

export default function Input({ label, id, className = "", ...props }: InputProps) {
    return (
        <div>
            <label htmlFor={id} className="text-xs font-medium text-gray-950">
                {label}
            </label>
            <input
                id={id}
                name={id}
                className={`mt-2 w-full rounded-lg border border-gray-100 bg-white px-4 py-2.5 text-sm text-gray-950 outline-none placeholder:text-gray-400 focus:border-blue-800 ${className}`}
                {...props}
            />
        </div>
    );
}