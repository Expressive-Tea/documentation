---
title: Proxy
slug: /decorators/proxy
sidebar_label: Proxy
sidebar_position: 6
---

import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import {serverDecorators, proxyDecorators} from '../../src/components/Documentation/data/arguments-settings';


## @ProxyContainer(<ArgumentAnnotations args={proxyDecorators.proxyContainer}/>)
Plug Class Decorator create a simple plugin to execute in one of the public stages defined on **BOOT_STAGES**, might be 
useful to attach a simple Express Server configuration.

<ParametersTable args={proxyDecorators.proxyContainer} />

**Example**
```typescript
@ProxyContainer('/api/user', 'https://example.com/user/')
class UserProxy{}
```

## @ProxyProperty(<ArgumentAnnotations args={serverDecorators.pour}/>)

From version **1.1.0** Expressive Tea allow using external plugins by installing the node package `@expressive-tea/plugin`. 
This plugin engine allows creates more complex plugin configuration and provision since allowing multi Boot Stage configuration 
and check other plugin dependencies.

:::note NOTE
In order to use this you will need to user the @expressive-tea/plugin package you can install it using npm install `@expressive-tea/plugin --save`.
:::
<ParametersTable args={serverDecorators.pour} />

**Example**
```typescript
@Pour(PluginClass)
class Example extends Boot {}
```

## @ProxyOption(<ArgumentAnnotations args={serverDecorators.serverSettings}/>)

**Server Settings Singleton Class** Decorator to Provide the Configuration to the server or another component on the projects,
is working as a container to store user and library settings.

<ParametersTable args={serverDecorators.serverSettings} />

**Example**
```typescript
@ServerSettings({
    port: 8080
})
class Example extends Boot {}
```

## @Static(<ArgumentAnnotations args={serverDecorators.staticDecorator}/>)

Create a new middleware function to serve files from within a given root directory. The file to serve will be determined 
by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, 
this module will instead call next() to move on to the next middleware, allowing for stacking and fall-backs. 
Check it out [Express Static](https://expressjs.com/en/starter/static-files.html) to more information.

<ParametersTable args={serverDecorators.staticDecorator} />

**Example**
```typescript
@Static('/assets')
class Example extends Boot {}
```

## @ExpressDirective(<ArgumentAnnotations args={serverDecorators.expressDirective}/>)

Set or Update Express application settings, and allow to change the behavior of the server where is listed on the next 
link Express Settings as this is using the same principle of app.set you should understand that is only apply the special 
settings mentioned above. For more information please read [this](https://expressjs.com/en/4x/api.html#app.set)

<ParametersTable args={serverDecorators.expressDirective} />

**Example**
```typescript
@ExpressDirective()
class Example extends Boot {}
```

## @Setting(<ArgumentAnnotations args={serverDecorators.settings}/>)

Setting Property Decorator Automatically assign a settings declared on Settings Service into the decorated property. 
All properties will contain the settings value or undefined if current settings is not founded.

<ParametersTable args={serverDecorators.settings} />

**Example**
```typescript
class Example {
    @Setting('port')
    port: number;
}
```

## @RegisterModule(<ArgumentAnnotations args={serverDecorators.registerModule}/>)

Register Module Method Decorator this Method Decorator is used at bootstrap level and should decorate the start method 
with a Module Class.

<ParametersTable args={serverDecorators.registerModule} />

**Example**
```typescript
class Example extends Boot {
    @RegisterModule(ModuleClass)
    async start() {
        return super.start();
    }
}
```