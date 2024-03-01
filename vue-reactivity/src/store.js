import { reactive } from 'vue'

export const store = reactive({
  recipe: [],
  increment(material) {
    this.recipe.push(material);
  }
})