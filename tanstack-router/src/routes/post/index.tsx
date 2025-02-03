import { createFileRoute, Link } from '@tanstack/react-router'
import { getPostList } from '../../api/post'

export const Route = createFileRoute('/post/')({
  component: RouteComponent,
  loader: getPostList,
})

function RouteComponent() {
  console.log('getPostList', getPostList)
  const postList = Route.useLoaderData() as { userId: number; id: number; title: string; body: string; }[]
  console.log("check", postList)
  return (
    <>
      <div>Hello "/pokemon/"!</div>
      <ul>
        {postList.map((post : any) => (
          <li key={post.id}>
            <p>{post.id}</p>
            <Link
              to={'/post/$id'}
              params={{ id: post.id }} 
            >
              {post.title}123
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
