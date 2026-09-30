export type AuthField = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
};

export type AuthConfig = {
    sideTitle: string;
    sideText: string;
    eyebrow: string;
    title: string;
    fields: AuthField[];
    submitLabel: string;
    footerText: string;
    footerLinkLabel: string;
    footerHref: string;
};

const emailField: AuthField = {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "designer@example.com",
};

const passwordField: AuthField = {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
};

export const signupConfig: AuthConfig = {
    sideTitle: "Sign up and come in",
    sideText:
        "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
    eyebrow: "Create an Account",
    title: "Welcome to\nByteSpace",
    fields: [
        { id: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis" },
        emailField,
        passwordField,
    ],
    submitLabel: "Continue",
    footerText: "Already have an account?",
    footerLinkLabel: "Login",
    footerHref: "/login",
};

export const loginConfig: AuthConfig = {
    sideTitle: "Welcome back",
    sideText:
        "Log in to continue your learning journey and pick up right where you left off.",
    eyebrow: "Login to your Account",
    title: "Welcome back to\nByteSpace",
    fields: [emailField, passwordField],
    submitLabel: "Login",
    footerText: "Don't have an account?",
    footerLinkLabel: "Sign up",
    footerHref: "/signup",
};