
<template>
  <div class="flex-3 block">
    <label for="option1" class="px-4">A</label>
    <input
      type="number"
      id="option1"
      class="form-input px-4 py-3 rounded"
      placeholder="value A"
      v-model="optionA"
    />
    <br />
    <br />
    <label for="option2" class="px-4">B</label>
    <input
      v-model="optionB"
      type="number"
      id="option2"
      class="form-input px-4 py-3 rounded"
      placeholder="value B"
    />
    <br />
    <br />
    <label for="sum" class="px-4">Sum</label>
    <input
      type="number"
      id="sum"
      class="form-input px-4 py-3 rounded"
      disabled
      placeholder="Sum of value A + B"
      v-model="getAllProducts"
    />
    <br />
    <br />
  </div>
  <div class="flex-1">
    <button
      class="
        my-32
        bg-green-500
        text-white
        rounded-lg
        grey
        bg-yellow
        hover:text-red-500
        p-3
      "
      @click="onClick"
    >
      Click me
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import store from "@/store";

@Options({
  components: {},
})
export default class FormComponent extends Vue {
  private optionA = 0;
  private optionB = 0;
  store = useStore();
  get getAllProducts() {
    return store.state.sum;
  }
  onClick() {
    this.store.dispatch("calculateSum", {
      optionA: this.optionA,
      optionB: this.optionB,
    });
  }
}
</script>
