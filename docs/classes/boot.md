---
title: Boot
slug: /classes/boot
sidebar_label: Boot
sidebar_position: 1
---

import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';

**Bootstrap Server Class** is an abstract class to provide the Expressive Tea engine and bootstraps tools. 
This contains the logic and full functionality of Expressive Tea and only can be extended, also, under the hood is setting up
an ```ExpressJS``` application and configure to start getting responses. The default behavior is to respond **404** if not modules or
static is declared.

## <PropertyAnnotations isConstructor="true" isDecorable="true"/> Boot()

## Properties
### <PropertyAnnotations isolationType="private" isStatic={false} isAsync={false}/> server <PropertyTypes type="ExpressJS"/>
Contains the read only ```ExpressJS``` instance that will use internally to set up automatically the Express application.

### <PropertyAnnotations isolationType="public" isStatic={false} isAsync={false}/> settings <PropertyTypes type="Settings" typeRef="/docs/classes/settings#setting"/>
Contains the main [```Settings```](settings) singleton instance reference, that contains all the settings passing through 
by [**Server Settings Decorator**](../decorators/server#serversettings) or any plugin, however, if settings still does not initialize it 
will create automatically when create a new instance.

## Methods
### <PropertyAnnotations isolationType="public" isStatic={false} isAsync={false}/> getApplication() <PropertyTypes returns="ExpressJS"/>
Returns defined **ExpressJS** Application defined when the extended class use the constructor.

### <PropertyAnnotations isolationType="public" isStatic={false} isAsync={true}/> start() <PropertyTypes returns="Promise<ExpressiveTeaApplication>" typeRef="../interfaces-types/interfaces#expressiveteaapplication" />
Bootstrap and verify that all the required plugins are correctly configured and proceed to attach all the registered modules.
Remember this is the unique method that must be decorated for the Register Module decorator.

:::note Override
When override this method must call parent method too using **```super.start()```**.
:::
## Examples.

The example bellow it will create a simple web server without any endpoint to response, every request it will result at 404 Not Found response.

```typescript title="main.ts"
import Boot from '@zerooneit/expressive-tea/classes/Boot';

class Bootstrap extends Boot {
}

export default new Bootstrap().start().catch((e) => console.error(e));

// Open in your browser http://localhost:3000/
```