'use client'

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function ButtonSign({ type }) {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({
            redirect: false, // چون می‌خواهیم دستی ریدایرکت کنیم
            callbackUrl: "/" // آدرس مورد نظر پس از خروج
        });

        // پاک کردن کوکی‌های خاص (اختیاری)
        document.cookie = "next-auth.state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // ریدایرکت دستی
        router.push("/");
    };

    return (
        <>
            {type === "in" ? (
                <button onClick={() => signIn("google")}>Sign in with Google</button>
            ) : (
                <button onClick={handleSignOut}>Sign Out</button>
            )}
        </>
    );
}

export default ButtonSign;