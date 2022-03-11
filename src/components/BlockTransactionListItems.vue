
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
  <div class="col q-mb-xl">
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
    <div class="row q-col-gutter-lg justify-between items-center">
      <div class="col-sm-12 col-md-6">
        <q-item-label class="text-grey-9 text-weight-bolder col-2">Input</q-item-label>
        <q-item-label v-for="(input, key) in transaction.inputs" :key="key" class="text-grey-9 flex justify-between items-center col-2">
          <span class="flex justify-between items-center" >{{ input.prev_out?.addr ?? "OP_RETURN" }}</span>
          <span class="flex justify-between items-center">
            <span class="q-mr-sm">{{ Block.satoshiToBtc(input.prev_out?.value).toFixed(8)}}</span>
            <q-icon color="blue" v-if="input.prev_out.addr" name="language" />
          </span >
        </q-item-label>
      </div>
      <div class="col-sm-12 col-md-6">
        <q-item-label class="text-grey-9 text-weight-bolder col-2">Out</q-item-label>
        <q-item-label v-for="(out, key) in transaction.out" :key="key" class="text-grey-9 flex justify-between items-center col-2">
          <span class="flex justify-between items-center" >{{ out.addr ?? "OP_RETURN" }}</span>
          <span class="flex justify-between items-center">
            <span class="q-mr-sm">{{ out.value.toFixed(8) }} BTC</span>
            <q-icon color="red" v-if="out.addr" name="language" />
          </span >
        </q-item-label>
      </div>
    </div>
  </div>
</template>
