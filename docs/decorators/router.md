---
title: Router
slug: /decorators/router
sidebar_label: Router
sidebar_position: 3
---

import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import {routerDecorators} from '../../src/components/Documentation/data/arguments-settings';

## @Route(<ArgumentAnnotations args={routerDecorators.router}/>)
**Route Controller Decorator** assign a router point into the **module mount-point** placeholder and is used just to create a 
bucket to contains all the **endpoints** defined by method of the **Controller**. If mount-point is not defined automatically this 
must be considerate mounted on **root**, but is mandatory define the `Controller` with this decorator in order to allow Expressive 
Tea Setting up the Controller as part of a Module.

<ParametersTable args={routerDecorators.router} />

**Example**
```typescript title="GenericController.ts" {1}
@Route('/')
class Example {}
```

## @Get(<ArgumentAnnotations args={routerDecorators.route}/>)
Define a **GET** Endpoint response over the controller router and can define in which route should be responded and by default 
this is responding to everything on the controller root path.

If you need more information about how this is working you can follow [this](https://expressjs.com/en/4x/api.html#router.METHOD) to
explore all the options and settings.
<ParametersTable args={routerDecorators.route} />

**Example**
```typescript title="GenericController.ts" {3,6}
@Route('/')
class GenericController {
    @Get() // This Response to all GET Requests for controller route.
    methodError() {}

    @Get('/data') // This Response to "/data" GET Requests for controller route.
    methodData() {}
}
```
## @Post(<ArgumentAnnotations args={routerDecorators.route}/>)
Define a **POST** Endpoint response over the controller router and can define in which route should be responded and by default
this is responding to everything on the controller root path.

If you need more information about how this is working you can follow [this](https://expressjs.com/en/4x/api.html#router.METHOD) to
explore all the options and settings.

<ParametersTable args={routerDecorators.route} />

**Example**
```typescript title="GenericController.ts" {3,6}
@Route('/')
class GenericController {
    @Post() // This Response to all GET Requests for controller route.
    methodError() {}

    @Post('/data') // This Response to "/data" GET Requests for controller route.
    methodData() {}
}
```
## @Put(<ArgumentAnnotations args={routerDecorators.route}/>)
Define a **PUT** Endpoint response over the controller router and can define in which route should be responded and by default
this is responding to everything on the controller root path.

If you need more information about how this is working you can follow [this](https://expressjs.com/en/4x/api.html#router.METHOD) to
explore all the options and settings.

<ParametersTable args={routerDecorators.route} />

**Example**
```typescript title="GenericController.ts" {3,6}
@Route('/')
class GenericController {
    @Put() // This Response to all PUT Requests for controller route.
    methodError() {}

    @Put('/data') // This Response to "/data" PUT Requests for controller route.
    methodData() {}
}
```
## @Patch(<ArgumentAnnotations args={routerDecorators.route}/>)
Define a **PATCH** Endpoint response over the controller router and can define in which route should be responded and by default
this is responding to everything on the controller root path.

If you need more information about how this is working you can follow [this](https://expressjs.com/en/4x/api.html#router.METHOD) to
explore all the options and settings.

<ParametersTable args={routerDecorators.route} />

**Example**
```typescript title="GenericController.ts" {3,6}
@Route('/')
class GenericController {
    @Patch() // This Response to all PATCH Requests for controller route.
    methodError() {}

    @Patch('/data') // This Response to "/data" PATCH Requests for controller route.
    methodData() {}
}
```
## @Delete(<ArgumentAnnotations args={routerDecorators.route}/>)
Define a **DELETE** Endpoint response over the controller router and can define in which route should be responded and by default
this is responding to everything on the controller root path.

If you need more information about how this is working you can follow [this](https://expressjs.com/en/4x/api.html#router.METHOD) to
explore all the options and settings.

<ParametersTable args={routerDecorators.route} />

**Example**
```typescript title="GenericController.ts" {3,6}
@Route('/')
class GenericController {
    @Delete() // This Response to all DELETE Requests for controller route.
    methodError() {}

    @Delete('/data') // This Response to "/data" DELETE Requests for controller route.
    methodData() {}
}
```
## @Param(<ArgumentAnnotations args={routerDecorators.param}/>)
As **ExpressJS** this allows to transform a route local parameter inside the controller defined endpoints by matching the `name` of
the parameter and **ONLY** will be triggered on the endpoints defined in the controller, this is not inheritance or reuse in other
`Controller` which mean you need to define another decorated **Param** method, however, you can use a service to share the a method
between the different controllers.

If you need more information about how this is working you can follow [this](https://expressjs.com/en/4x/api.html#router.param) to
explore all the options and settings.

<ParametersTable args={routerDecorators.param} />

**Example**
```typescript title="GenericController.ts" {3}
@Route('/')
class GenericController {
    @Param('userId') // This Response to all GET Requests for controller route.
    async methodError(req, res, next, param, id) {
        const user = await User.find(id)
        try {
            if(!user) throw new Error('User not Found');

            req.user = user;
            next();
        } catch(e) {
            next(e);
        }
    }

    @Get('/:userId') // This Response to "/:userId" GET Requests for controller route.
    methodData(req, res) {
        res.json(req.user);
    }
}
```

## @Middleware(<ArgumentAnnotations args={routerDecorators.middleware}/>)
This decorator has a double functionality  to add a middleware at router or endpoint level, and **MUST** follow same
guidelines from ExpressJS as you can follow the documentation [here](https://expressjs.com/en/guide/using-middleware.html#using-middleware),
except for **Application Middlewares**  which that is delegate to the `Plugin` Stage.

<ParametersTable args={routerDecorators.middleware} />

**Example**
```typescript title="GenericController.ts" {2,8}
@Route('/')
@Middleware((req, res, next) => {
    req.controllerName = 'Example';
    next();
})
class ExampleController {
    @Get('/someResponse')
    @Middleware((req, res, next) => {
        req.methodName = 'someResponse';
        next();
    })
    someRespone(req, res) {
        res.send(`${req.controllerName}:${req.methodName}`);
    }
}
```
## @View(<ArgumentAnnotations args={routerDecorators.view}/>)

When you configure a `template engine` in Expressive Tea via `Plugin` or a simple application middleware this will allow
to create a **GET** response as the **route** name is defined, also, this method **MUST** returns an **Object** with template
variables with the expected value of each variable, otherwise this will fail or return empty.

<ParametersTable args={routerDecorators.view} />

**Example**
```typescript {5} title="GenericController.ts"
@Route('/')
class GenericController {
  @View('login', '/view') // This Response to all GET Requests for controller route.
  loginView() {
      return { username: 'test', email: 'test@example.com'};
  }
}
```