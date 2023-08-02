<template>
  <q-btn
    no-caps
    outline
    color="primary"
    style="border-radius: 10px"
    class="q-px-xl"
    >{{ title }}</q-btn
  >
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "StyledButton",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
