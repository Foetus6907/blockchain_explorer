<script lang="ts" setup>
import { computed, ComputedRef, inject, Ref, ref } from "vue";
import Block from "../../core/domaine/model/Block";
import { BitcoinChainUseCaseKey } from "../InjectionKey";
import BlockHeader from "./BlockHeader.vue";
import Transaction from "../../core/domaine/model/Transaction";
import BlockTransactionListItems from "./BlockTransactionListItems.vue";

const blockUseCase = inject(BitcoinChainUseCaseKey);

const isLoading = ref(false);

const blockHash: Ref<string> = ref("00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa");
const block: Ref<Block | null> = ref(null);

const transactions: ComputedRef<Transaction[]> = computed(() => {
  return block.value.getTransactions();
})

const searchBlock = async (e: any) => {
  if (e.keyCode === 13) {
    isLoading.value = true;
    if (blockUseCase) {
      block.value = await blockUseCase.getBlockFromHash(blockHash.value);
    }
    isLoading.value = false;
  }
};
</script>

<template>
  <q-page padding>
    <q-card flat>
      <q-card-section>
        <div class="row justify-center q-mb-xl">
          <q-input :loading="isLoading" class="col-5" v-model="blockHash" label="Block hash" name="block_hash"
                   placeholder="Block hash" @keydown="searchBlock" />
        </div>

      </q-card-section>
      <template v-if="block !== null">
        <BlockHeader :block="block" />
        <q-card-section v-if="block !== null">
          <q-list separator>
            <q-item class="block">
              <BlockTransactionListItems v-for="(transaction, key) in transactions" :key="key" :transaction="transaction" />
            </q-item>
            <q-separator />
          </q-list>
        </q-card-section>
      </template>
    </q-card>
  </q-page>
</template>

<style scoped>
</style>
