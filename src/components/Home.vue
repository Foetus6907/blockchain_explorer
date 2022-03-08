<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const blockHash = ref("00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa");
const block = ref(null)

const fetchBlock = async (value) => {
  const response = await fetch(`https://blockchain.info/rawblock/${value}`);
  return response.json();
}

const searchBlock = async (e) => {
  if (e.keyCode === 13) {
    block.value = await fetchBlock(blockHash.value);
    console.log(block.value);
  }
}
</script>

<template>
  <q-page padding>
    <div class="row justify-center">
      <q-input class="col-4" v-model="blockHash" label="Block hash" name="block_hash" placeholder="Block hash" @keydown="searchBlock"/>
    </div>
    <template v-if="block !== null">
      <p v-for="n in block.tx" :key="n">
        {{ n.hash }}
      </p>
    </template>

  </q-page>
</template>

<style scoped>
</style>
