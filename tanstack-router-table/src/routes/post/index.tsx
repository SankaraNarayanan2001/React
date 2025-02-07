import { createFileRoute, Link } from '@tanstack/react-router'
import { getPostList } from '../../api/post'

export const Route = createFileRoute('/post/')({
  component: RouteComponent,
  loader: getPostList,
})
const activeProps = {
  style: {
      color: 'white'
  }
}
function RouteComponent() {
  console.log('getPostList', getPostList);
  
  const postList = Route.useLoaderData() as { 
    userId: number; 
    id: string; 
    title: string; 
    body: string; 
  }[];

  console.log("check", postList);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">📜 Post List</h2>
      
      <ul className="space-y-4">
        {postList.map((post) => (
          <li key={post.id} className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
            <p className="text-gray-500 text-sm">Post ID: {post.id}</p>
            <Link to={'/post/$id'} params={{ id: post.id }} activeProps={activeProps} className="rounded-md px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-700 hover:text-white">{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
