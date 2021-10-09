<template>
  <div class="container">
    <div class="flex justify-center space-x-4">
      <FormComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FormComponent from "@/components/form.vue";

@Options({
  components: {
    FormComponent,
  },
})
export default class Home extends Vue {}
</script>
