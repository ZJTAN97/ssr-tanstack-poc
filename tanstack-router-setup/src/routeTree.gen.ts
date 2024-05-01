/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as ErrorImport } from './routes/error'
import { Route as IndexImport } from './routes/index'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as PostsPostIdImport } from './routes/posts/$postId'

// Create/Update Routes

const PostsRoute = PostsImport.update({
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const ErrorRoute = ErrorImport.update({
  path: '/error',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/',
  getParentRoute: () => PostsRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/error': {
      preLoaderRoute: typeof ErrorImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/posts/': {
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof PostsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ErrorRoute,
  PostsRoute.addChildren([PostsPostIdRoute, PostsIndexRoute]),
])

/* prettier-ignore-end */