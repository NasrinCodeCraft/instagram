import {BookmarkIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, FaceSmileIcon, HeartIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";

function Post({id, username, userImg, img, caption}) {
  return (
    <div className="bg-white my-7 border rounded-sm">

        {/* Header */}
        <div className="flex items-center p-5">
            <img src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
            <p className="flex-1 font-bold">{username}</p>
            <EllipsisHorizontalIcon className="h-5"/>
        </div>

        {/* img - post */}
        <img src={img} alt=""  className="object-cover w-full"/>

        {/* buttons */}
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
                <HeartIcon className="btn"/>
                <ChatBubbleOvalLeftIcon className="btn"/>
                <PaperAirplaneIcon className="btn"/>
                <BookmarkIcon className="btn"/>
            </div>
        </div>

        {/* caption */}
        <div className="p-5 truncate">
            <p className="font-bold mb-1">3 likes</p>
            <span className="font-bold mr-1">{username}</span>
            {caption}
        </div>

        {/* comments */}

        {/* input box */}
        <form className="flex items-center p-4">
            <FaceSmileIcon className="h-7 mr-1"/>
            <input type="text" placeholder="Add a comments..." className="flex-1 border-none focus:ring-0 outline-none"/>
            <button type="submit" className="font-semibold text-blue-400">Post</button>
        </form>

    </div>
  )
}

export default Post