export default {
    constructor: [
        {
            name: 'options',
            isOptional: true,
            type: { name: 'ExpressiveTeaServerProps', reference: '../interfaces-types/interfaces#expressiveteaserverprops'},
            defaults: "{ port: 3000}",
            description: "Add configurations to the Settings instance used in the application"
        }
    ],
    setMethod: [
        {
            name: 'settingName',
            type: { name: 'String' },
            description: "Add configurations to the Settings instance used in the application"
        },
        {
            name: 'value',
            type: { name: 'Any' },
            description: "Add configurations to the Settings instance used in the application"
        }
    ],
    getMethod: [
        {
            name: 'settingName',
            type: { name: 'String' },
            description: "Add configurations to the Settings instance used in the application"
        }
    ]
};

export const requestException = {
    genericRequest: {
        constructor: [
            {
                name: 'message',
                isOptional: false,
                type: { name: 'String'},
                defaults: 'Server',
                description: "Error Message"
            },
            {
                name: 'statusCode',
                isOptional: true,
                type: { name: 'Number'},
                defaults: '500',
                description: "HTTP Status Code"
            }
        ],
    },
    badRequest: {
        constructor: [
            {
                name: 'message',
                isOptional: true,
                type: { name: 'String'},
                defaults: 'Bad Request',
                description: "Error Mesage"
            }
        ],
    },
    unauthorizedRequest: {
        constructor: [
            {
                name: 'message',
                isOptional: true,
                type: { name: 'String'},
                defaults: 'Unauthorized Request',
                description: "Error Mesage"
            }
        ],
    }
};

export const serverDecorators = {
    pour: [
        {
            name: 'Plugin',
            type: { name: 'ExpressiveTeaPlugin'},
            description: "Expressive Tea Plugin Class"
        },
    ],
    serverSettings: [
        {
            name: 'options',
            isOptional: true,
            type: { name: 'ExpressiveTeaServerProps', reference: '../interfaces-types/interfaces#expressiveteaserverprops'},
            defaults: "{ port: 3000}",
            description: "Decorate application with user settings before start application"
        }
    ],
    staticDecorator: [
        {
            name: 'root',
            type: { name: 'BOOT_STAGE'},
            description: "Path to start delivery resources."
        },
        {
            name: 'virtual',
            isOptional: true,
            type: { name: 'String'},
            defaults: 'null',
            description: "Virtual Path on Application Server"
        },
        {
            name: 'options',
            isOptional: true,
            defaults: '{}',
            type: { name: 'ExpressiveTeaStaticFileServer'},
            description: "Static Server Options"
        }
    ],
    expressDirective: [
        {
            name: 'name',
            type: { name: 'String'},
            description: "Directive Name from Express JS"
        },
        {
            name: '...settings',
            isOptional: true,
            type: { name: '*'},
            description: "Directive Settings"
        },
    ],
    settings: [
        {
            name: 'settingName',
            type: { name: 'String'},
            description: "Decorate Class Property with the [Setting Name] value or undefined."
        },
    ],
    registerModule: [
        {
            name: 'Module',
            type: { name: 'ExpressiveTeaModule'},
            description: "A defined module class."
        },
    ],
    plug: [
        {
            name: 'stage',
            type: { name: 'BOOT_STAGE'},
            description: "Boot Stage where attached the plugin."
        },
        {
            name: 'name',
            type: { name: 'String'},
            description: "Plugin name"
        },
        {
            name: 'method',
            type: { name: 'Function'},
            description: "Callback Method where application create the configuration."
        },
        {
            name: 'required',
            isOptional: true,
            type: { name: 'Boolean'},
            defaults: "false",
            description: "Is Required to Boot"
        }
    ]
};

export const moduleDecorators = {
    module: [
        {
            name: 'Module',
            type: { name: 'ExpressiveTeaModuleProps', reference: '../interfaces-types/interfaces#expressiveteamoduleprops'},
            description: "Expressive Tea Module Class"
        },
    ]
};

export const routerDecorators = {
    router: [
        {
            name: 'mountpoint',
            type: { name: 'String'},
            defaults: '/',
            description: "Root Path"
        }
    ],
    route: [
        {
            name: 'route',
            type: { name: 'String'},
            defaults: '*',
            description: "Route Path"
        }
    ],
    param: [
        {
            name: 'paramName',
            type: { name: 'String'},
            description: "Route Parameter Name."
        }
    ],
    middleware: [
        {
            name: 'middleware',
            type: { name: 'Function'},
            description: "Middleware Function"
        }
    ],
    view: [
        {
            name: 'viewName',
            type: { name: 'String'},
            description: "View Name"
        },
        {
            name: 'route',
            type: { name: 'String'},
            description: "Path"
        }
    ],
};

export const annotations = {
    query: [
        {
            name: 'parameter',
            isOptional: true,
            type: { name: 'String| String[] | undefined'},
            description: "<b>String:</b> returns the query argument associated to the name. <br> " +
                "<b>String[]:</b> returns the query argument associated to the name. <br>" +
                "<b>undefined:</b> returns the query argument associated to the name.<br>" +
                "Other case is returning <strong>undefined</strong>."
        }
    ],
    body: [
        {
            name: 'bodyParam',
            isOptional: true,
            type: { name: 'String| String[] | undefined'},
            description: "<b>String:</b> returns the query argument associated to the name. <br> " +
                "<b>String[]:</b> returns the query argument associated to the name. <br>" +
                "<b>undefined:</b> returns the query argument associated to the name.<br>" +
                "Other case is returning <strong>undefined</strong>."
        }
    ],
    param: [
        {
            name: 'parameter',
            type: { name: 'String'},
            description: "Url Defined Parameter other case <strong>undefined</strong>."
        }
    ]
};

export const dependencyInjectionService = {
    setProvider: [
        {
            name: 'ProviderFactory',
            type: { name: 'ProviderFactory'},
            description: 'Assign Provider Class decorated by inversify.'
        },
        {
            name: 'providerName',
            isOptional: true,
            default: 'Provider Factory Name',
            type: { name: 'String| Symbol | never'},
            description:'Provide Identification.'
        }
    ]
};

export const websocketsService = {
    constructor: [
        {
            name: 'ws',
            isOptional: true,
            type: { name: 'Websocket.Server'},
            description:'Non Secure Websocket Server Instance.'
        },
        {
            name: 'wss',
            isOptional: true,
            type: { name: 'Websocket.Server'},
            description:'Secure Websocket Server Instance.'
        }
    ],
    getWebsocket: [
        {
            name: 'httpServer',
            type: { name: 'http.Server | https.Server'},
            description:'Get Websocket instance associated with the http or https Server.'
        }
    ],
    setWebsocket: [
        {
            name: 'ws',
            type: { name: 'Websocket.Server'},
            description:'Assign Websocket Server Instance.'
        }
    ],
    setSecureWebsocket: [
        {
            name: 'wss',
            type: { name: 'Websocket.Server'},
            description:'Assing <b>SECURE</b> Websocket Server Instance.'
        }
    ]
};

export const dependencyInjectionDecorators = {
    inject: [
        {
            name: 'injectable',
            type: { name: 'InjectableClass | Symbol'},
            description: "Injectable Class or Symbol from declared providers in modules."
        }
    ],
    injectNamed: [
        {
            name: 'injectableName',
            type: { name: 'String | Symbol'},
            description: "Root Path"
        }
    ],
    injectTagged: [
        {
            name: 'injectableTagged',
            type: { name: 'String | Symbol'},
            description: "Injectable Tagged Defined"
        }
    ],
    multiInject: [
        {
            name: 'multiInjectName',
            type: { name: 'String | Symbol'},
            description: "Multi Inject Injections according to inversify."
        }
    ]
}