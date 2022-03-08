import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { minifyHtml, injectHtml } from 'vite-plugin-html';

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'


// https://vitejs.dev/config/
export default ({ mode }) => {
  const envMap = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      quasar({
        sassVariables: 'src/quasar-variables.sass'
      }),
      minifyHtml(),
      injectHtml({
        data: {
          base: process.env.BASE_URL || '/',
          title: envMap.VITE_APP_TITLE,
        },
      }),
    ],
    server: {
      port: process.env.BLOCKLET_PORT,
    },
  });
};
