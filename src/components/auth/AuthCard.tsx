"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import type { AuthConfig } from "@/data/auth";

type AuthCardProps = {
    config: AuthConfig;
};

export default function AuthCard({ config }: AuthCardProps) {
    return (
        <div className="rounded-3xl bg-white p-8 text-gray-950 shadow-xl">
            <p className="text-sm text-blue-800">{config.eyebrow}</p>
            <h2 className="mt-2 whitespace-pre-line text-3xl font-bold leading-tight lg:text-4xl">
                {config.title}
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                {config.fields.map((field) => (
                    <Input key={field.id} required {...field} />
                ))}
                <div className="flex justify-end pt-2">
                    <Button type="submit">{config.submitLabel}</Button>
                </div>
            </form>

            <p className="mt-8 text-center text-xs text-gray-400">
                {config.footerText}{" "}
                <Link href={config.footerHref} className="text-blue-800 hover:underline">
                    {config.footerLinkLabel}
                </Link>
            </p>
        </div>
    );
}