import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-purple-500 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">🚀 Welcome to Our App</h1>
        <p className="text-gray-600 mt-3">
          Explore amazing features and enjoy a seamless experience.
        </p>

        <div className="mt-6 flex space-x-4 justify-center">
          <a
            href="/profile"
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Profile
          </a>
          <a
            href="/post"
            className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Explore Posts
          </a>
          <a
            href="/user"
            className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
          >
           Explore Users
          </a>
        </div>
      </div>
    </div>
  );
}