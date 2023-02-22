<template>
  <v-app>
    <navbar style="z-index: 100" :toggle="toggleDrawer" :links="mainLinks" />

    <v-navigation-drawer
      v-model="drawer"
      style="opacity: 0.9"
      fixed
      temporary
      color="primary"
      dark
      right
    >
      <v-list dark color="white--text" nav>
        <v-list-item-group
          active-class="white--text text-darken-4 text--secondary-4"
        >
          <v-list-item
            v-for="link in mainLinks"
            :key="link.name"
            exact
            :to="link.route"
            class="home-active"
          >
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-icon>
          <v-spacer />
          <v-btn
            to="/login"
            depressed
            color="secondary"
            outlined
            class="text-capitalize mr-2"
          >
            Login
          </v-btn>
          <v-btn
            to="/register"
            depressed
            color="secondary"
            outlined
            class="text-capitalize"
          >
            Sign Up
          </v-btn>
        </v-list-item-icon>
      </v-list>
    </v-navigation-drawer>

    <v-main style="margin-top: -130px" class="primary">
      <popup :top="false" />
      <p-alert />
      <v-slide-y-transition mode="out-in">
        <nuxt />
        <!-- <div class="elfsight-app-1156085f-7551-485e-9b97-9175d25bbcd0" /> -->
      </v-slide-y-transition>
    </v-main>

    <v-footer
      id="contact"
      style="min-height: 300px"
      color="primary darken-2"
      class="d-flex justify-center p-0 pt-4"
    >
      <v-row no-gutterss justify="center">
        <v-col cols="12" md="6" class="py-0">
          <v-list max-height="120" dark three-line color="transparent ">
            <v-list-item
              class="d-flex flex-column flex-md-row text-center text-md-left"
            >
              <v-list-item-content>
                <v-list-item-title class="text-uppercase headline white--text">
                  Standardprofit
                </v-list-item-title>
                <div class="text-caption font-weight-light opacity-h mb-2">
                  Standardprofit is where you trade Bitcoin and other
                  cryptocurrencies without having prior knowledge of computers.
                  Just create a one-time account, fund and cashout weekly.
                </div>

                <!-- todo the location and number at the default footer i removed because it was overlapping something -->
                <!-- <div>
                  <v-btn
                    text
                    target="_blank"
                    href="https://wa.me/+13852477586"
                    class="text-caption font-weight-light opacity-h px-0"
                  >
                    <v-icon left small color="secondary"> mdi-whatsapp </v-icon>
                    +1 (385) 247 586
                  </v-btn>
                </div>

                <div>
                  <v-icon left small color="secondary"> mdi-map-marker</v-icon>
                  <span class="text-caption opacity-h font-weight-light"
                    >235 National Estate, Bareu De, Georgia, United States</span
                  >
                </div> -->
                <!-- <div class="text-caption  font-weight-light opacity-h">
                  33xQjR1JC8bS65R6iE9axZV1erkSRqBBkP
                </div> -->
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="3">
          <v-list max-height="150" dark three-line color="transparent ">
            <v-list-item
              class="d-flex flex-column flex-md-row text-center text-md-left"
            >
              <v-list-item-content>
                <v-list-item-title class="white--text">
                  ADDITIONAL LINKS
                </v-list-item-title>

                <div v-for="link in mainLinks" :key="link.name">
                  <v-btn
                    text
                    dark
                    color="secondary"
                    x-small
                    :to="link.route"
                    class="font-weight-light"
                  >
                    {{ link.name }}
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="3" class="text-center text-md-left mb-4">
          <v-list max-height="120" dark three-line color="transparent ">
            <v-list-item
              class="d-flex flex-column flex-md-row text-center text-md-left"
            >
              <v-list-item-content>
                <v-list-item-title class="white--text">
                  Contact Us
                </v-list-item-title>
                <div class="text-caption font-weight-light">
                  <v-btn
                    dark
                    text
                    href="https://wa.me/+447537105497"
                    target="_blank"
                    icon
                    color="secondary"
                    fab
                    small
                    class="ml-md-6"
                  >
                    <v-icon> mdi-whatsapp </v-icon>
                  </v-btn>
                  <v-btn
                    dark
                    text
                    href="mailto:support@Standardprofit.org"
                    target="_blank"
                    icon
                    fab
                    color="secondary"
                    small
                    class="ml-md-6"
                  >
                    <v-icon> mdi-email-outline </v-icon>
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          md="10"
          class="text-caption text-center text-md-left grey--text text--lighten-2 font-weight-light opacity-h mt-2"
        >
          The information on this website does not convey an offer of any type
          and is not intended to be, and should not be construed as, an offer to
          sell, or the solicitation of an offer to buy, any securities,
          commodities, or other financial products. In addition, the information
          on this website does not constitute the provision of investment
          advice.No assurances can be made that any aims, assumptions,
          expectations, strategies, and/or goals expressed or implied herein
          were or will be realized or that the activities or any performance
          described did or will continue at all or in the same manner as is
          described on this website
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import navbar from "~/components/navbar.vue";
import Popup from "~/components/other/popup.vue";
import PAlert from "~/components/other/pAlert.vue";
export default {
  components: { navbar, Popup, PAlert },
  data: () => ({
    drawer: false,

    socialLink: [
      {
        name: "facebook",
        to: "https://facebook.com",
        icon: "mdi-facebook",
      },
      {
        name: "twitter",
        to: "https://twitter.com",
        icon: "mdi-twitter",
      },
      {
        name: "instagram",
        to: "https://instagram.com",
        icon: "mdi-instagram",
      },
      {
        name: "whatsapp",
        to: "https://wa.me/+447537105497",
        icon: "mdi-whatsapp",
      },
    ],

    mainLinks: [
      { name: "Home", route: "/" },
      { name: "About Us", route: "/about" },
      // { name: 'Why Us ', route: '/whyus' },
      // { name: 'FAQ', route: '/faq' },
      // { name: 'Terms & Policy', route: '/policy' },
      { name: "Contacts", route: "/contact" },
    ],
    head: () => ({
      script: [{ src: "https://apps.elfsight.com/p/platform.js" }],
    }),
  }),
  created() {
    this.$store.dispatch("controller/initCurrency");
  },
  methods: {
    toggleDrawer(state) {
      this.drawer = state;
    },
  },
};
</script>

<style scoped>
.footer-color {
  background-color: #1f2050;
  color: rgba(255, 255, 255, 0.877);
}
.opacity {
  opacity: 0.9;
}
.opacity-h {
  opacity: 0.7;
}
.v-btn:before {
  background-color: transparent;
}

.social-hover:hover {
  color: #01579b;
}

.home-active {
  transition: all 0.3s ease-in-out;
}
.home-active:hover {
  color: #1a71f5;
}
</style>
