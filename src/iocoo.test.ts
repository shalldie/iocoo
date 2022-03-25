import 'reflect-metadata';
import { Inject, Injectable, getInstance } from './iocoo';

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

test('instance', () => {
    const p = getInstance(Person);

    expect(
        [
            //
            p.child,
            p.child.child,
            p.child2,
            p.child2.child2
        ].every(n => !!n)
    ).toBe(true);
});

test('singleton', () => {
    const p = getInstance(Person);

    expect(p.child).toBe(p.child.child);

    expect(p.child2).not.toBe(p.child2.child2);
});
