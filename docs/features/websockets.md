---
title: Websockets 
slug: /features/websockets 
sidebar_label: Websockets 
sidebar_position: 2
---
:::caution Beta Version 
This is a Beta Version for implementation of the Websockets using the
library [WS](https://www.npmjs.com/package/ws), and could change the implementation.
:::

## Setup

Started on version **1.2.0** Websocket protocol rolled out in the core of Expressive Tea and bring the chance to work
with this protocol out of the box. By just passing the flag **startWebsocket** setup to **true**, then, a **
WebSocket.Server** instance from
[WS](https://www.npmjs.com/package/ws) package attached to the main server under the same port (by default 3000).

```typescript title="main.ts" {3}
@ServerSettings({
    port: 8080,
    startWebsocket: true
})
class Bootstrap extends Boot {
}

export default new Bootstrap().start()
    .catch(e => console.error(e));
```


> Stage To initialize this **MUST** be hooked into the Bootstrap State **START** as Websocket server need a http server 
> that is already ready for listen requests, other case **WILL NOT** work.

## WSS Server

> Please read [this](../features/https) before continue on this section.

If you want to use the Web Socket Secure (wss://) protocol you must configure Expressive Tea to accept **https** request and when
settings for `startWebsocket` is set to `true`

```typescript title="main.ts" {3-4}
@ServerSettings({
    port: 8080,
    privateKey: './certs/key.pem',
    certificate: './certs/cert.pem',
    startWebsocket: true
})
class Bootstrap extends Boot {
}

export default new Bootstrap().start()
    .catch(e => console.error(e));
```

## Example

The next example will create a new Expressive Tea application with attached Websocket Service on the port **8080**, after
initialization and boot process you will be able to connect to the new service via **ws://** protocol.

```typescript title="main.ts" {11}
   import * as WebSocket from 'ws';
   import Boot from '@zerooneit/expressive-tea/classes/Boot';
   import {Plug, Pour, ServerSettings} from '@zerooneit/expressive-tea/decorators/server';
   import {BOOT_STAGES} from '@zerooneit/expressive-tea/libs/constants';
   import WebsocketService from '@zerooneit/expressive-tea/services/WebsocketService';

   @ServerSettings({
       port: 8080,
       startWebsocket: true
   })
   @Plug(BOOT_STAGES.START, 'Initialize Websockets', initializeWebSocket, true)
   class Bootstrap extends Boot {
   }

   export default new Bootstrap().start()
       .catch(e => console.error(e));

   function initializeWebSocket(application: any) {
       const websocketService: WebsocketService = WebsocketService.getInstance();
       const ws: WebSocket.Server = websocketService.getWebsocket(websocketService.httpServer);

       ws.on('connection', (client: WebSocket, request: unknown, user: any) => {
         client.send('hello world!!');
       });
   }

```

As the server above is running and ready to listen you can select any of the client that you like, in the next example
we are using `wscat` as you can install it using ```npm i -g wscat``` and follow the next example.

```shell
~
❯ wscat -c ws://localhost:8080
Connected (press CTRL+C to quit)
< hello world!!
>
```