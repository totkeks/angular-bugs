# Bug reproduction

This bug shows a missing factory when using lazy module loading in routes and ahead-of-time compilation.

Just run `npm start` to reproduce the bug. This will first install all node modules, then build the library `my-lib` and then build the Angular application using ahead-of-time compilation.

The error looks like this:

```
ERROR in ./src/$$_lazy_route_resource lazy namespace object
Module not found: Error: Can't resolve '<your working directory>/angular-bugs/dist/my-lib/my-lib.ngfactory.js' in '<your working directory>\angular-bugs\src\$$_lazy_route_resource'
```

A simple workaround is to uncomment the following line in the `app-routing.module.ts`. This import could be anywhere, it basically tells the compiler that it should import this module. This results in the ngfactory being created, even though the import is later removed by dead code search, because it is never used.
But since the ngfactory was created, the webpack chunk compiler is able to bundle it as requested by the lazy route map.

```typescript
import { MyLibModule } from 'my-lib';
```
