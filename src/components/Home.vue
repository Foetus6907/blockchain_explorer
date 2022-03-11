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

const blockReward:ComputedRef<string> = computed(() => {
  return block.value?.getBlockRewardInBTCString() ?? "";
});
const feeReward: ComputedRef<string> = computed(() => block.value?.getBlockFeeInBTCString() ?? "");
const totalBlockReward: ComputedRef<string> = computed(() => `${Block.satoshiToBtc(block.value?.fee + block.value?.blockReward)} BTC`);
const totalBlockTransactionVolume: ComputedRef<string> = computed(() => block.value?.getTransactionVolumeInBTCString()?? "");
const nbrTransactions: ComputedRef<number> = computed(() => block.value?.numberOfTransactions ?? 0 );
const averageTransaction: ComputedRef<string> = computed(() => `${(block.value?.getTransactionVolume() / block.value?.numberOfTransactions).toFixed(8)} BTC`);

// nst blockProps = computed(() => {
// return block.value !== null ? Object.keys(block.value).map((props, i) => {
//   return {
//     propsName: props,
//     value: Object.values(block.value)[i]
//   }
// }) : []
//

const searchBlock = async (e: any) => {
  if (e.keyCode === 13) {
    isLoading.value = true;
    if (blockUseCase) {
      block.value = await blockUseCase.getBlockFromHash(blockHash.value);
    }
    isLoading.value = false;
  }
}
</script>

<template>
  <q-page padding>
    <q-card flat >
      <q-card-section>
        <div class="row justify-center q-mb-xl">
          <q-input :loading="isLoading" class="col-5" v-model="blockHash" label="Block hash" name="block_hash" placeholder="Block hash" @keydown="searchBlock" />
        </div>

      </q-card-section>
      <template v-if="block !== null">
        <q-card-section>
          <h5 id="blockHeight" class="text-weight-bolder text-grey-9 flex items-center">
            Block {{block.height}}
            <q-icon class="q-ml-sm cursor-pointer" name="info" color="grey"  size="sm">
              <q-popup-proxy :offset="[0, 0]">
                <q-banner class="bg-grey-9 text-white">
                  Block at height {{block.height}} in the Bitcoin blockchain
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
            This block was mined on {{ date?.formatDate(1608620982*1000, "MMMM D, YYYY") }} at {{ date?.formatDate(1608620982*1000, "HH:mm A") }} GMT+1.
            <br>
            The miner(s) of this block earned a total reward of {{totalBlockReward}}. The reward consisted of
            a base reward of {{blockReward}}  with an additional  {{feeReward}}  reward paid as fees of the {{nbrTransactions}}
            transactions which were included in the block. The Block rewards, also known as the Coinbase reward, were sent to this address.
            <br>
            A total of {{ totalBlockTransactionVolume }} were sent in the block
            with the average transaction being {{ averageTransaction }}. Learn more about how blocks work.
          </p>
        </q-card-section>
        <q-card-section >
          <q-list separator>
<!--            <q-item
              v-for="(blockProp, key) in blockProps"
              v-ripple
              :key="key">
              <q-item-section>{{ blockProp.propsName }}</q-item-section>
              <q-item-section><ValueUnitInfo :value="blockProp.value" /></q-item-section>
            </q-item>-->
            <BlockHeaderListItem label="Hash" :value="block.hash" />
            <BlockHeaderListItem label="Height" :value="block.height" />

            <BlockHeaderListItem label="Timestamp" :value="date?.formatDate(block.getDate(), 'YYYY-MM-DD HH:mm:ss')" />

            <BlockHeaderListItem label="Block Reward" :value="blockReward" />
            <BlockHeaderListItem label="Fee Reward" :value="feeReward" />
            <BlockHeaderListItem label="Number of Transactions" :value="nbrTransactions" />
            <BlockHeaderListItem label="Transaction Volume" :value="totalBlockTransactionVolume" />
            <BlockHeaderListItem label="Average Transaction" :value="averageTransaction" />

            <BlockHeaderListItem label="Difficulty" :value="block.getDifficulty()" />

            <BlockHeaderListItem label="Merkle root" :value="block.merkelRoot" />
            <BlockHeaderListItem label="Version" :value="block.getVersion()" />

            <BlockHeaderListItem label="Bits" :value="block.bits" :formatNumberUs="true"/>
            <BlockHeaderListItem label="Weight" :value="block.getWeightWU()"/>
            <BlockHeaderListItem label="Size" :value="block.getSize()"/>
            <BlockHeaderListItem label="Nonce" :value="block.getNonce()" :formatNumberUs="true"/>



          </q-list>
        </q-card-section>
        <q-card-section v-if="block !== null">
          <p v-for="(tr, key) in block.tx" :key="key">
            {{ tr.hash }}
          </p>
        </q-card-section>
      </template>
    </q-card>

  </q-page>
</template>

<style scoped>
</style>
