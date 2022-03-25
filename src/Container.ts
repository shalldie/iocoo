import { INJECT_PROPS_KEY } from './constants';
import { InjectableOptions } from './Injectable';
import { TConstructor } from './types';

interface IContainerState<T = any> extends InjectableOptions<T> {
    instance?: T;
}

class Container {
    private map = new Map<TConstructor, IContainerState>();

    public has(constructor: TConstructor) {
        return this.map.has(constructor);
    }

    public get<T>(constructor: TConstructor<T>): IContainerState<T> {
        if (!this.has(constructor)) {
            throw Error('Constructor is not injectable');
        }

        return this.map.get(constructor)!;
    }

    public set(constructor: TConstructor, value: IContainerState) {
        return this.map.set(constructor, value);
    }

    public getInstance<T>(constructor: TConstructor<T>): T {
        const options = this.get(constructor);

        // 如果是已经生成过的单例
        if (options.singleton && options.instance) {
            return options.instance;
        }

        // 重新生成
        const instance = options.factory ? options.factory() : Reflect.construct(constructor, []);

        if (options.singleton) {
            options.instance = instance;
        }

        const props: Record<string, TConstructor> = Reflect.getOwnMetadata(INJECT_PROPS_KEY, constructor);

        for (const propertyKey in props) {
            let propertyInstance: T;
            Reflect.defineProperty(instance, propertyKey, {
                enumerable: true,
                get: () => {
                    if (!propertyInstance) {
                        propertyInstance = this.getInstance(props[propertyKey]);
                    }
                    return propertyInstance;
                }
            });
        }
        return instance;
    }
}

export const co = new Container();
