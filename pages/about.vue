<template>
  <v-container fluid class="pa-0">
    <v-row
      style="height: 60vh"
      justify="center"
      align="center"
      class="bg-about px-0 py-16 white--text"
    >
      <v-col
        cols="12"
        md="9"
        class="text-h4 text-md-h2 text-center font-weight-bold white--text mt-10"
      >
        About <span class="secondary--text">Standardprofit</span>
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
                A NEW KIND OF MONEY
              </div>
            </div>
            <v-divider
              style="width: 50px; padding: 1px"
              class="secondary mb-4"
            ></v-divider>
            <p
              class="mb-6 text-subtitle-2 text-sm-subtitle-1 font-weight-medium text2--text"
            >
              Bitcoin is the world's first advanced decentralized cash and
              installment cryptocurrency.
            </p>
            <p
              class="mb-6 text-subtitle-2 text-sm-subtitle-1 font-weight-light text2--text"
            >
              Bitcoin is a consensus network that enables a new payment system
              and a completely digital money. It is the first decentralized
              peer-to-peer payment network that is powered by its users with no
              central authority or middlemen. From a user perspective, Bitcoin
              is pretty much like cash for the Internet. Bitcoin can also be
              seen as the most prominent triple entry bookkeeping system in
              existence..
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
      <v-col
        data-aos="fade-left"
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
              src="/bg/pic3.jpeg"
              contain
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <why-us />
    <v-row class="align-center bg-134 px-md-16 px-4 py-16 primary ma-0">
      <v-col cols="12" md="4" class="py-16">
        <div
          class="text-h4 text-md-h3 text-lg-h2 text-capitalize white--text font-weight-bold"
        >
          134 countries
        </div>
        <div
          style="font-size: 17px"
          class="text-md-h5 indigo--text text--lighten-3 font-weight-light mt-5"
        >
          Traders from all over the world trust Moneyprisms. The platform
          interface is localized into 12 languages.
        </div>
      </v-col>
      <v-col cols="12" class="py-16" />
    </v-row>
    <home-team />
    <v-row justify="center" class="primary white--text py-16 px-4 px-md-10">
      <v-col
        v-for="service in services"
        :key="service.name"
        data-aos="fade-up"
        :data-aos-delay="service.delay"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="10"
      >
        <div class="text-h5 text-md-h4 font-weight-medium mb-4">
          {{ service.name }}
        </div>
        <p class="font-weight-light">
          {{ service.description }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeTeam from "~/components/section/homeTeam.vue";
import WhyUs from "~/components/section/whyUs.vue";

export default {
  components: { WhyUs, HomeTeam },
  name: "About",
  data: () => ({
    services: [
      {
        name: "Simplicity",
        delay: 500,
        description:
          "One of Standardprofit main goals is to remove barriers and make online trading and investing more accessible to the everyday user. Whenever people join Standardprofit, we aim to make them feel a part of the platform from the very beginning. Moreover, we realize that many people use multiple platforms to manage their capital online, which is why we are constantly expanding our product offering to eventually include all of your financial needs under one roof.",
      },
      {
        name: "Innovation",
        delay: 600,
        description:
          "We take great pride in the fact that we have been around since the earliest days of the Fintech Revolution. Whether by introducing new and exciting ways to trade and invest online or by inventing cutting-edge financial products – we are, and always will be, innovators and disruptors in the Fintech space.",
      },
      {
        name: "Enjoyable",
        delay: 700,
        description:
          "We believe that people should be able to trade more than financial assets, like thoughts and feelings. On Standardprofit, our users can interact and gain from each other’s experience. Our platform is intuitive and user-friendly, turning even the most complicated actions, like stock trading, to a simple and interactive experience",
      },
      {
        name: "Openness",
        delay: 800,
        description:
          "Openness and transparency are an integral part of the user experience on Standardprofit. Whether it’s the ability to start a chat with any user on board, our CEO included, or the fact that we don’t charge any hidden fees and make sure our prices are clear and visible, we strive to make sure that our users feel that they have all the information they need to handle their finances on Standardprofit.",
      },
      {
        name: "Quality",
        delay: 900,
        description:
          "A meticulous thought process behind every decision and a constant striving for perfection, guides Standardprofit to deliver the best possible experience for all of our users. From the moment a person is exposed to our logo, we wish to make sure that he feels our attention to even the minutest details at all times.",
      },
    ],
  }),
  head() {
    return {
      title: "About Us",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            " Standardprofit vision is to open the global markets for everyone to trade and invest in a simple and transparent way.",
        },
      ],
    };
  },
};
</script>

<style>
.bg-about {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("/bg/bg-4.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-134 {
  background: linear-gradient(rgba(6, 6, 61, 0.1), rgba(6, 6, 61, 0.1)),
    url("/assets/bg134.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
