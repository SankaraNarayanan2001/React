import { createFileRoute } from '@tanstack/react-router'
import { getPost } from '../../api/post'

export const Route = createFileRoute('/post/$id')({
  component: RouteComponent,
  loader: async ({ params }) =>
    await getPost({ params: { id: Number(params.id) } }),
})

function RouteComponent() {
  const { id } = Route.useParams();
  const post = Route.useLoaderData();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Post #{id}: {post.title}
      </h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <dl className="space-y-4">
          <div>
            <dt className="text-lg font-semibold text-gray-700">Title</dt>
            <dd className="text-gray-900 text-xl">{post.title}</dd>
          </div>

          <div>
            <dt className="text-lg font-semibold text-gray-700">Body</dt>
            <dd className="text-gray-800">{post.body}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
