<template>
  <v-row>
    <v-col
      v-for="plan in plans"
      :key="plan.id"
      cols="12"
      sm="6"
      md="4"
      class="py-1"
    >
      <v-card dark flat color="primary lighten-2">
        <v-card-title
          class="
            py-5
            d-flex
            flex-column
            bgplan
            secondary
            textWhite--text
            text-subtitle-2
          "
        >
          <span class="text-h6 text-uppercase"> {{ plan.name }} Plan </span>
          <span
            :class="[display ? 'text-caption' : '']"
            class="font-weight-light"
          >
            {{ currency }}{{ plan.range.from | currency }} - {{ currency
            }}{{ plan.range.to | currency }} Start Up
          </span>
        </v-card-title>
        <v-card-text
          class="
            primary
            darken-1
            text-center
            align-center
            d-flex
            flex-column
            py-4
          "
        >
          <v-row no-gutters>
            <v-col cols="12">
              <v-sheet
                width="100%"
                class="transparent font-weight-light text--textWhite"
              >
                <span>Duration</span>:
                <span class="text-subtitle-1 font-weight-light"
                  >{{ plan.days }} Days</span
                >
              </v-sheet>
              <v-divider class="my-4" dark />
            </v-col>
            <v-col cols="12">
              <v-sheet
                width="100%"
                class="transparent font-weight-light text--textWhite"
              >
                <span>Live Trade Support</span>
              </v-sheet>
              <v-divider class="my-4" dark />
            </v-col>
            <v-col cols="12">
              <v-sheet
                width="100%"
                class="transparent font-weight-light text--textWhite"
              >
                <span class="text-caption font-weight-light text--textDark"
                  >Up to {{ plan.leverage }}x leverage</span
                >
              </v-sheet>
              <v-divider class="my-4" dark />
            </v-col>
            <v-col cols="12">
              <v-sheet
                width="100%"
                class="transparent font-weight-light text--textWhite"
              >
                <span class="text-caption font-weight-light text--textDark"
                  >{{ plan.income }}% passive income</span
                >
              </v-sheet>
              <v-divider class="my-4" dark />
            </v-col>
            <v-col v-if="!display" cols="12" class="mt-1">
              <v-btn
                block
                depressed
                dark
                color="secondary primary--text"
                class="text-subtitle-2 font-weight-normal mx-1"
                @click="toggleView(true, plan)"
              >
                Invest Now
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <view-plan :plan="selected" :drawer="drawer" :toggle="toggleView" />
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import viewPlan from "./viewPlan.vue";
export default {
  components: { viewPlan },
  filters: {
    currency(val) {
      if (val) {
        return val.toLocaleString();
      } else {
      }
    },
  },
  props: {
    display: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: false,
    selected: {},
    plans: [
      {
        name: "Starter",
        startup: 500,
        leverage: 10,
        income: 0.5,
        max: 1000,
      },
      {
        name: "Bronze",
        startup: 1000,
        leverage: 20,
        income: 1,
        max: 5000,
      },
      {
        name: "Silver",
        startup: 5000,
        leverage: 50,
        income: 5,
        max: 10000,
      },
      {
        name: "Gold",
        startup: 10000,
        leverage: 100,
        income: 10,
        max: 9999,
      },
    ],
  }),
  computed: {
    ...mapGetters({
      user: "authentication/getUser",
      state: "controller/getState",
    }),
    currency() {
      const arr = this.state("currency");
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
    toggleView(state, plan) {
      if (state === false) {
        this.selected = {};
      } else {
        console.log(plan);
        this.selected = plan;
      }
      this.drawer = state;
    },

    rateAmount(payload) {
      console.log(this.user);
      const arr = this.state("currency");
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
  },
};
</script>

<style>
.bgplan {
  background: rgb(0, 11, 83);
  background: linear-gradient(36deg, rgb(139, 56, 0) 14%, rgb(236, 142, 2) 87%);
}
</style>
