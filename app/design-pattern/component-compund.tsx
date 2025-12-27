import { createContext, PropsWithChildren, useContext } from "react"

type Post = {
    id: number,
    title: string,
    content: string
}

type PostCardProps = PropsWithChildren & {
    post: Post
}

interface PostCardComponent extends React.FC<PostCardProps> {
    Title: React.FC;
    Content: React.FC;
}


type PostCardContextType = { post: Post }

const PostCardContext = createContext<PostCardContextType | undefined>(undefined)


const useCardPostContext = () => {
    const context = useContext(PostCardContext)

    if (!context) {
        throw new Error("useCardPostContext must be used whitin PostCard")
    }

    return context
}


export const PostCard: PostCardComponent = ({ post, children }) => {
    return (
        <PostCardContext.Provider value={{ post }}>
            <div className="border p-4 rounded">{children}</div>
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle() {
    const { post } = useCardPostContext()
    return <h2 className="text-xl font-bold">{post.title}</h2>
}

PostCard.Content = function PostCardContent() {
    const { post } = useCardPostContext()
    return <p className="text-gray-700">{post.content}</p>
}


// ----------- use -----------

export const App = () => {
    return (
        <PostCard post={{ id: 1, title: "سلام", content: "این محتوای پست هست." }}>
            <PostCard.Title />
            <PostCard.Content />
        </PostCard >
    )
}


