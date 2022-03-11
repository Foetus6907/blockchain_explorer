<template>
  <q-item v-ripple >
    <q-item-section class="text-grey-8 text-weight-medium">{{ label }}</q-item-section>
    <q-item-section class="text-grey-9 text-weight-bolder" >
      <template v-if="isValueNumber">
        <ValueUnitInfo :formatNumberUs="formatNumberUs" :value="value" />
      </template>
      <span v-else>{{ value }}</span>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts" >
import ValueUnitInfo from "./ValueUnitInfo.vue";
import { computed, defineProps } from "vue";


const props = defineProps({
  label: String,
  value: [Number, String],
  formatNumberUs: {
    type: Boolean,
    default: false
  }
})

const isValueNumber = computed(() => {
  return typeof props.value === 'number'
})

</script>