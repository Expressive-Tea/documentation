---
title: Request Exception
slug: /exceptions/request
sidebar_label: Request
sidebar_position: 2
---
import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import {requestException} from '../../src/components/Documentation/data/arguments-settings';

## GenericRequestException(<ArgumentAnnotations args={requestException.genericRequest.constructor}/>)
Returns a Generic HTTP Exception to the client.

<ParametersTable args={requestException.genericRequest.constructor} />

### Example

```typescript
@Router('/')
class ExceptionExampleController {
  @Get('/exception')
  exceptionMethod(req, res, next) {
    try {
      throw new GenericRequestException('Page not found', 404);
    } catch (e) {
      res.status(e.code).send(e.message);
    }
  }
}
```

## BadRequestException(<ArgumentAnnotations args={requestException.badRequest.constructor}/>)
Returns a bad request HTTP Exception Response to the Client.

<ParametersTable args={requestException.badRequest.constructor} />

### Example

```typescript
@Router('/')
class ExceptionExampleController {
    @Get('/exception')
    exceptionMethod(req, res, next) {
        throw new BadRequestException();
    }
}
```

## UnauthorizedException(<ArgumentAnnotations args={requestException.unauthorizedRequest.constructor}/>)
Returns an unauthorized HTTP Exception Response to the Client.

<ParametersTable args={requestException.unauthorizedRequest.constructor} />

### Example

```typescript
@Router('/')
class ExceptionExampleController {
    @Get('/exception')
    exceptionMethod(req, res, next) {
        throw new UnauthorizedException();
    }
}
```