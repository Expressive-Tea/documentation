---
title: Dynamic Response
slug: /features/dynamic-response
sidebar_label: Dynamic Response
sidebar_position: 1
---


## Response Handler

Since version 1.2 Expressive Tea introduce the concept of **Dynamic Response** that allows to clean the controller code
without populate all the **old** fashioned middleware arguments (*Request, Response and Next*) where at least **Next** is the
optional argument on the middleware function.

> This is **NOT** working on versions before 1.2, please aware of this and made and update of your project.

**Dynamic Response** allows to use the natural behavior of a function, this means, Expressive Tea will treat the return
of the Controller Method as direct response to the client request, this remove overpopulates methods with Express required
objects to respond a client request, such **Request** and **Response** methods and made them **optional** but if need it
we not need to use the old way to get access to them, in that case some **argument decorators** were introduced to allow
the use of the **Request, Response and Next** objects as used.

> **Expressive Tea** >= 1.2 maintains retro-compatibility with older versions in order to not break older implementations of
> the framework. The only current restriction to use **Dynamic Response** you **MUST** use the argument's decorators to access
> to the Express Route Objects (*Request, Response, Next*), otherwise Expressive Tea will take this as normal Express Route
> Middleware.

Other benefits of using Controller Methods in the natural way is that we are able to use **typings** in the response that 
helps to know what are you returning, of course, as same as Express you **MUST** return a renderable **String** objects
also **Promised** is valid one.


### Example

The next code is using the normal way for Express to create a **route middleware** that is only returning a string which
will be presented to the user as html.

```typescript title="GenericController.ts" {8,9}
import {Get, Route} from '@zerooneit/expressive-tea/decorators/router';
import {Request, Response} from 'express';

@Route('/')
export default class RootController {

    @Get('/')
    async index(req: Request, res: Response) {
        res.send('Hello World');
    }
}
```

With Dynamic Responses you will get the same result as above by returning just the text `Hello World` and remove the import
for typings code and the arguments from `index` method. As you can see below we remove one line and 2 arguments just to use
the method as dynamic response.

```typescript title="GenericController.ts" {7,8}
import {Get, Route} from '@zerooneit/expressive-tea/decorators/router';

@Route('/')
export default class RootController {

    @Get('/')
    async index(): Promise<string> {
        return 'Hello World';
    }
}
```

## Error Handler

With Dynamic Response will treat all the Exceptions automatically and delegates them to the **Error Handling** middleware,
either the default one or custom one if defined. By throwing an **Error** in the code Expressive Tea will handle it and returns
an Error Response to the client. All non-Expressive Tea Request Exception will be defaulted as 500 Errors on the returning, if
you want to made properly coded status on the response please check our [Expressive Tea Request Exceptions](../exceptions/request).


### Example

The code below represent an Express Exception handler, in this case in order to catch an error you must include the `try...catch`
block and pass directly to the `Error Handler` or just user `Response` object to response with an appropriate Error Code.

```typescript title="GenericController.ts" {8-11,15-17}
import {Get, Route} from '@zerooneit/expressive-tea/decorators/router';
import {Request, Response, Next} from 'express';

@Route('/')
export default class RootController {

    @Get('/')
    async index(req: Request, res: Response, next: Next) {
        try {
            throw new Error('Test error');
        } catch (e) { next(e); }
    }
    
    @Get('/errorCode')
    async errorCode(req: Request, res: Response) {
        res.status(400).send('Error')
    }
}
```

The same code above can be represented as `Dynamic Response` as follows:

```typescript title="GenericController.ts" {7-9,12-14}
import {Get, Route} from '@zerooneit/expressive-tea/decorators/router';

@Route('/')
export default class RootController {

    @Get('/dynamic')
    async dynamic() {
        throw new GenericRequestException('Test error');
    }
    
    @Get('/errorCode')
    async errorCode(req: Request, res: Response) {
        throw new BadRequestException('Error')
    }
}
```

## With Argument Decorators

Sometimes you might require access to the original `Request`, `Response` and `Next` it is possible through the [Arguments Decorators](../decorators/annotations)
in orders allows specific use of the object before, please follow the next specifications:

### Response
You will be able to use the [Response](http://expressjs.com/en/4x/api.html#res) object as same is working on Express, with the only restriction
that if you send a response using any form of response method (send, or json) and then return a value, the returned value will be **IGNORED**.

** Example **

```typescript title="GenericController.ts" {9-12}
import {Get, Route} from '@zerooneit/expressive-tea/decorators/router';
import {response} from '@zerooneit/expressive-tea/decorators/annotations';
import {Response} from 'express';

@Route('/')
export default class RootController {

    @Get('/')
    async index(@response res: Response): Promise<unknown> {
        res.send({message: 'this will show'});
        return `this will not show`;
    }
}
```

### Request
You will be able to use the [Request](http://expressjs.com/en/4x/api.html#req) object as same is working on Express.

** Example **

```typescript title="GenericController.ts" {9-11}
import {Get, Route} from '@zerooneit/expressive-tea/decorators/router';
import {request} from '@zerooneit/expressive-tea/decorators/annotations';
import {Request} from 'express';

@Route('/')
export default class RootController {

    @Get('/')
    async index(@request req: Request): Promise<unknown> {
        return `this will show ${req.get('userId)}`;
    }
}
```

### Next
The same happens when use the [Next](http://expressjs.com/en/guide/using-middleware.html) callback to redirect to a next 
middleware available, is the framework detects that you used the **next** callback method to redirect flow to a different 
middleware any return statement will be ignored by design.

```typescript title="GenericController.ts" {9-12}
import {Get, Route} from '@zerooneit/expressive-tea/decorators/router';
import {next} from '@zerooneit/expressive-tea/decorators/annotations';
import {Next} from 'express';

@Route('/')
export default class RootController {

    @Get('/')
    async index(@next next: Next): Promise<unknown> {
        next();
        return `this will not show`;
    }

}
```