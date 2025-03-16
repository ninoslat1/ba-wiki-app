import {
    Outlet,
    ScrollRestoration,
    createRootRoute,
  } from '@tanstack/react-router'
  import { Meta, Scripts } from '@tanstack/start'
  import type { ReactNode } from 'react'
  import css from "../styles/index.css?url"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

  const queryClient = new QueryClient()
  export const Route = createRootRoute({
    head: () => ({
        meta: [
          {
            charSet: "utf-8",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            title: "Blue Archive Wiki",
          },
        ],
        links: [{ rel: "stylesheet", href: css }],
      }),
      component: RootComponent,
  })
  
  function RootComponent() {
    return (
      <RootDocument>
        <Outlet />
      </RootDocument>
    )
  }
  
  function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
      <html>
        <head>
          <Meta />
        </head>
        <body>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    )
  }