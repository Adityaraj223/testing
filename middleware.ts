import { withClerkMiddleware } from '@clerk/nextjs/server';

export default withClerkMiddleware({
  publicRoutes: ['/signup(.*)'], // Allow access to signup and nested routes
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'], // Protect all routes except public routes
};
