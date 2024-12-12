
import { createRootRoute, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import { ReactNode } from "react";
import indexCss from '../styles/index.css?url'

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
        <link rel="stylesheet" href="../index.css" />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
    return (
        <RootDocument>
            <Outlet/>
        </RootDocument>
    )
}

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
        title: "Blue Archive Wiki App",
      },
    ],
    links: [{ rel: "stylesheet", href: indexCss }],
  }),
  component: RootComponent,
})