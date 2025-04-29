import Post from "./Post"

const posts = [
    {
        id: "1230",
        username: "puzzle",
        userImg: "https://lh3.googleusercontent.com/a-/AFdZucqfsr6g9JLLbyQiknnSylhhmE1I8oL6umab1hFG=s96-c",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Red_squirrel_%2821808%29.jpg",
        caption: "This is caption for the post",
    },
    {
        id: "124",
        username: "puzzleiran",
        userImg: "https://lh3.googleusercontent.com/a-/AFdZucqfsr6g9JLLbyQiknnSylhhmE1I8oL6umab1hFG=s96-c",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Lamb_-_Animal_Park_Muggensturm_01.jpg/640px-Lamb_-_Animal_Park_Muggensturm_01.jpg",
        caption: "This is caption for the post - second post",
}
]

function Posts() {
  return (
    <div>
        {posts.map((post)=>(
            <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
        ))}

    </div>
  )
}

export default Posts