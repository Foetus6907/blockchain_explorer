
<script lang="ts" setup>
import { computed, defineProps } from "vue";
import Transaction from "../../core/domaine/model/Transaction";
import Block from "../../core/domaine/model/Block";

const props = defineProps({
  transaction: Transaction
})

const transactionFee = computed(() => `${Block.satoshiToBtc(props.transaction.fee).toFixed(8)} BTC`);

const transactionValue = computed(() => `${props.transaction.getTotalValueFromOut().toFixed(8)} BTC`)

</script>

<template>
  <div class="col">
    <div class="row  justify-start items-center">
      <q-item-label class="text-grey-9 text-weight-bolder col-2">Hash</q-item-label>
      <q-item-label class="text-blue-6 text-weight-medium col-auto">{{ transaction.hash }}</q-item-label>
      <q-item-label class="text-grey-7 text-weight-medium col-sm-12 col-md justify-end flex">
        <q-badge color="blue">
          <q-item-label class="text-subtitle2">
            {{ transactionValue }}
          </q-item-label>
        </q-badge>
      </q-item-label>
    </div>
    <div class="row  justify-between items-center">
      <q-item-label class="text-grey-9 text-weight-bolder col-2">Fee</q-item-label>
      <q-item-label class="text-grey-7 text-weight-medium col">{{ transactionFee }} ({{transaction.size}} bytes)</q-item-label>
    </div>
  </div>
</template>
