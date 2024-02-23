import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App, {
    methods: {
        updateRecipe(material) {
            this.recipe.push(material)
        }
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
