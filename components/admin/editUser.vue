<template>
  <x-side-bar :loading="loading.update" :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex text3--text flex-column">
        <span class="text-subtitle-1 d-flex align-center">
          {{ user && user.firstName }} {{ user && user.lastName }}
          <v-spacer />
          <v-chip small label outlined color="secondary" class="ml-2"
            >{{ user && user.symbol
            }}{{ user && user.wallet.deposit | currency }}</v-chip
          >
        </span>
      </div>
    </template>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
      <v-alert v-if="user.block" dense type="error" class="mt-n2" tile>
        This account is <strong>Blocked</strong>
      </v-alert>
      <v-row no-gutters class="ma-0 px-2">
        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="displayDeposit"
            :disabled="user && user.block"
            type="text"
            name="deposit"
            outlined
            color="primary"
            :label="`Deposit - ${user.symbol}`"
            :rules="depositRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>

        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="displayEarnings"
            :disabled="user && user.block"
            type="text"
            name="earnings"
            outlined
            color="primary"
            :label="`Profit - ${user.symbol}`"
            :rules="earningsRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>

        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="displayReferral"
            :disabled="user && user.block"
            type="text"
            name="referral"
            outlined
            color="primary"
            :label="`Referral - ${user.symbol}`"
            :rules="referralRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>

        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="displayWithdraw"
            :disabled="user && user.block"
            type="text"
            name="withdraw"
            outlined
            color="primary"
            :label="`Withdraw - ${user.symbol}`"
            :rules="withdrawRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col cols="12" class="py-0 mb-n1">
          <v-select
            v-model="displayLevel"
            color="secondary"
            :items="['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5']"
            outlined
            label="Trade Level"
            class="text-subtitle-2 font-weight-light rounded-md"
            required
          />
        </v-col>
        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="displaySignal"
            :disabled="user && user.block"
            type="text"
            name="signal"
            outlined
            color="primary"
            label="Signal"
            :rules="[(v) => !!v || 'Signal is required']"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>

        <v-col cols="12" class="d-flex text-subtitle-2 px-2">
          Advance Settings
          <v-spacer />
          <v-btn
            text
            icon
            :color="`${this.user.symbol}{advance ? 'primary' : ''}`"
            @click="advance = !advance"
          >
            <v-icon small>
              {{ advance ? "mdi-arrow-down" : "mdi-arrow-up" }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
          v-if="advance"
          cols="6"
          class="d-flex align-center justify-space-between"
        >
          <v-switch
            v-model="displayBlock"
            color="secondary"
            inset
            label="Block User"
            class="py-0 my-0"
          />
        </v-col>
        <v-col v-if="advance" cols="6" class="py-2">
          <v-switch
            v-model="displayDelete"
            :disabled="user && user.block"
            color="error"
            inset
            label="Delete User"
            class="py-0 my-0"
          />
        </v-col>
        <!-- <v-col v-if="advance" cols="12" class="py-0">
          <span class="text-subtitle-2 text-uppercase">Auto Load Settings</span>
        </v-col>
        <v-col v-if="advance" cols="12" class="py-0 pr-1 mb-n2 mt-2">
          <v-select
            v-model="displayStart"
            color="secondary"
            :items="['On', 'Off']"
            outlined
            label="Start Auto"
            class="text-subtitle-2 font-weight-light rounded-md"
            required
          />
        </v-col>
        <v-col v-if="advance" cols="6" class="py-0 pr-1 mb-n1">
          <v-text-field
            v-model="displayMax"
            type="text"
            name="maxProfit"
            outlined
            color="primary"
            label="Max Profit"
            :rules="[(v) => !!v || 'Max Profit is required']"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col v-if="advance" cols="6" class="py-0 mb-n1">
          <v-text-field
            v-model="displayAutoAmount"
            type="text"
            name="amount"
            outlined
            color="primary"
            label="Auto Amount"
            :rules="[(v) => !!v || 'Auto Amount is required']"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col> -->
        <v-col cols="12" class="py-2">
          <v-btn
            type="submit"
            depressed
            block
            :loading="loading.update"
            color="primary"
            class="text-subtitle-2 font-weight-normal"
          >
            Update User
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </x-side-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import xSideBar from "../xSideBar.vue";
export default {
  components: { xSideBar },
  filters: {
    currency(val) {
      if (val) {
        val = parseFloat(val);
        return val.toLocaleString();
      } else {
      }
    },
  },
  props: ["drawer", "toggle", "user"],
  data: () => ({
    valid: true,
    show: false,
    advance: false,
    depositRules: [(v) => !!v || "Deposit is required"],
    referralRules: [(v) => !!v || "Referral is required"],
    withdrawRules: [(v) => !!v || "Withdrawal is required"],
    earningsRules: [(v) => !!v || "Earnings is required"],
  }),
  computed: {
    ...mapGetters({ loading: "admin/getLoading" }),

    displayDeposit: {
      get() {
        let val = parseInt(this.user.wallet.deposit);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return val;
        }
      },
      set(val) {
        // check if the first Character is $ and remove it
        // const firstChar = val.charAt(0);
        // if (firstChar === this.user.symbol) {
        //   val = val.substring(1);
        // }
        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.user.wallet.deposit = val;
        }
      },
    },
    displayEarnings: {
      get() {
        let val = parseInt(this.user.wallet.earnings);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return val;
        }
      },
      set(val) {
        // check if the first Character is $ and remove it
        // const firstChar = val.charAt(0);
        // if (firstChar === this.user.symbol) {
        //   val = val.substring(1);
        // }
        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.user.wallet.earnings = val;
        }
      },
    },
    displayReferral: {
      get() {
        let val = parseInt(this.user.wallet.referral);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return val;
        }
      },
      set(val) {
        // check if the first Character is $ and remove it
        // const firstChar = val.charAt(0);
        // if (firstChar === this.user.symbol) {
        //   val = val.substring(1);
        // }
        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.user.wallet.referral = val;
        }
      },
    },
    displayWithdraw: {
      get() {
        let val = parseInt(this.user.wallet.withdraw);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return val;
        }
      },
      set(val) {
        // check if the first Character is $ and remove it
        // const firstChar = val.charAt(0);
        // if (firstChar === this.user.symbol) {
        //   val = val.substring(1);
        // }
        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.user.wallet.withdraw = val;
        }
      },
    },
    displayLevel: {
      get() {
        return this.user && this.user.tradeLevel;
      },
      set(val) {
        this.user.tradeLevel = val;
      },
    },
    displaySignal: {
      get() {
        return this.user && this.user.signal;
      },
      set(val) {
        this.user.signal = val;
      },
    },
    displayBlock: {
      get() {
        return this.user && this.user.block;
      },
      set(val) {
        this.user.block = val;
      },
    },
    displayDelete: {
      get() {
        return this.user && this.user.delete;
      },
      set(val) {
        this.user.delete = val;
      },
    },

    //AutoProfit
    displayStart: {
      get() {
        return this.user && this.user.autoProfit.start;
      },
      set(val) {
        this.user.autoProfit.start = val;
      },
    },

    displayMax: {
      get() {
        let val = parseInt(this.user.autoProfit.max);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return val;
        }
      },
      set(val) {
        // check if the first Character is $ and remove it
        // const firstChar = val.charAt(0);
        // if (firstChar === this.user.symbol) {
        //   val = val.substring(1);
        // }
        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.user.autoProfit.max = val;
        }
      },
    },

    displayAutoAmount: {
      get() {
        let val = parseInt(this.user.autoProfit.amount);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return val;
        }
      },
      set(val) {
        // check if the first Character is $ and remove it
        // const firstChar = val.charAt(0);
        // if (firstChar === this.user.symbol) {
        //   val = val.substring(1);
        // }
        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.user.autoProfit.amount = val;
        }
      },
    },
  },
  methods: {
    ...mapActions({ updateUser: "admin/updateUser" }),

    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        // console.log(this.user);
        const autoProfit = this.user.autoProfit;

        if (autoProfit.start) {
          let next =
            autoProfit.next !== null
              ? autoProfit.next
              : this.getDate("current");
          autoProfit.next = next;
        }

        this.updateUser(this.user);
        // this.checkIfDone()
      }
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

    checkIfDone() {
      setInterval(() => {
        if (!this.loading.update) {
          setTimeout(() => {
            this.clear();
            this.toggle(false);
            window.location.reload();
          }, 2000);
        }
      }, 1000);
    },
    getDate(get, days) {
      const currentDate = new Date();
      let newDate;

      function addDays(days) {
        const result = new Date(currentDate);
        result.setDate(result.getDate() + days);
        return formatDate(result);
      }

      function formatDate(date) {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}`;
      }

      if (get === "add") {
        newDate = addDays(days);
      } else if (get === "current") {
        newDate = formatDate(currentDate);
      }
      return newDate;
    },
  },
};
</script>

<style>
</style>
