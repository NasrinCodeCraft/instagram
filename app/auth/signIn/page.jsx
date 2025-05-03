import Header from "@/components/Header"

function SignIn({Providers}) {
  console.log("signInsignInsignInsignIn")
  return (
    <>
      <Header />
      <div>
        <img    
        src={
            process.env.NEXTAUTH_URL +
            "/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1280px-Instagram_logo.svg.png&w=2048&q=75"
          }/>
      </div>
    </>
  )
}

export default SignIn