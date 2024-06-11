import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@config': path.resolve(__dirname, './src/config'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@interfaces': path.resolve(__dirname, './src/interfaces'),
            '@localizations': path.resolve(__dirname, './src/localizations'),
            '@pages': path.resolve(__dirname, './src/pages'),
        },
    },
});
