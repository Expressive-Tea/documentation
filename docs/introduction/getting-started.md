---
title: Getting Started 
slug: /getting-started
sidebar_label: Getting Started
sidebar_position: 2
---

## Typescript

### Prerequisites

Important! Expressive Tea requires **Node >= 6**, **Express >= 4**, **TypeScript >= 2.0** and the ```experimentalDecorator```, ```lib```
compilation options in your **tsconfig.json** with the next configuration.

Expressive Tea is not having any configuration of any Express Plugin or any database connection beside is built it on
Express it is working as **Bring Your Own Architecture**.

### Installation

#### Stable Version
```shell
 npm i --save @zerooneit/expressive-tea
- or -
 npm i --save @zerooneit/expressive-tea@latest
```

#### Next Features
Expressive Tea's has been working on next features, for now this new features are in beta development and you wil be able to use them by use the next command:

```shell
 npm i --save @zerooneit/expressive-tea@next
```

### Setting up Typescript

If you want to explore all the settings for the **Typescript** you can run ```tsc --init``` for global **tsc compiler** or ```npx tsc --init``` for local 
**tsc compiler**, and change the values according to what is needed for Expressive Tea or just create a file and add the value. 

```json {14-15} title="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "sourceMap": true,
    "noEmit": true,
    "noImplicitAny": true,
    "target": "es6",
    "lib": [
      "es6",
      "dom"
    ],
    "module": "commonjs",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

### Create Main file

Create the entry file `maint.ts` to execute Expressive Tea, this will contain the minimal code to execute an empty server
(no endpoints declared) with 404 responses only.

```typescript title="main.ts"
import Boot from '@zerooneit/expressive-tea/classes/Boot'; 
import {ServerSettings} from '@zerooneit/expressive-tea/decorators/server'; 
import {ExpressiveTeaApplication} from '@zerooneit/expressive-tea/libs/interfaces';

@ServerSettings({ port: 8080, })
class Bootstrap extends Boot { }

export default new Bootstrap().start()
.catch(e => console.error(e));
```

### Install Dependencies
Let install all the dependencies need it with the next command:

```shell
npm install
```

### Run Server
Run Server with the next command:

```shell
npm start
```

:::note
Open your favorite browser and type the nxt url: **http://localhost:8080/**
:::

## Tea Cli
:::caution Under Develop
Tea CLI is currently under development and should change or contains issues we discourage use it at production
environments or used on your own risk.
:::

### Installation
```shell
npm install -g @expressive-tea/tea
```

### Create new app

```shell
tea brew test_app
``` 

follow the instructions after running de command...

### Run the application

```shell 
cd test_app 
tea serve
```
