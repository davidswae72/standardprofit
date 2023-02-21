<template>
  <v-container>
    <v-row justify="center" class="ma-0">
      <v-col cols="12">
        <v-card flat dark class="primary">
          <v-card-title> TRADING </v-card-title>
          <v-card-text>
            <p-trade v-if="on" :toggle="toggleLive" />
            <div
              style="
                height: 540px;
                background-color: #0000;
                overflow: hidden;
                box-sizing: border-box;
                text-align: right;
                line-height: 14px;
                font-size: 12px;
                font-feature-settings: normal;
                text-size-adjust: 100%;
                box-shadow: inset 0 -20px 0 0 #262b38;
                padding: 0px;
                margin: 0px;
                width: 100%;
              "
            >
              <div
                style="height: 540px; padding: 0px; margin: 0px; width: 100%"
              >
                <iframe
                  src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"
                  width="100%"
                  height="536px"
                  scrolling="auto"
                  marginwidth="0"
                  marginheight="0"
                  frameborder="0"
                  border="0"
                  style="border: 0; margin: 0; padding: 0; line-height: 14px"
                />
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="py-0">
        <v-row justify="center" class="ma-0">
          <!-- <v-col cols="12" class="pa-0">
            <p-container dark :color="'primary'" :title="'Transfer Coins'">
              <v-form>
                <v-row no-gutters justify="center" class="ma-0">
                  <v-col cols="12"> </v-col>
                </v-row>
              </v-form>
            </p-container>
          </v-col> -->

          <v-col cols="12" class="pa-0">
            <p-container
              :title="'Live Crypto Prices'"
              :styles="'pa-0'"
              class="pa-0"
              dark
              :color="'primary'"
            >
              <div
                style="
                  height: 433px;
                  background-color: #1d2330;
                  overflow: hidden;
                  box-sizing: border-box;
                  border: 1px solid #282e3b;
                  border-radius: 4px;
                  text-align: right;
                  line-height: 14px;
                  font-size: 12px;
                  font-feature-settings: normal;
                  text-size-adjust: 100%;
                  box-shadow: inset 0 -20px 0 0 #262b38;
                  padding: 0px;
                  margin: 0px;
                  width: 100%;
                "
              >
                <div
                  style="height: 413px; padding: 0px; margin: 0px; width: 100%"
                >
                  <iframe
                    src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes"
                    width="100%"
                    height="409px"
                    scrolling="auto"
                    marginwidth="0"
                    marginheight="0"
                    frameborder="0"
                    border="0"
                    style="border: 0; margin: 0; padding: 0"
                  />
                </div>
              </div>
            </p-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="8" class="pa-0">
        <p-container
          dark
          :color="'primary'"
          :title="'Recent Trading Activities'"
        >
          <v-card light flat tile>
            <v-card-text class="">
              <v-row justify="center" no-gutters class="ma-0">
                <v-col
                  cols="3"
                  class="text-caption text-sm-subtitle-2 primary--text"
                  >ID Number</v-col
                >
                <v-col
                  cols="3"
                  class="text-caption text-sm-subtitle-2 primary--text"
                  >Trade Time</v-col
                >
                <v-col
                  cols="3"
                  class="text-caption text-sm-subtitle-2 primary--text"
                  >Status</v-col
                >
                <v-col
                  cols="3"
                  class="text-caption text-sm-subtitle-2 primary--text"
                  >Last Trade</v-col
                >
              </v-row>
              <v-row
                no-gutters
                justify="center"
                class="ma-0"
                v-for="(item, i) in transactions"
                :key="i"
              >
                <v-col cols="12" class="my-2">
                  <v-divider light></v-divider>
                </v-col>
                <v-col cols="3" class="text-caption text-sm-subtitle-2"
                  >ID Number
                  <span
                    class="secondary--text font-weight-sm-light text-caption"
                    >{{ item.id }}</span
                  ></v-col
                >
                <v-col cols="3" class="text-caption text-sm-subtitle-2">{{
                  item.time
                }}</v-col>
                <v-col
                  cols="3"
                  class="text-caption text-sm-subtitle-2 accent--text"
                  >{{ item.status }}</v-col
                >
                <v-col
                  cols="3"
                  class="text-caption text-sm-subtitle-2 secondary--text"
                >
                  <v-icon x-small color="secondary">mdi-arrow-up</v-icon>
                  <span> {{ item.last }}</span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </p-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PTrade from "~/components/investments/pTrade.vue";
import PContainer from "~/components/other/pContainer.vue";
export default {
  name: "Investment",
  components: { PContainer, PTrade },
  layout: "dashboard",

  data: () => ({
    showLive: false,
    hasInvestment: false,
    search: "",
    headers: [
      {
        text: "Amount",
        align: "start",
        sortable: false,
        value: "displayAmount",
      },
      {
        text: "Plan",
        value: "plan",
      },

      {
        text: "Start Date",
        value: "date",
      },
      {
        text: "Maturity Date",
        value: "maturityDate",
      },

      {
        text: "Status",
        value: "status",
      },
    ],

    transactions: [
      {
        id: 175896,
        time: "04:40am",
        status: "Pending",
        last: "0.00311 LTC",
      },
      {
        id: 175896,
        time: "02:40am",
        status: "Complete",
        last: "0.00311 BTC",
      },
      {
        id: 175896,
        time: "01:40am",
        status: "Complete",
        last: "0.00311 BTC",
      },
      {
        id: 175896,
        time: "04:40am",
        status: "Complete",
        last: "0.00311 ETH",
      },
      {
        id: 175896,
        time: "05:40am",
        status: "Complete",
        last: "0.00311 DASH",
      },
      {
        id: 175896,
        time: "02:40am",
        status: "Complete",
        last: "0.00311 NEO",
      },
      {
        id: 175896,
        time: "03:40am",
        status: "Pending",
        last: "0.00311 BTC",
      },
      {
        id: 175896,
        time: "05:40am",
        status: "Pending",
        last: "0.00311 XRP",
      },
      {
        id: 175896,
        time: "04:40am",
        status: "Pending",
        last: "0.00311 BTC",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      loading: "controller/getLoading",
      state: "controller/getState",
      user: "authentication/getUser",
    }),
    investments() {
      const arr = this.state("investments");
      arr.forEach((el) => {
        el.displayAmount = `${
          this.user && this.user.symbol
        }${el.amount.toLocaleString()}`;
        if (el.status === "ongoing") {
          this.hasInvestment = true;
        }
      });

      return arr;
    },
  },
  methods: {
    getColor(type) {
      if (type && type.toLowerCase() === "fail") {
        return "error";
      } else if (
        (type && type.toLowerCase() === "completed") ||
        (type && type.toLowerCase() === "success")
      ) {
        return "success";
      } else if (type && type.toLowerCase() === "ongoing") {
        return "warning";
      } else {
        return type;
      }
    },
    toggleLive(state) {
      this.showLive = state;
    },
  },
};
</script>

<style>
</style>
