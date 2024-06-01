import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        host: 'localhost',
        port: 5173
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@interfaces': path.resolve(__dirname, './src/interfaces'),
            '@loc': path.resolve(__dirname, './src/loc'),
            '@pages': path.resolve(__dirname, './src/pages')
        }
    }
});
