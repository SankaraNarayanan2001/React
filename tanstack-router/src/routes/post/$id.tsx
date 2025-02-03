import { createFileRoute } from '@tanstack/react-router'
import { getPost } from '../../api/post'

export const Route = createFileRoute('/post/$id')({
  component: RouteComponent,
  loader: async ({ params }) =>
    await getPost({ params: { id: Number(params.id) } }),
})

function RouteComponent() {
  const { id } = Route.useParams()
  const post = Route.useLoaderData()
  console.log('post', post)
  return (
    <div>
      <h2>
        {id} {post.title}
      </h2>
      <dl>
        <dt>Title</dt>
        <dd>{post.title}</dd>
        <dt>Body</dt>
        <dd>{post.body}</dd>
      </dl>
    </div>
  )
}
