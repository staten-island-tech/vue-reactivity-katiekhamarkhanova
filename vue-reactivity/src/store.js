import { reactive } from 'vue'

export const store = reactive({
    recipe: [],
    increment() {
        this.recipe.value.push(material);
    }
})