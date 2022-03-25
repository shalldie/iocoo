// import 'reflect-metadata';

import { Injectable, InjectableOptions } from './Injectable';
import { Inject } from './Inject';
import { TConstructor } from './types';
import { co } from './Container';

const getInstance = <T>(constructor: TConstructor<T>) => co.getInstance(constructor);

const ioc = {
    getInstance,
    Injectable,
    InjectableOptions,
    Inject
};

export { ioc, getInstance, Injectable, InjectableOptions, Inject };
