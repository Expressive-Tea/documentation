---
title: Settings
slug: /classes/settings
sidebar_label: Settings
sidebar_position: 2
---
import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import args from '../../src/components/Documentation/data/arguments-settings';


**Settings Singleton Class** to allow store server, application and plugins settings during design mode. Can be used on
run stage except by the port setting or any other in-design properties everything can be changed and reflected immediately,
the fact that some properties will be ignored after design stage is because is used only one time to provide initial
settings or some initialization parameters.

## <PropertyAnnotations isConstructor="true"/> Settings(<ArgumentAnnotations args={args.constructor}/>) <PropertyTypes returns="Settings" typeRef="#instance"/>
Constructor is returning a **Singleton** instance of the class, is that instance is not exists this will create it automatically
which it will maintain that reference itself through all the runtime cycle, or you explicit reset it.

<ParametersTable args={args.constructor} />

## Properties
### <PropertyAnnotations isolationType="private" isStatic="true"/> instance <PropertyTypes type="Settings" typeRef="/docs/classes/settings#settings"/>
Singleton Instance Reference.

### <PropertyAnnotations isolationType="private"/> options <PropertyTypes type="ExpressiveTeaServerProps" typeRef="../interfaces-types/interfaces#expressiveteaserverprops"/>
Server configuration options storage.

## Methods
### <PropertyAnnotations isolationType="public" isStatic="true"/> reset()  <PropertyTypes returns="void"/>

Reset Singleton instance to the default values, all changes will be erased is not recommendable to use it multiple times
since all your options will be lost, also, unless you have an option how to recover this We **STRONGLY** not recommended to use often.

> Consider this is not **DELETE** initialization options, even if you deleted this is used one time at the application starts.

### <PropertyAnnotations isolationType="public" isStatic="true"/> getInstance() <PropertyTypes returns="ExpressJS"/>

Get Current Singleton Instance or Created if not exists, When a new instance is created it will contain default options.

### <PropertyAnnotations isolationType="public"/> getOptions() <PropertyTypes returns="ExpressiveTeaServerProps" typeRef="../interfaces-types/interfaces#expressiveteaserverprops"/>

It will return the latest snapshot options registered at the time that this method is called, as Expressive Tea is
designed as async methods some time options should not be available.

### <PropertyAnnotations isolationType="public"/> get(<ArgumentAnnotations args={args.getMethod}/>) <PropertyTypes returns="Any"/>

Retrieve the option as is designated on \<settingName\> parameter, if does not exist it will return null instead of
undefined to give them a value and data consistency.

<ParametersTable args={args.getMethod} />

### <PropertyAnnotations isolationType="public"/> set(<ArgumentAnnotations args={args.setMethod}/>) <PropertyTypes returns="void"/>

Initialize or Edit an application options, this is only for in run options, as explained above initialization
options it won't affect any functionality as the application already started.

<ParametersTable args={args.setMethod} />

### <PropertyAnnotations isolationType="public"/> merge(<ArgumentAnnotations args={args.constructor}/>)  <PropertyTypes returns="void"/>

This merges multiple options at the same time, this can edit or create the options.

<ParametersTable args={args.constructor} />

