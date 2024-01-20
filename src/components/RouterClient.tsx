'use client';

import {
  Link,
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link
          to="/hello/$name"
          params={{
            name: 'World',
          }}
          className="[&.active]:font-bold"
        >
          Dynamic
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return <div className="p-2">Welcome Home!</div>;
  },
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

const dynamicRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/hello/$name',
  component: () => {
    const { name } = dynamicRoute.useParams();

    return <div>Hello {name}</div>;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, dynamicRoute]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const RouterClient = () => <RouterProvider router={router} />;

export { RouterClient };
