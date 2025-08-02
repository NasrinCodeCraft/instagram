import Header from "@/components/Header"
import { cookies } from 'next/headers'
import ButtonSign from "@/app/auth/signIn/ButtonSign";

function SignIn({Providers}) {
    const cookieStore =  cookies()
    const cookie = cookieStore.get('next-auth.state')
    console.log("theme", cookie);
    return cookie ? (
        <>
            <Header/>
            <div>
                <img
                    src={
                        process.env.NEXTAUTH_URL +
                        "/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1280px-Instagram_logo.svg.png&w=2048&q=75"
                    }/>
                {/*<p>Welcome, {session.user.name}</p>*/}
                <ButtonSign type="out"/>
            </div>
        </>
    ) : (
        <ButtonSign type="in"/>
    )
}

export default SignIn