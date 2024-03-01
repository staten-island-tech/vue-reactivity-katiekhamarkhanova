import { reactive, ref } from 'vue'

export const store = reactive({
  recipe: ref([]),
  increment(material) {
    this.recipe.push(material);
  }
})