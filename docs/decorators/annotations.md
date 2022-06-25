---
title: Annotations
slug: /decorators/annotations
sidebar_label: Annotations
sidebar_position: 4
---

import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import {annotations} from '../../src/components/Documentation/data/arguments-settings';

## @request

Assign the [Request](https://expressjs.com/en/4x/api.html#req) object that represents the HTTP Request and all the properties
defined in ExpressJS Request Object.

**Example**

```typescript title="GenericController.ts" {3}
class GenericController {
  @Get('/') // This Response to all GET Requests for controller route.
  methodError(@request req) {}
}
```

## @response

Assign the [Response](https://expressjs.com/en/4x/api.html#res) object that represents the HTTP Response and all the properties
defined in ExpressJS Request Object.

**Example**

```typescript title="GenericController.ts" {3}
class GenericController {
  @Get('/') // This Response to all GET Requests for controller route.
  methodError(@response res) {}
}
```

## @next

Assign the middleware function [Next](https://expressjs.com/en/guide/using-middleware.html) for the request-response cycle,
as same behavior as ExpressJS this will call next middleware in the stack.

**Example**

```typescript title="GenericController.ts" {3}
class GenericController {
  @Get('/') // This Response to all GET Requests for controller route.
  methodError(@next next) {}
}
```

## @query(<ArgumentAnnotations args={annotations.query}/>)

This Decorator extract **query string** values from the current request and add it as argument value. This decorator is able
to extract values the whole object by not passing any argument to the decorator, a partial patch passing a list of parameters
name, or a single value when just passing a parameter name, if any of the asked value does not exist value will be **undefined**.

<ParametersTable args={annotations.query} />

**Example**

```typescript title="GenericController.ts" {3-5}
class GenericController {
  @Get('/') // This Response to all GET Requests for controller route.
  method(@query() query) {}
  method2(@query('username') username) {}
  method3(@query(['username', 'password']) credentials) {}
}
```

## @body(<ArgumentAnnotations args={annotations.body}/>)

:::note Body Parser
As Expressive Tea does not come with a **Body Parser** configurations out of the box, this requires user setup prior use
this decorator. You will be able to get one **Body Parser** [here]('https://expressjs.com/en/4x/api.html#express.json').
:::

This Decorator extract **body param** values from the current request and add it as argument value. This decorator is able
to extract values the whole object by not passing any argument to the decorator, a partial patch passing a list of parameters
name, or a single value when just passing a parameter name, if any of the asked value does not exist value will be **undefined**.

<ParametersTable args={annotations.body} />

**Example**

```typescript
class GenericController {
  @Get('/') // This Response to all GET Requests for controller route.
  method(@body() body) {}
  method2(@body('username') username) {}
  method3(@body(['username', 'password']) credentials) {}
}
```

## @param(<ArgumentAnnotations args={annotations.param}/>)

It will return the value defined on the url path for the current method or a global middleware, this only works for
single parameter, also might be side affected if there is an any param decorator declared in the current controller.

**Example**

```typescript
class GenericController {
  @Get('/:userId') // This Response to all GET Requests for controller route.
  method(@param('userId') username) {}
}
```
