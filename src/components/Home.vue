<script lang="ts" setup>
interface Block {
  hash: string,
  ver: number,
  prev_block: string,
  mrkl_root: string,
  time: number,
  bits: number,
  next_block: string[],
  fee: number,
  nonce: number,
  n_tx: number,
  size: number,
  block_index: number,
  main_chain: true,
  height: number,
  weight: number,
  tx: []
}


import { Ref, ref } from "vue";
import { date } from 'quasar'


defineProps({
  msg: String,
});

const isLoading = ref(false);

const blockHash: Ref<string> = ref("00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa");
const block: Ref<Block | null> = ref(null)

const fetchBlock = async (value): Promise<Block> => {
  const response = await fetch(`https://blockchain.info/rawblock/${value}`);
  return await response.json();
}

const searchBlock = async (e: any) => {
  if (e.keyCode === 13) {
    isLoading.value = true;
    block.value = await fetchBlock(blockHash.value);
    isLoading.value = false;
    console.log(block.value);
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
          <h5 class="text-weight-bolder text-grey-9 flex items-center">
            Block {{block.height}}
            <q-icon class="q-ml-sm cursor-pointer" name="info" color="grey"  size="sm">
              <q-popup-proxy :offset="[0, 0]">
                <q-banner class="bg-grey-9 text-white">
                  Block at height {{block.height}} in the Bitcoin blockchain
                </q-banner>
              </q-popup-proxy>
            </q-icon>
          </h5>
          <p class="text-grey-9" style="font-weight: 500;
    font-size: 14px;
    text-transform: none;
    font-style: normal;">
            This block was mined on {{ date.formatDate(1608620982*1000, "MMMM D, YYYY") }} at {{ date.formatDate(1608620982*1000, "HH:mm A") }} GMT+1 by Poolin. It currently has 64,100 confirmations on the Bitcoin blockchain.
            <br>
            The miner(s) of this block earned a total reward of ** 6.25000000 BTC ($261,855.25) **. The reward consisted of a base reward of ** 6.25000000 BTC ($261,855.25) ** with an additional ** 0.16583560 BTC ($6,947.99) ** reward paid as fees of the 912 transactions which were included in the block. The Block rewards, also known as the Coinbase reward, were sent to this address.
            <br>
            A total of ** 306.51676953 BTC ($12,842,084.05) ** were sent in the block with the average transaction being ** 0.33609295 BTC ($14,081.23) **.  Learn more about how blocks work.
          </p>
        </q-card-section>
        <q-card-section >
          <q-list separator>
            <q-item
              v-for="(arg, key) in Object.keys(block)"
              v-ripple
              :key="key">
              <q-item-section>{{ arg }}</q-item-section>
              <q-item-section>{{Object.values(block)[key] }}</q-item-section>
            </q-item>
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
