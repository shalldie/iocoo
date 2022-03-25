import { INJECTABLE_KEY } from './constants';
import { co } from './Container';

export class InjectableOptions<T = any> {
    /**
     *  default: false
     *
     * @memberof InjectableOptions
     */
    singleton? = false;
    /**
     * Factory to create instance
     *
     * @memberof InjectableOptions
     */
    factory?: () => T;
}

export function Injectable(options?: InjectableOptions): ClassDecorator {
    return (target: any) => {
        // console.log('injectable target', target.name);

        options = {
            ...new InjectableOptions(),
            ...options
        };

        co.set(target, options as InjectableOptions);
        Reflect.defineMetadata(INJECTABLE_KEY, true, target);
    };
}
