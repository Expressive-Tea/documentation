---
title: Dependency Injections
slug: /decorators/dependency-injections
sidebar_label: Dependency Injections
sidebar_position: 5
---
import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import {dependencyInjectionDecorators} from '../../src/components/Documentation/data/arguments-settings';

## @DependencyInjection.Inject(<ArgumentAnnotations args={dependencyInjectionDecorators.inject}/>)
This annotation allow to inject a service defined in the module, or a defined `Service` defined by using the [Dependency Injection Service](../services/dependency-injection#setprovider).

<ParametersTable args={dependencyInjectionDecorators.inject} />

**Example**
```typescript
import DependencyInjection from '@zerooneit/expressive-tea/services/DependencyInjection';

class TestService {
    test() {
        console.log('Test');
    }
}

DependencyInjection.setProvider(TestService);

class TestClass {
    @DependencyInjection.Inject(TestService)
    testService: TestService;
}
```

## @DependencyInjection.InjectNamed(<ArgumentAnnotations args={dependencyInjectionDecorators.injectNamed}/>)
Same as Inject this is used to inject a service using how is named when added into the dependency injection container,
per default a `Class Service` constructor name is saved as a name.

<ParametersTable args={dependencyInjectionDecorators.injectNamed} />

**Example**
```typescript
import DependencyInjection from '@zerooneit/expressive-tea/services/DependencyInjection';

class TestService {
    test() {
        console.log('Test');
    }
}

DependencyInjection.setProvider(TestService, 'aService');

class TestClass {
    @DependencyInjection.InjectNamed('aService')
    testService: TestService;
}
```
