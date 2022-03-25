import { INJECT_PROPS_KEY } from './constants';
import { TConstructor } from './types';

export function Inject(): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        const CurConstructor = target['constructor'];
        const FieldCurConstructor = Reflect.getMetadata('design:type', target, propertyKey);

        if (!FieldCurConstructor) {
            throw new Error('FieldCurConstructor not found');
        }

        let props: Record<string, TConstructor> = {};
        if (Reflect.hasOwnMetadata(INJECT_PROPS_KEY, CurConstructor)) {
            props = Reflect.getOwnMetadata(INJECT_PROPS_KEY, CurConstructor);
        }
        props[propertyKey as string] = FieldCurConstructor;
        Reflect.defineMetadata(INJECT_PROPS_KEY, props, CurConstructor);
    };
}
