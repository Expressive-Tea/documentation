---
title: Dependency Injection
slug: /services/dependency-injection
sidebar_label: Dependency Injection
sidebar_position: 1
---

import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import {dependencyInjectionService} from '../../src/components/Documentation/data/arguments-settings';

This Class contain the helpers to add on the dynamically Dependency Injection Providers which will be used globally by all the components.

## <PropertyAnnotations isConstructor="true"/> DependencyInjection()

## Properties

### <PropertyAnnotations isolationType="public" isStatic="true"/> Container <PropertyTypes type="InversifyContainer"/>

This is the implementation of a global inversify container that helps to contain every Dependency Injection.

## Methods

### <PropertyAnnotations isolationType="public" isStatic={true} isAsync={false}/> setProvider(<ArgumentAnnotations args={dependencyInjectionService.setProvider}/>)

This assign to the global inversify container Express Tea can set provider as user required to the global container and
shareable to all registered modules. This method used if required to assign a provider depending on params or data flow.

<ParametersTable args={dependencyInjectionService.setProvider} />
