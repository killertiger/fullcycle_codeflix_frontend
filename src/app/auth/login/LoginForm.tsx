'use client';
import { AuthForm } from "@/app/components/AuthForm";
import { InputField } from "../../components/InputField";

export default function LoginForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <AuthForm
            formType="login" onSubmit={handleSubmit} />
    )
}