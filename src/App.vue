
<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./assets/logo.png" alt="avatar">
          </q-avatar>
          Blockchain Explorer
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-item clickable :active="true" v-ripple>
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          inbox
        </q-item-section>
      </q-item>
      <q-separator />
    </q-drawer>

    <q-page-container>
      <Home/>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

import Home from "./components/Home.vue";

const rightDrawerOpen = ref(false);
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>