<script lang="ts" setup>
import { computed, ComputedRef, inject, Ref, ref } from "vue";
import { date } from "quasar";
import Block from "../../core/domaine/model/Block";
import { BitcoinChainUseCaseKey } from "../InjectionKey";
import BlockHeaderListItem from "./BlockHeaderListItem.vue";

const blockUseCase = inject(BitcoinChainUseCaseKey);

const isLoading = ref(false);

const blockHash: Ref<string> = ref("00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa");
const block: Ref<Block | null> = ref(null);

const blockReward: ComputedRef<string> = computed(() => {
  return block.value?.getBlockRewardInBTCString() ?? "";
});
const feeReward: ComputedRef<string> = computed(() => block.value?.getBlockFeeInBTCString() ?? "");
const totalBlockReward: ComputedRef<string> = computed(() => `${Block.satoshiToBtc(block.value?.fee + block.value?.blockReward)} BTC`);
const totalBlockTransactionVolume: ComputedRef<string> = computed(() => block.value?.getTransactionVolumeInBTCString() ?? "");
const nbrTransactions: ComputedRef<number> = computed(() => block.value?.numberOfTransactions ?? 0);
const averageTransaction: ComputedRef<string> = computed(() => `${(block.value?.getTransactionVolume() / block.value?.numberOfTransactions).toFixed(8)} BTC`);

const hash = computed(() => block.value?.hash ?? "");
const height = computed(() => block.value?.height ?? 0);
const timestamp = computed(() => date?.formatDate(block.value?.getDate() ?? 0, "YYYY-MM-DD HH:mm:ss"));
const difficulty = computed(() => block.value?.getDifficulty() ?? 0);
const merkleroot = computed(() => block.value?.merkelRoot ?? "");
const version = computed(() => block.value?.getVersion() ?? "");
const bits = computed(() => block.value?.bits ?? 0);
const weight = computed(() => block.value?.getWeightWU() ?? "");
const size = computed(() => block.value?.getSize() ?? "");
const nonce = computed(() => block.value?.getNonce() ?? "");

const headerList = computed(() => {
  return [
    {label: "Hash", value: hash.value},

    {label: "Height", value: height.value},
    {label: "Timestamp", value: timestamp.value},
    {label: "Block Reward", value: blockReward.value},
    {label: "Fee Reward", value: feeReward.value},
    {label: "Number of Transactions", value: nbrTransactions.value},
    {label: "Transaction Volume", value: totalBlockTransactionVolume.value},
    {label: "Average Transaction", value: averageTransaction.value},
    {label: "Difficulty", value: difficulty.value},
    {label: "Merkle root", value: merkleroot.value},
    {label: "Version", value: version.value},
    {label: "Bits", value: bits.value, formatNumberUs:true},
    {label: "Weight", value: weight.value},
    {label: "Size", value: size.value},
    {label: "Nonce", value:nonce.value, formatNumberUs:true}
  ];
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
        <q-card-section>
          <h5 id="blockHeight" class="text-weight-bolder text-grey-9 flex items-center">
            Block {{ block.height }}
            <q-icon class="q-ml-sm cursor-pointer" name="info" color="grey" size="sm">
              <q-popup-proxy :offset="[0, 0]">
                <q-banner class="bg-grey-9 text-white">
                  Block at height {{ block.height }} in the Bitcoin blockchain
                </q-banner>
              </q-popup-proxy>
            </q-icon>
          </h5>
          <p
            class="text-grey-9"
            style="font-weight: 500;
            font-size: 14px;
            text-transform: none;
            font-style: normal;"
          >
            This block was mined on {{ date?.formatDate(block?.getDate(), "MMMM D, YYYY") }} at
            {{ date?.formatDate(block?.getDate(), "HH:mm A") }} GMT+1.
            <br>
            The miner(s) of this block earned a total reward of {{ totalBlockReward }}. The reward consisted of
            a base reward of {{ blockReward }} with an additional {{ feeReward }} reward paid as fees of the
            {{ nbrTransactions }}
            transactions which were included in the block. The Block rewards, also known as the Coinbase reward, were
            sent to this address.
            <br>
            A total of {{ totalBlockTransactionVolume }} were sent in the block
            with the average transaction being {{ averageTransaction }}. Learn more about how blocks work.
          </p>
        </q-card-section>
        <q-card-section>
          <q-list separator>
            <BlockHeaderListItem
              v-for="(headerListItem, key) in headerList"
              :key="key" :label="headerListItem.label"
              :value="headerListItem.value"
              :formatNumberUs="headerListItem.formatNumberUs"
            />
          </q-list>
        </q-card-section>
        <q-card-section v-if="block !== null">
          <q-list separator>
            <q-item v-ripple >
              <q-item-section class="text-grey-8 text-weight-medium">totot</q-item-section>
              <q-item-section class="text-grey-9 text-weight-bolder">titit</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </template>
    </q-card>

  </q-page>
</template>

<style scoped>
</style>
