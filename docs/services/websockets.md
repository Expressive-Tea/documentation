---
title: Websockets
slug: /services/websockets
sidebar_label: Websockets
sidebar_position: 2
---
import PropertyAnnotations from '../../src/components/Documentation/PropertyAnnotations';
import ArgumentAnnotations from '../../src/components/Documentation/ArgumentAnnotations';
import PropertyTypes from '../../src/components/Documentation/PropertyTypes';
import ParametersTable from '../../src/components/Documentation/ParametersTable';
import {websocketsService} from '../../src/components/Documentation/data/arguments-settings';

Returns WebsocketService singleton instance as a container of the Websockets implementations it will be used to extract
and create the listeners to messages and setup on your way the responses for websockets. Singleton still not created then 
initialize it a **new** Singleton instance.

## <PropertyAnnotations isConstructor="true"/> WebsocketService(<ArgumentAnnotations args={websocketsService.constructor}/>)

<ParametersTable args={websocketsService.constructor} />

## Properties

### <PropertyAnnotations isolationType="private" isStatic={true} /> instance <PropertyTypes type="Websocket.Server"/>
This is the initialized Singleton instance and will be undefined if not initialized.

### <PropertyAnnotations isolationType="private" isStatic={false} isAsync={false}/> ws <PropertyTypes type="Websocket.Server"/>
Private and readonly property that contains an instance of WebSocket.Server.

### <PropertyAnnotations isolationType="private" isStatic={false} isReadOnly={false}/> wss <PropertyTypes type="Websocket.Server"/>
Private and readonly property that contains an instance of WebSocket.Server over secure protocol.

### <PropertyAnnotations isolationType="public" isStatic={false} isReadOnly={false}/> httpServer <PropertyTypes type="http.Server"/>
Public property that contains an instance for http.Server;

### <PropertyAnnotations isolationType="public" isStatic={false} isReadOnly={false}/> httpsServer <PropertyTypes type="https.Server"/>
Public property that contains an instance for https.Server;

## Methods

### <PropertyAnnotations isolationType="public" isStatic={true} isAsync={false}/> getInstance(<ArgumentAnnotations args={websocketsService.constructor} />) <PropertyTypes returns="WebsocketService"/>
Returns WebsocketService singleton instance, however, if Singleton still is not already initialize this will create the 
Singleton instance instead return it and for that ws should passed as minimum requirement to initialize this.

<ParametersTable args={websocketsService.constructor} />

### <PropertyAnnotations isolationType="public" isStatic={true} isAsync={false}/> init(<ArgumentAnnotations args={websocketsService.constructor} />) <PropertyTypes returns="void"/>
Try to initialize WebsocketService singleton instance when is not already initialized this will create the Singleton 
instance and ws argument should be passed as minimum requirement to initialize this. If already initialized this will be ignored.

<ParametersTable args={websocketsService.constructor} />

### <PropertyAnnotations isolationType="public" isStatic={true} isAsync={false}/> clear() <PropertyTypes returns="void"/>
Clear the Singleton instance and ready to be created again.

### <PropertyAnnotations isolationType="public" isStatic={false} isAsync={false}/> getWebsocket(<ArgumentAnnotations args={websocketsService.getWebsocket}/>) <PropertyTypes returns="Websocket.Server"/>
Returns the mapped Websocket Server attached returns WebSocket.Server

<ParametersTable args={websocketsService.getWebsocket} />

### <PropertyAnnotations isolationType="public" isStatic={false} isAsync={false}/> setHttpServer(<ArgumentAnnotations args={websocketsService.getWebsocket}/>) <PropertyTypes returns="void"/>
This populate the properties httpServer or httpsServer depends on the type of server passed as arguments it will save it on the respective Singleton property.

<ParametersTable args={websocketsService.getWebsocket} />

### <PropertyAnnotations isolationType="public" isStatic={false} isAsync={false}/> setWebsocket(<ArgumentAnnotations args={websocketsService.setWebsocket}/>) <PropertyTypes returns="Websocket.Server"/>
This populate the properties httpServer or httpsServer depends on the type of server passed as arguments it will save it on the respective Singleton property.

<ParametersTable args={websocketsService.setWebsocket} />

### <PropertyAnnotations isolationType="public" isStatic={false} isAsync={false}/> setSecureWebsocket(<ArgumentAnnotations args={websocketsService.setSecureWebsocket}/>) <PropertyTypes returns="Websocket.Server"/>
This populate the properties httpServer or httpsServer depends on the type of server passed as arguments it will save it on the respective Singleton property.

<ParametersTable args={websocketsService.setSecureWebsocket} />