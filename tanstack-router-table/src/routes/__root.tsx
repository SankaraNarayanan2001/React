import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
const activeProps = {
    style: {
        color: 'white'
    }
}

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <nav className="bg-gray-800">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-10">
                <Link to="/" activeProps={activeProps} className="rounded-md  px-3 py-2 text-sm font-medium text-white text-gray-300 hover:bg-blue-700 hover:text-white">Home</Link>
                <Link to="/profile" activeProps={activeProps} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">Profile</Link>
                <Link to="/post" activeProps={activeProps} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">Post</Link>
                <Link to="/user" activeProps={activeProps} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">User</Link>
                </div>
              </div>
            </div>
          </div>
      </nav>
     <Outlet /> 
   </>
    );
  }

