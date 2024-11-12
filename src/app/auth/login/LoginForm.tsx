'use client';
import { InputField } from "../InputField";

export default function LoginForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col space-y-4 bg-[#141414]
            bg-opacity-90 px-4 py-8 shadow-lg max-w-md rounded">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-sm text-gray-500">
                    New to the app? {' '}
                    <a href="#" className="text-red-500 hover:underline">
                        Register
                    </a>
                </p>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder={"Enter your email"} />

                <InputField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder={"Enter your password"} />
            </div>
            <div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 space-x-2 text-sm font-semibold text-white sm:w-auto sm:px-8">
                    Login
                </button>
            </div>
        </form>
    );
}