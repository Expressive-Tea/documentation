---
title: Types
slug: /interfaces-types/types
sidebar_label: Types
sidebar_position: 2
---

## Resolvable<T\>

```typescript
export type Resolvable<R> = R | PromiseLike<R>;
```

## Resolver<T\>

```typescript
export type Resolver<R> = (thenableOrResult?: Resolvable<R>) => void;
```

## Rejector

```typescript
export type Rejector = (error?: any) => void;
```

## ExpressiveTeaModuleClass<T\>

```typescript
export type ExpressiveTeaModuleClass<T> = new (...args: any[]) => T;
```

## ExpressMiddlewareHandler

```typescript
export type ExpressMiddlewareHandler = (
  request?: Request,
  response?: Response,
  next?: NextFunction
) => void;
```

## ExpressiveTeaMiddleware

```typescript
export type ExpressiveTeaMiddleware = (...args: unknown[]) => unknown | Promise<unknown>;
```

## ClassDecorator

```typescript
export type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
```

## PropertyDecorator

```typescript
export type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
```

## MethodDecorator

```typescript
export type MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => PropertyDescriptor | void;
```

## ParameterDecorator

```typescript
export type ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => void;
```
