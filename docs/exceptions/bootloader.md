---
title: Bootloader Exceptions
slug: /exceptions/bootloader
sidebar_label: Bootloader
sidebar_position: 1
---
## BootLoaderRequiredExceptions
Exception Class for Hard Required Plugins. This Exception is used internally to describe when a required plugin fails, 
is the server returns this is meaning a module fails, and the application it won't start since the plugin is marked as 
hard require to initialize the application.

## BootLoaderSoftExceptions
Exception Class for Soft Required Plugins This Exception is used internally to describe when a required plugin fails but 
allow continuing running the application, and it means that plugin fails to initialize but is not critical to the app.