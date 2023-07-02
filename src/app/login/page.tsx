"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password:"",
    })

    const onLogin = async () => {
    }

    return (
        <div className="flex flex-col gap-2 items-center justify-center min-h-screen py-2 bg-black text-white">
            <h1>Login</h1>
            <hr />
            
            <label htmlFor="email">Email</label>
            <input
                className="border border-gray-400 rounded-md p-2"
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />

            <label htmlFor="password">password</label>
            <input
                className="border border-gray-400 rounded-md p-2"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />

            <button
                className="p-4 rounded-lg bg-green-300 shadow-xl"
                onClick={onLogin}>
                Login Here!!
            </button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )
}