import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { defineConfig } from 'rollup';
import filesize from 'rollup-plugin-filesize';

export default defineConfig({
    input: path.join(__dirname, 'src/iocoo.ts'),
    output: [
        {
            name: 'IOCOO',
            file: 'dist/iocoo.js',
            format: 'umd'
        }
    ],
    plugins: [nodeResolve(), commonjs(), typescript(), filesize()]
});
