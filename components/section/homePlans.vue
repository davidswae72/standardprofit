<template>
  <v-card>
    <v-card-text class="text1--text text-subtitle-1 text-center">
      <div>
        <div class="text-h6 text-sm-h5 font-weight-medium primary--text py-3">
          {{ data && data.name }} Plan
        </div>
        <div class="pb-3" bt-1>
          {{ data && data.startup | currency }} Start up
        </div>
      </div>
      <v-divider></v-divider>
      <div class="py-3">Live trade support</div>
      <v-divider></v-divider>
      <div class="py-3">Up to {{ data && data.leverage }}x leverage</div>
      <v-divider></v-divider>
      <div class="py-3">{{ data && data.income }}% passive income</div>
      <v-divider></v-divider>
      <div class="text-h6 text-sm-h5 font-weight-medium primary--text py-3">
        <span v-if="data && data.max !== 9999">
          {{ data && data.max | currency }} max
        </span>
        <span v-else> $Limiteless </span>
      </div>
      <v-btn to="/register" depressed color="secondary" tile class="mb-n6">
        Get Started
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  filters: {
    currency(val) {
      if (val) {
        val = parseFloat(val);
        return val.toLocaleString("en-US", {
          style: "currency",
          code: "US",
          currency: "USD",
        });
      } else {
      }
    },
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        name: "",
        startup: 0,
        leverage: 0,
        income: 0,
        max: 0,
      }),
    },
  },
};
</script>

<style>
</style>