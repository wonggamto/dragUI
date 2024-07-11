import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {createVuePlugin} from "vite-plugin-vue2";
import {resolve} from 'path'
import {isVue2} from "vue-demi";
// https://vitejs.dev/config/
const name = isVue2?'vue2':'vue3'
export default defineConfig({
    plugins: [isVue2 ? createVuePlugin() : vue()],
    // plugins: [createVuePlugin()],
    build: {
      outDir:`dist/${name}`,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'moten',
            fileName: 'moten'
        },
        rollupOptions:{
          external:['vue','vue-demi'],
            output:{
              globals:{
                  vue:'Vue',
                  'vue-demi':'VueDemi'
              }
            }
        }
    }
})
