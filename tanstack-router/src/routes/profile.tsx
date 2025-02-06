import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600">Hello, World! 🌍</h1>
        <p className="text-gray-700 mt-2">
          Welcome to your profile page. Here you can manage your settings and personal details.
        </p>
      </div>
    </div>
  );
}
