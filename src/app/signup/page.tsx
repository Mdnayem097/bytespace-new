import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";
import AuthLayout from "@/components/auth/AuthLayout";
import { signupConfig } from "@/data/auth";

export const metadata: Metadata = {
    title: "Sign up | ByteSpace",
};

export default function SignupPage() {
    return (
        <AuthLayout title={signupConfig.sideTitle} description={signupConfig.sideText}>
            <AuthCard config={signupConfig} />
        </AuthLayout>
    );
}