<template>
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
</template>
<script setup lang="ts">
import BlockHeaderListItem from "./BlockHeaderListItem.vue";
import { computed, ComputedRef, defineProps } from "vue";
import Block from "../../core/domaine/model/Block";
import { date } from "quasar";

const props = defineProps({
  block: Block
});


const blockReward: ComputedRef<string> = computed(() => {
  return props.block.getBlockRewardInBTCString() ?? "";
});
const feeReward: ComputedRef<string> = computed(() => props.block.getBlockFeeInBTCString() ?? "");
const totalBlockReward: ComputedRef<string> = computed(() => `${Block.satoshiToBtc(props.block.fee + props.block.blockReward)} BTC`);
const totalBlockTransactionVolume: ComputedRef<string> = computed(() => props.block.getTransactionVolumeInBTCString() ?? "");
const nbrTransactions: ComputedRef<number> = computed(() => props.block.numberOfTransactions ?? 0);
const averageTransaction: ComputedRef<string> = computed(() => `${(props.block.getTransactionVolume() / props.block.numberOfTransactions).toFixed(8)} BTC`);

const hash = computed(() => props.block.hash ?? "");
const height = computed(() => props.block.height ?? 0);
const timestamp = computed(() => date?.formatDate(props.block.getDate() ?? 0, "YYYY-MM-DD HH:mm:ss"));
const difficulty = computed(() => props.block.getDifficulty() ?? 0);
const merkleroot = computed(() => props.block.merkelRoot ?? "");
const version = computed(() => props.block.getVersion() ?? "");
const bits = computed(() => props.block.bits ?? 0);
const weight = computed(() => props.block.getWeightWU() ?? "");
const size = computed(() => props.block.getSize() ?? "");
const nonce = computed(() => props.block.getNonce() ?? "");

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


</script>