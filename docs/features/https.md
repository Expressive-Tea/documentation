---
title: HTTPS
slug: /features/https
sidebar_label: Https
sidebar_position: 0.5
---

## HTTPS Server

If your code is dealing with sensitive data or secure connection is a **MUST** then your application need to use TLS. Per
recommendation, we encourage putting behind a Load Balancer or [Reverse Proxy](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/)
and use [Let's Encrypt](https://letsencrypt.org) on top of the configuration, however, Expressive Tea contains a configuration
to set up TLS by bringing your own certificates. To used there are three properties that you need to provide. The first is
the `securePort` which by default is `4443`, this is optional as always have a value. The next one is the `privateKey`
as his name mentioned is the *private key* of the `certificate` both must have the path to the corresponding files.

```typescript title="main.ts" {3-5}
@ServerSettings({
    port: 3000,
    securePort: 4443,
    privateKey: './certs/key.pem',
    certificate: './certs/cert.pem',
    startWebsocket: true
})
class Bootstrap extends Boot {
}

export default new Bootstrap().start()
    .catch(e => console.error(e));
```