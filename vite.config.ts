import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()));

    return {
        plugins: [dts()],

        resolve: {
            // alias: {
            //     '~': path.join(__dirname, 'src')
            // }
        },

        build: {
            lib: {
                entry: path.join(__dirname, 'src/iocoo.ts'),
                name: 'IOCOO',
                fileName: format => `iocoo.${format}.js`,
                formats: ['es', 'umd']
            }
        }
    };
});
