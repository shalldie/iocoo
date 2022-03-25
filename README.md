# iocoo

IOC library in OOP. 为 OOP 设计的 IOC 库。

[![npm][iocoo-icon]][iocoo-npm]
[![test status](https://img.shields.io/github/workflow/status/shalldie/iocoo/ci?label=test&logo=github&style=flat-square)](https://github.com/shalldie/iocoo/actions)
[![license](https://img.shields.io/npm/l/iocoo?logo=github&style=flat-square)](https://github.com/shalldie/iocoo)

## Installation

[reflect-metadata](https://www.npmjs.com/package/reflect-metadata) is required.

    npm install iocoo reflect-metadata --save

## Usage & Example

```ts
import 'reflect-metadata';
import { Inject, Injectable, getInstance } from 'iocoo';

@Injectable({ singleton: true })
class Child {
    @Inject()
    public child!: Child;
}

@Injectable({ singleton: false })
class Child2 {
    @Inject()
    public child2!: Child2;
}

@Injectable()
class Person {
    @Inject()
    public child!: Child;

    @Inject()
    public child2!: Child2;
}

// getInstance may return the instance of a class
const p = getInstance(Person);

// child is singleton
expect(p.child).toBe(p.child.child);

// child2 is not
expect(p.child2).not.toBe(p.child2.child2);
```

## License

MIT

<!-- iocoo -->

[iocoo-icon]: https://img.shields.io/npm/v/iocoo.svg?logo=npm&style=flat-square
[iocoo-npm]: https://www.npmjs.com/package/iocoo
