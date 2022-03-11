<script lang="ts" setup>
import { computed, defineProps } from "vue";
import Block from "../../core/domaine/model/Block";
const props = defineProps({
  unit: String,
  value: Number,
  withUnit: Boolean,
  formatNumberUs: Boolean
});

const val = computed(() => {
  let val = String(props.value);
  if (props.formatNumberUs) {
   val = Block.convertNumberUs(props.value)
  }
  if (props.withUnit) {
    val = `${val} ${props.unit}`
  }
  return val
})

</script>
<template>
  <span>{{val}}</span>
</template>
