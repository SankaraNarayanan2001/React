import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
const activeProps = {
    style: {
        color: 'red'
    }
}

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
    <h1>My APP</h1>
    <ul>
        <li>
            <Link to="/" activeProps={activeProps}>Home</Link>
        </li>
        <li>
            <Link to="/profile" activeProps={activeProps}>
            {({isActive}) => <>Profile {isActive && "~"}</>}
            </Link>
        </li>
        <li>
            <Link to="/post" activeProps={activeProps}>Pokemon</Link>
        </li>
    </ul>
    <Outlet />
    </>
  )
}
