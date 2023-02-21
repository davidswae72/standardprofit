<template>
  <v-container style="overflow: hidden" fluid class="pa-0">
    <v-row
      align="center"
      justify="center"
      class="primary darken-2 ma-0 bg-home"
      style="height: 100vh; overflow: hidden"
    >
      <v-col cols="12" md="10" class="pa-0">
        <home-slider />
      </v-col>
    </v-row>

    <v-row no-gutters class="ma-0">
      <v-col cols="12" class="pa-0 trasnparent mt-n2">
        <div style="height: 40px; padding: 0px 0px; margin: 0px; width: 100%">
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
            width="100%"
            height="36px"
            scrolling="auto"
            marginwidth="0"
            marginheight="0"
            frameborder="0"
            border="0"
            style="border: 0; margin: 0; padding: 0"
          />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="bg-poster2 ma-0 white lighten-2">
      <v-col cols="12" class="secondary white--text pa-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" sm="9">
            <p class="font-weight-bold">
              INVEST IN BITCOIN TRADING AND MINING.
            </p>
            <p class="text-subtitle-1">
              In simple terms, bitcoin trading is the buying and selling of
              bitcoin. To really break it down, buying bitcoin at a low price
              means that you pay a low amount of fiat currency for a high amount
              of bitcoin. Selling bitcoin at a high price means that you receive
              a high amount of fiat currency for a low amount of bitcoin and
              it's what we do at universal
            </p>
          </v-col>
          <v-col cols="12" sm="2" class="d-flex align-center">
            <v-btn tile depressed dark color="primary" class="">
              Create Account
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-row justify="center" align="center" class="ma-0">
          <v-col cols="12" sm="6">
            <v-card flat>
              <v-card-text>
                <youtube
                  width="100%"
                  :video-id="videoId"
                  :player-vars="playerVars"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="secondary d-flex flex-column align-start"
          >
            <div class="white--text text-subtitle-1 font-weight-medium mb-4">
              Introduction to <br />
              <span class="font-weight-medium text-h5 text-sm-h2"
                >Binary Options</span
              >
            </div>
            <v-btn tile depressed dark color="primary" class="">
              Create Account
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      justify="space-around"
      class="ma-0 white primary--text py-16 px-4 px-md-10"
    >
      <v-col
        data-aos="fade-right"
        data-aos-delay="700"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="6"
      >
        <v-card
          class="transparent"
          flat
          :max-height="$vuetify.breakpoint.xsOnly ? 300 : 400"
        >
          <v-card-text>
            <v-img
              :height="$vuetify.breakpoint.xsOnly ? 300 : 400"
              src="/bg/bg-laptop.png"
              contain
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        data-aos="fade-left"
        data-aos-delay="700"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="6"
      >
        <v-card dark flat class="transparent">
          <v-card-text
            class="white--text text-caption text-subtitle-1 font-weight-light text-left"
          >
            <div class="text-subtitle-1 my-4">
              <div
                style="letter-spacing: 5px"
                class="text1--text text--lighten-3 text-capitalize"
              >
                What is bitcoin
              </div>
              <div class="text3--text text-h6 text-sm-h5">
                NEW CURRENCY BITCOIN
              </div>
            </div>
            <v-divider
              style="width: 50px; padding: 1px"
              class="secondary mb-4"
            ></v-divider>
            <p
              class="mb-6 text-subtitle-2 text-sm-subtitle-1 font-weight-medium text2--text"
            >
              A cryptocurrency is a digital or virtual currency that is secured
              by cryptography, which makes it nearly impossible to counterfeit
              or double-spend. Many cryptocurrencies are decentralized networks
              based on blockchain technology—a distributed ledger enforced by a
              disparate network of computers.
            </p>
            <p
              class="mb-6 text-subtitle-2 text-sm-subtitle-1 font-weight-light text2--text"
            >
              In simple terms, bitcoin trading is the buying and selling of
              bitcoin. To really break it down, buying bitcoin at a low price
              means that you pay a low amount of fiat currency for a high amount
              of bitcoin.
            </p>

            <div class="mb-4">
              <v-btn
                depressed
                to="/register"
                tile
                color="secondary"
                :small="$vuetify.breakpoint.xsOnly"
                class="ma-0"
              >
                Create Account
              </v-btn>
              <v-btn
                depressed
                to="/login"
                tile
                color="primary"
                :small="$vuetify.breakpoint.xsOnly"
                class="ma-0 ml-2"
              >
                Login
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <why-us />
    <v-row justify="center" class="ma-0 white text3--text py-10">
      <v-col cols="12" md="10" class="text-center">
        <div
          class="text-h6 text-sm-h4 text1--text text--lighten-1 text-capitalize"
        >
          Explore Our pricing
        </div>
        <p
          class="text1--text text-subtitle-2 text-sm-subtitle-1 font-weight-light my-2"
        >
          Discover our unbeatable investment packages
        </p>
      </v-col>
      <v-col cols="12" md="10" class="pa-0">
        <v-row justify="center" class="ma-0">
          <v-col
            v-for="(item, i) in plans"
            :key="i"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
          >
            <home-plans :data="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="bg-why primary lighten-1 py-6 py-md-16 px-4 secondary--text ma-0"
    >
      <v-col
        data-aos="fade-right"
        data-aos-delay="700"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="6"
      >
        <v-card
          dark
          tile
          flat
          :max-height="$vuetify.breakpoint.xsOnly ? 300 : 500"
          class="transparent rounded-xl"
        >
          <v-card-text>
            <v-img
              :height="$vuetify.breakpoint.xsOnly ? 300 : 500"
              src="/bg/bg-4.jpg"
              contain
              class="rounded-xl"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        data-aos="fade-left"
        data-aos-delay="700"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="6"
      >
        <v-card dark tile flat class="transparent px-md-6">
          <v-card-title class="text-h5 font-weight-bold text-md-h4 mb-4">
            Why <span class="secondary--text mx-1"> Choose </span> Us
          </v-card-title>
          <v-card-text class="text-subtitle-2 font-weight-light text-left">
            <p class="mb-6">
              Standardprofit strives to be worthy of our client's trust by
              providing them with services which are economically beneficial to
              them and to create awareness regarding reliable and highly
              profitable investment platform among our clients around the globe.
              All you need to do is sit back and enjoy how your profit grows on
              a daily.
            </p>

            <v-row
              class="d-flex white--text justify-content-between align-center"
            >
              <v-col cols="12" sm="6" class="d-flex align-center py-2">
                <v-icon x-small color="secondary darken-2" class="px-2">
                  mdi-check
                </v-icon>
                Professional team
              </v-col>
              <v-col cols="12" sm="6" class="d-flex align-center py-2">
                <v-icon x-small color="secondary" class="px-2">
                  mdi-check
                </v-icon>
                DDOS security
              </v-col>
              <v-col cols="12" sm="6" class="d-flex align-center py-2">
                <v-icon x-small color="secondary" class="px-2">
                  mdi-check
                </v-icon>
                Instant payments
              </v-col>
              <v-col cols="12" sm="6" class="d-flex align-center py-2">
                <v-icon x-small color="secondary" class="px-2">
                  mdi-check
                </v-icon>
                UnPROFITue design
              </v-col>
              <v-col cols="12" sm="6" class="d-flex align-center py-2">
                <v-icon x-small color="secondary" class="px-2">
                  mdi-check
                </v-icon>
                24/7 live support
              </v-col>
              <v-col cols="12" sm="6" class="d-flex align-center py-2">
                <v-icon x-small color="secondary" class="px-2">
                  mdi-check
                </v-icon>
                Profitable plans
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <how-it-works />
    <v-row
      justify="center"
      class="ma-0 primary white--text py-16 px-4 px-md-10"
    >
      <v-col cols="12" class="text-center mb-4">
        <div class="text-h5 text-md-h3 font-weight-bold text-uppercase">
          Affordable <span class="secondary--text">Packages</span>
        </div>
        <div class="font-weight-light my-2 text-subtitle-1">
          CHOOSE YOUR PREFERABLE PLAN FOR INVESTMENT.
        </div>
      </v-col>
      <v-col cols="12" md="10">
        <bitcoin-chart />
      </v-col>
    </v-row>
    <v-row justify="center" class="ma-0 white py-16 bg-client">
      <v-col cols="12" md="10">
        <p-heading>
          <template v-slot:sub> Our Clients</template>
          <template v-slot:title> OUR CLIENT SAY </template>
        </p-heading>
      </v-col>
      <v-col cols="12" md="10" class="pa-0 py-10">
        <v-row justify="center" class="ma-0">
          <v-col
            v-for="(item, i) in teams"
            :key="i"
            cols="12"
            sm="6"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
          >
            <home-team :data="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="ma-0 primary darken-2 bg2 white--text px-md-16 px-4 py-16"
    >
      <v-col
        v-for="service in services"
        :key="service.name"
        data-aos="fade-up"
        :data-aos-delay="service.delay"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="4"
      >
        <v-card
          class="py-6 mx-auto"
          height="300"
          color="transparent white--text"
          max-width="300"
          flat
        >
          <v-card-title
            class="headline white--text d-flex justify-center flex-column font-weight-light"
          >
            <div class="my-2">
              <v-icon x-large color="secondary">
                {{ service.icon }}
              </v-icon>
            </div>
            <div class="my-2">
              {{ service.name }}
            </div>
          </v-card-title>
          <v-card-text class="text-center font-weight-light white--text">
            {{ service.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- Service Section Ends -->

    <!-- Bitcoint Chart Start -->
    <!-- <v-row justify="center" class="primary py-16 px-4 ma-0">
      <h2
        class="text-h5 white--text font-weight-bold text-center text-md-h3 mb-6"
      >
        Market <span class="secondary--text">Highlight</span>
      </h2>
      <v-col cols="12" class="pa-0">
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
          <div style="height: 540px; padding: 0px; margin: 0px; width: 100%">
            <iframe
              src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505"
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
      </v-col>
      
    </v-row> -->

    <!-- Bitcoint Chart Ends -->
    <v-row class="ma-0" justify="center">
      <v-col cols="12" class="pa-0">
        <!-- <div class="elfsight-app-6ae98d59-a04f-405c-9609-3c73784807da"></div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BitcoinChart from "~/components/bitcoinChart.vue";
import HomeCard from "~/components/section/homeCard.vue";
import HomeSlider from "~/components/section/homeSlider.vue";
import PHeader from "~/components/other/pHeader.vue";
import PHeading from "~/components/section/pHeading.vue";
import HomePlans from "~/components/section/homePlans.vue";
import HomeTeam from "~/components/section/homeTestimony.vue";
import HowItWorks from "~/components/section/howItWorks.vue";
import WhyUs from "~/components/section/whyUs.vue";
export default {
  components: {
    BitcoinChart,
    PHeader,
    PHeading,
    HomeCard,
    HomeSlider,
    HomePlans,
    HomeTeam,
    HowItWorks,
    WhyUs,
  },
  filters: {
    currency(val) {
      if (val) {
        return val.toLocaleString();
      } else {
      }
    },
  },

  data: () => ({
    activenow: true,
    videoId: "v7FcdXYpuEw",
    playerVars: {
      autoplay: 0,
    },
    windowWidth: 0,
    volume: 13776746,
    teams: [
      {
        delay: 500,
        image: "/people/pic1.jpeg",
        name: " Rinda Smith",
        occupation: " Founder, RindaMath Co.",
        description:
          "Started trading with Universal Live Trade Trades 2019. The odds are great! Like their withdrawals are instant and payment is flawless.",
      },
      {
        delay: 600,
        image: "/people/pic5.jpeg",
        name: "Rita Robert",
        occupation: "Financial analyst, Blossom.",
        description:
          "Was actually contemplating on which platform to trade my bitcoin until my husband told me about Standardprofit. Simplicity of trading and on-time payouts cannot be over-emphasized.",
      },
    ],
    plans: [
      {
        delay: 500,
        name: "Starter",
        startup: 500,
        leverage: 10,
        income: 0.5,
        max: 1000,
      },
      {
        delay: 600,
        name: "Bronze",
        startup: 1000,
        leverage: 20,
        income: 1,
        max: 5000,
      },
      {
        delay: 700,
        name: "Silver",
        startup: 5000,
        leverage: 50,
        income: 5,
        max: 10000,
      },
      {
        delay: 800,
        name: "Gold",
        startup: 10000,
        leverage: 100,
        income: 10,
        max: 9999,
      },
    ],

    discovers: [
      {
        name: "Trust",
        description: "Our company is fully regulated by the FCA and CySec",
        image: "/logo/trust.png",
      },
      {
        name: "Security",
        description:
          "Your funds are protected by industry leading security protocols",
        image: "/logo/security.png",
      },
      {
        name: "Privacy",
        description:
          "We will never share your private data without your permission",
        image: "/logo/privacy.png",
      },
    ],

    services: [
      {
        name: "Professional team",
        description:
          "Standardprofit is managed by a team who have extensive experience in the field of investment.",
        icon: "mdi-account-settings-outline",
        delay: 500,
      },
      {
        name: "Instant payments",
        description:
          "We believe in instant payments so that our clients enjoy payouts without any unnecessary waiting time.",
        icon: "mdi-clock-check-outline",
        delay: 600,
      },
      {
        name: "Profitable plans",
        description:
          "Our investment plans are designed to generate maximum profits with minimum investment.",
        icon: " mdi-chart-line",
        delay: 700,
      },
    ],
    stats: [
      {
        name: "Toal assets",
        total: "14 M+",

        delay: 500,
      },
      {
        name: "YEARS OF EXPERIENCE",
        total: "8",

        delay: 600,
      },
      {
        name: "QUALIFIED TRADERS",
        total: "78",

        delay: 700,
      },
      {
        name: "RUNNING DAYS",
        total: "3551",
        delay: 800,
      },
    ],
  }),
  computed: {
    activeUser() {
      const users = 1868365;
      return Math.floor(Math.random() * users) + 268365;
    },
  },
  created() {
    // this.$store.dispatch("controller/runApp");
    

    const min = 1000 * 60 * 12;
    setInterval(() => {
      this.activenow = !this.activenow;
    }, 1000);

    setInterval(() => {
      this.volume = Math.floor(Math.random() * this.volume) + 1868365;
    }, min);
  },

  head() {
    return {
      title: "Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Standardprofit is where you trade Bitcoin and other cryptocurrencies without having prior knowledge of computers. Just create a one-time account, fund and cashout weekly.",
        },

        {
          hid: "og:description",
          property: "og:description",
          content:
            "Standardprofit is where you trade Bitcoin and other cryptocurrencies without having prior knowledge of computers. Just create a one-time account, fund and cashout weekly.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/orangestrips.png",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:image:src",
          property: "twitter:image:src",
          content: "/orangestrips.png",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Standardprofit",
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
      ],
      script: [
        {
          src: "https://apps.elfsight.com/p/platform.js",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/coinponent/coinponent@undefined/dist/coinponent.js",
        },
        {
          src: "//code.tidio.co/v3p7xopjxhguxtzpbztl7gv5kzdtqpmc.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css",
        },
      ],
    };
  },
};
</script>
<style scoped>
.up {
  z-index: 2;
}
.bgv {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}
.bgc {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(2, 42, 175, 0.5), rgba(1, 5, 63, 0.3)),
    url("/bg/video.mp4");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-client {
  background: url("/bg/map.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.bg-home {
  background: linear-gradient(rgba(0, 0, 0, 0.518), rgba(0, 0, 0, 0.509)),
    url("/bg/bgnight.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.bg-why {
  background: linear-gradient(rgba(0, 0, 0, 0.856), rgba(0, 0, 0, 0.7)),
    url("/bg/bg-1.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg2 {
  background: linear-gradient(rgba(0, 0, 0, 0.856), rgba(0, 0, 0, 0.7)),
    url("/bg/bg-1.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
