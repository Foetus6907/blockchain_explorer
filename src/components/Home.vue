<script lang="ts" setup>
import { computed, ComputedRef, inject, Ref, ref } from "vue";
import Block from "../../core/domaine/model/Block";
import { BitcoinChainUseCaseKey } from "../InjectionKey";
import BlockHeader from "./BlockHeader.vue";
import Transaction from "../../core/domaine/model/Transaction";
import BlockTransactionListItems from "./BlockTransactionListItems.vue";

const blockUseCase = inject(BitcoinChainUseCaseKey);

const isLoading = ref(false);
const currentPage = ref(1);

const blockHash: Ref<string> = ref("00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa");
const block: Ref<Block | null> = ref(null);

const transactions: ComputedRef<Transaction[]> = computed(() => {
  return block.value.getTransactions();
});

const searchBlock = async (e: any) => {
  if (e.keyCode === 13) {
    isLoading.value = true;
    if (blockUseCase) {
      block.value = await blockUseCase.getBlockFromHash(blockHash.value);
      currentPage.value = 1
    }
    isLoading.value = false;
  }
};

const chunk = (chunkSize, arrayToChunk) => {
  var R = [];
  for (let i = 0; i < arrayToChunk.length; i += chunkSize)
    R.push(arrayToChunk.slice(i, i + chunkSize));
  return R;
}

const nbrTransactionPerPage =  5;
const maxPage = computed(() => {
  return Math.round(transactions.value.length / 5)
})

const paginatedTransactions = computed(() => {
  return chunk(nbrTransactionPerPage, transactions.value);
});

</script>

<template>
  <q-page padding>
    <q-card flat>
      <q-card-section class="row justify-center q-mb-xl">
        <div class="col-xs-12 col-sm-12 col-md-8">
          <q-input
            :loading="isLoading"
            v-model="blockHash"
            label="Block hash"
            name="block_hash"
            placeholder="Block hash"
            @keydown="searchBlock" />
        </div>

      </q-card-section>
      <template v-if="block !== null">
        <BlockHeader :block="block" />
        <q-card-section >
          <q-list separator>
            <q-item class="block">
              <BlockTransactionListItems v-for="(transaction, key) in paginatedTransactions[currentPage]" :key="key"
                                         :transaction="transaction" />
            </q-item>
            <q-separator />
          </q-list>
        </q-card-section>
        <div class="q-pa-lg flex flex-center">
          <q-pagination
            v-model="currentPage"
            :max="maxPage"
            direction-links
            boundary-links
            input
            icon-first="skip_previous"
            icon-last="skip_next"
            icon-prev="fast_rewind"
            icon-next="fast_forward"
          />
        </div>
      </template>
    </q-card>
  </q-page>
</template>

<style scoped>
</style>
