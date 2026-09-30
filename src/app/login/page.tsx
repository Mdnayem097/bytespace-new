import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";
import AuthLayout from "@/components/auth/AuthLayout";
import { loginConfig } from "@/data/auth";

export const metadata: Metadata = {
    title: "Login | ByteSpace",
};

export default function LoginPage() {
    return (
        <AuthLayout title={loginConfig.sideTitle} description={loginConfig.sideText}>
            <AuthCard config={loginConfig} />
        </AuthLayout>
    );
}