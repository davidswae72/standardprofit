<template>
  <v-container>
    <v-row>
      <v-col v-for="card in cards" :key="card.name" cols="12" md="6">
        <v-card
          flat
          dark
          rounded="lg"
          color="primary"
        >
          <v-card-title class="headline">
            <v-icon large fab color="accent" class="mr-3">
              {{ card.icon }}
            </v-icon>
            {{ card.name }}
          </v-card-title>

          <v-card-text>
            <div class="text-h4 white--text">
              $ {{ card.amount | currency }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn :to="card.to" text color="accent" class="text-caption text-capitalize ">
              {{ card.btn }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Showcase',
  filters: {
    currency (val) {
      if (val) {
        return val.toLocaleString()
      } else {

      }
    }
  },
  data: () => ({

  }),
  computed: {
    ...mapGetters({ wallet: 'wallet/getWallet', btc: 'wallet/getBTCValue' }),
    cards () {
      return [
        {
          name: 'Total Deposit',
          icon: 'mdi-wallet',
          amount: this.wallet.totalDeposite,
          btn: 'Withdraw Funds',
          to: 'dashboard/wallet/withdraw',
          class: 'orange-g'
        },

        {
          name: 'Earnings',
          icon: 'mdi-cash-multiple',
          amount: this.wallet.earnings,
          btn: 'Total Earnings',
          to: null,
          class: 'orange-g'
        }
      ]
    }
  }

}
</script>

<style >
.v-card.orange-g {
    background: linear-gradient(to bottom, #0e1129,#161b41);
    box-shadow: 0, 8px 32px 4px hsla(28, 87%, 62%, 0.3);
}
.v-card.blue-g {
    background: linear-gradient(to bottom, #56CCF2,#222DDE);
    box-shadow: 0, 8px 32px 4px hsl(236, 74%, 50%, 0.3);
}
.v-card.green-g {
    background: linear-gradient(to bottom, #13FB73,#0E933B);
    box-shadow: 0, 8px 32px 4px hsl(140, 83%, 32%, 0.3);
}
</style>>
