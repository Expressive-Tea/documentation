---
title: Interfaces
slug: /interfaces-types/interfaces
sidebar_label: Interfaces
sidebar_position: 1
---

## IDynamicObject

```typescript
export interface IDynamicObject {
  [key: string]: any;
}
```

## ExpressiveTeaApplication

```typescript
export interface ExpressiveTeaApplication {
  application: Express;
  server: http.Server;
  secureServer?: https.Server;
}
```

## ExpressiveTeaServerProps

```typescript
export interface ExpressiveTeaServerProps {
  port?: number;
  [key: string]: any;
}
```

## ExpressiveTeaPluginProps

```typescript
export interface ExpressiveTeaPluginProps {
  name: string;
  priority: number;
}
```

## ExpressiveTeaModuleProps

```typescript
export interface ExpressiveTeaModuleProps {
  controllers: any[];
  providers: any[];
  mountpoint: string;
}
```

## ExpressiveTeaStaticFileServer

```typescript
export interface ExpressiveTeaStaticFileServer {
  dotfiles?: 'allow' | 'deny' | 'ignore';
  etag?: boolean;
  extensions?: string[];
  index?: boolean;
  maxAge?: string;
  redirect?: boolean;

  setHeaders?(res, path, stat);
}
```

## ExpressiveTeaDirective

```typescript
export interface ExpressiveTeaDirective {
  name: string;
  settings: any[];
}
```

## ExpressiveTeaHandlerOptions

```typescript
export interface ExpressiveTeaHandlerOptions {
  verb: string;
  route: string;
  handler: ExpressiveTeaMiddleware & ExpressiveTeaMiddlewareExtends;
  target: unknown;
  propertyKey: string | symbol;
}
```

## ExpressiveTeaArgumentOptions

```typescript
export interface ExpressiveTeaArgumentOptions {
  key: string | symbol;
  index: number;
  type: symbol;
  arguments?: string | string[];
}
```

## ExpressiveTeaAnnotations

```typescript
export interface ExpressiveTeaAnnotations {
  type: string;
  arguments?: any[];
}
```

## ExpressiveTeaMiddlewareExtends

```typescript
export interface ExpressiveTeaMiddlewareExtends {
  $middlewares?: ExpressMiddlewareHandler[];
}
```
