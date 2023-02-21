<template>
  <!-- <p-container tile :title="'Live Trade'"> -->
  <!-- </p-container> -->
  <VueTradingView
    :options="{
      symbol: 'BINANCE:BTCUSDT',
      theme: 'light',
      allow_symbol_change: true,
    }"
  />
</template>

<script>
import VueTradingView from "vue-trading-view";
import pContainer from "../other/pContainer.vue";
export default {
  components: { pContainer, VueTradingView },
  props: {
    toggle: Function,
  },
};
</script>

<style>
</style>
