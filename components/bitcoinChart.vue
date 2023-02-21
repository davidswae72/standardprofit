<template>
  <v-card style="border: 1px solid #1a71f5" dark class="py-3">
    <v-card-title class="text-center d-flex justify-center">
      <div class="text-h5 text-md-h3 font-weight-bold text-uppercase">
        Bitcoin <span class="secondary--text">Calculator</span>
      </div>
      <div
        class="
          primary--text
          text--lighten-4
          font-weight-light
          my-2
          text-subtitle-2
        "
      >
        FIND OUT THE CURRENT BITCOIN VALUE WITH OUR EASY-TO-USE CONVERTER
      </div>
    </v-card-title>
    <v-card-text>
      <v-row justify="center" class="ma-0">
        <v-col cols="12" md="5" class="pa-0">
          <v-row justify="center" class="ma-0">
            <v-col cols="9" class="pa-0">
              <v-text-field
                v-model="bitcoinPrice"
                name="Bitcoin"
                type="text"
                dense
                outlined
                class="text-subtitle-2 mx-1 font-weight-light"
                color="secondary"
                required
              />
            </v-col>
            <v-col cols="3" class="pa-0 d-flex align-center mt-n6">
              <v-btn :large="$vuetify.breakpoint.smAndUp" color="secondary">
                <v-icon> mdi-bitcoin </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="1"
          class="pa-0 text-center font-weight-bold text-h6"
        >
          =
        </v-col>
        <v-col cols="12" md="5" class="pa-0">
          <v-row justify="center" class="ma-0">
            <v-col cols="8" class="pa-0">
              <v-text-field
                v-model="exchange"
                name="Bitcoin"
                type="text"
                dense
                outlined
                class="text-subtitle-2 mx-1 font-weight-light"
                color="secondary"
                required
              />
            </v-col>
            <v-col cols="4" class="pa-0 d-flex align-center">
              <v-select
                v-model="currency"
                dense
                color="secondary"
                :items="currencies"
                item-text="name"
                solo
                return-object
                class="text-subtitle-2 font-weight-light rounded-md"
                required
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="text-center pa-0">
          <span
            class="
              text-subtitle-2
              font-weight-light
              text-primary text-lighten-4
            "
            >* Data updated every 15 minutes</span
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    bitcoinPrice: 1,
    currency: {
      name: "USD",
      rate: 39595.7,
    },
  }),

  computed: {
    exchange() {
      return this.currency.rate * this.bitcoinPrice;
    },

    currencies() {
      return [
        {
          name: "USD",
          rate: 39595.7,
        },
        {
          name: "AUD",
          rate: 55996.81,
        },
        {
          name: "BRL",
          rate: 211585.82,
        },
        {
          name: "CAD",
          rate: 50563.71,
        },
        {
          name: "EUR",
          rate: 34652.38,
        },
      ];
    },
  },
};
</script>

<style>
</style>
