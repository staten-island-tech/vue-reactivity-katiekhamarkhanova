import { reactive, ref } from 'vue'

export const store = reactive({
  recipe: ref([]),
  increment(material, quantity) {
    const recipeItem = {
      material: material,
      quantity: quantity
    }
    this.recipe.push(recipeItem);
  }
})