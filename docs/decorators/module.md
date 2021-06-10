---
title: Module
slug: /decorators/module
sidebar_label: Module
sidebar_position: 2
---
import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import {moduleDecorators} from '../../src/components/Documentation/data/arguments-settings';

## @Module(<ArgumentAnnotations args={moduleDecorators.module}/>)

Module Decorator is a Class Decorator which is help to register a Module into Expressive Tea. A module is a placeholder 
over a mount-point. We can be considerate a module like a container which provide isolation and modularity for our project. 
This module can be mounted in different applications and will move all the controller routes too.

On the modules will be defined a **path (mount-point)** where declared `Controllers` endpoints will be mounting on, also,
will define all the `Controllers` and the dependency injection with a list of `Providers`.

<ParametersTable args={moduleDecorators.module} />

**Example**
```typescript
@Module({
  controllers: [],
  providers: [],
  mountpoint: '/'
})
class Example {}
```