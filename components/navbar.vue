<template>
  <div class="transparent">
    <v-row class="ma-0 white--text">
      <v-col cols="12" class="d-flex align-center px-md-16">
        <div class="d-flex flex-column flex-sm-row align-start">
          <v-btn
            href="mailto:support@Standardprofit.online"
            class="px-0"
            text
            color="white"
            x-small
          >
            <v-icon small left>mdi-message</v-icon>
            <span class="text-lowercase text-caption"
              >support@Standardprofit.online</span
            >
          </v-btn>
          <v-btn
            href="tel:+12677303028"
            class="px-0"
            text
            color="white"
            x-small
          >
            <v-icon small left>mdi-call</v-icon>
            <span class="text-caption">+1(267) 730-3028</span>
          </v-btn>
        </div>
        <v-spacer></v-spacer>

        <v-spacer />
        <div>
          <v-btn
            to="/login"
            depressed
            text
            x-small
            color="white"
            class="font-weight-regular px-2"
          >
            <v-icon small size="20" left> mdi-account </v-icon>
            Sign in
          </v-btn>
          <v-btn
            to="/register"
            depressed
            text
            x-small
            color="white"
            class="font-weight-regular px-2"
          >
            <v-icon small size="20" left> mdi-account-plus </v-icon>
            Register
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-divider style="opacity: 0.2" class="white"></v-divider>
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-toolbar
          flat
          dark
          dense
          color="transparent"
          class="d-none d-md-block pt-2"
        >
          <div class="transparent">
            <v-btn text href="/" class="">
              <v-img
                src="/orangestrips.png"
                width="50"
                contain
                alt="Standardprofit"
              />
            </v-btn>
          </div>
          <v-spacer />
          <!-- <v-toolbar-items flat class="ma-0" color="white"> -->
          <v-btn
            v-for="link in links"
            :key="link.name"
            tile=""
            text
            active-class=" font-weight-medium secondary--text"
            class="home-active font-weight-regular d-none d-md-block mb-n10"
            :to="link.route"
            exact
          >
            {{ link.name }}
          </v-btn>
          <!-- </v-toolbar-items> -->
        </v-toolbar>
        <div class="d-flex align-center pa-4 d-block d-sm-none">
          <div class="transparent">
            <v-btn text href="/" class="">
              <v-img
                src="/orangestrips.png"
                width="50"
                contain
                alt="Standardprofit"
              />
            </v-btn>
          </div>
          <v-spacer />
          <v-app-bar-nav-icon class="secondary" @click="toggle(true)" />
        </div>
      </v-col>
      <!-- <v-col cols="12" class="pa-0 primary--text">
        <v-google-translate />
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
    toggle: Function,
  },
  data: () => ({
    liveTrade: [
      {
        name: "Payouts",
        value: "3,649,450 USD",
        active: null,
      },
      {
        name: "24 hour price",
        value: "+5.26%",
        active: null,
      },
      {
        name: "24 hour volume",
        value: "12.820 BTC",
        active: null,
      },
      {
        name: "active traders",
        value: "69,775",
        active: null,
      },
      {
        name: "Live Bitcoin price",
        value: "38875.17",
        active: true,
      },
    ],
  }),
};
</script>

<style>
.v-btn:before {
  background-color: transparent;
}
.home-active {
  transition: all 0.3s ease-in-out;
}
.home-active:hover {
  color: #1a71f5;
}
</style>
