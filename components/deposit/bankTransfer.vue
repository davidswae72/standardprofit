<template>
  <v-row class="ma-0" no-gutters>
    <v-col
      v-if="user && user.country !== 'Botswana'"
      cols="12"
      class="mb-2 py-0 pr-md-3"
    >
      <span class="text-body-2 info--text font-weight-medium">
        Contact
        <a
          href="mailto:support@forex24hourstrade.online"
          class="secondary--text"
          >support@forex24hourstrade.online</a
        >
        for Bank Transfer payment
      </span>
    </v-col>
    <v-col v-else cols="12" class="px-2 pl-md-4 pr-md-6 mt-4">
      <div class="text-h6 text-md-h5 font-weight-light mb-2">
        Account Details
      </div>
      <div
        class="d-flex align-center text-subtitle-2 text-sm-subtitle-1 font-weight-light"
      >
        <span>Bank</span>
        <v-spacer></v-spacer>
        <span class="secondary--text font-weight-medium">FNB Bank</span>
      </div>
      <v-divider class="my-2 white lighten-5"></v-divider>
      <div class="d-flex align-center text-subtitle-1 font-weight-light">
        <span>Account Number</span>
        <v-spacer></v-spacer>
        <span class="secondary--text font-weight-medium">63003307930</span>
      </div>
      <v-divider class="my-2 white lighten-5"></v-divider>
      <div class="d-flex align-center text-subtitle-1 font-weight-light">
        <span>Account Name</span>
        <v-spacer></v-spacer>
        <span class="secondary--text font-weight-medium">Mlungisi Mbangi </span>
      </div>
      <v-divider class="my-2 white lighten-5"></v-divider>
      <div class="d-flex align-center text-subtitle-1 font-weight-light">
        <span>Branch Code</span>
        <v-spacer></v-spacer>
        <span class="secondary--text font-weight-medium">283567</span>
      </div>
      <v-divider class="my-2 white lighten-5"></v-divider>
      <div class="info--text mt-4 text-caption">
        MAKE SURE YOU PUT YOUR NUMBER AS THE REFERENCE CODE WHEN MAKE YOUR
        DEPOSIT SO THAT WE CAN IDENTIFIER YOUR DEPOSIT AND FUND YOUR TRADE
        DASHBOARD ACCOUNT IMMEDIATELY WE RECEIVED YOUR DEPOSIT FROM YOUR LOCAL
        BANK 🏦
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      user: "authentication/getUser",
      loading: "controller/getLoading",
    }),
    currency() {
      const arr = this.state2("currency");
      let currency;
      if (this.user) {
        arr &&
          arr.forEach((el) => {
            if (
              this.user &&
              this.user.currency.toLowerCase() === el.name.toLowerCase()
            ) {
              currency = el.symbol;
            }
          });
      } else {
        currency = "$";
      }
      return currency;
    },
  },

  methods: {
    ...mapActions({
      setAlert: "controller/initAlert",
      submitProof: "controller/submitProof",
    }),

    rateAmount(payload) {
      console.log(this.user);
      const arr = this.state2("currency");
      let amount;
      if (this.user) {
        arr &&
          arr.forEach((el) => {
            if (
              this.user &&
              this.user.currency.toLowerCase() === el.name.toLowerCase()
            ) {
              amount = parseFloat(parseFloat(payload) / el.rate);
            }
          });
      } else {
        amount = payload;
      }

      console.log(amount);
      return amount;
    },
    clear() {
      this.resetValidation();
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },

    async copy(payload) {
      await navigator.clipboard.writeText(payload);
      // alert('Wallet Address copied to clipboard')
      this.setAlert({
        is: true,
        persistence: true,
        type: "info",
        message: "Wallet Address copied to clipboard",
      });
    },
  },
};
</script>

<style></style>
