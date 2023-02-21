<template>
  <v-row justify="center" class="ma-0 light py-16">
    <v-col cols="12" md="10">
      <p-heading>
        <template v-slot:sub> Buy and Sell Bitcoin </template>
        <template v-slot:title> WHY CHOOSE BITCOIN </template>
        Bitcoin is a decentralized cryptocurrency which means it is owned by
        nobody. Trading in bitcoin is so far the most profitable. Almost a
        quarter of the earth's population would rather have their money invested
        in bitcoin.
      </p-heading>
    </v-col>
    <v-col cols="12" md="10" class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-col
          v-for="(item, i) in whyUs"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <home-card :data="item" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import HomeCard from "~/components/section/homeCard.vue";
import PHeading from "~/components/section/pHeading.vue";

export default {
  components: { HomeCard, PHeading },
  data: () => ({
    whyUs: [
      {
        delay: 500,
        image: "/icon/pick-29.png",
        title: "INSTANT TRADING",
        description:
          "With Forex24hourstradeprofitstrader, your trade is initiated immediately after account is funded.",
      },
      {
        delay: 600,
        image: "/icon/pick-28.png",
        title: "RECURRING BUYING",
        description:
          "Our instruments allow you to fund your account and automatically initiate trade when the market is favorable.",
      },
      {
        delay: 700,
        image: "/icon/pick-17.png",
        title: "SAFE AND SECURE",
        description:
          "Trading cryptocurrency with us is safe and secured. Cloudflare and SSL technologies are used to secure our servers for safe trading experience.",
      },
      {
        delay: 800,
        image: "/icon/pick-19.png",
        title: "INVESTMENT PLANNING",
        description:
          "Before your trade is started, Forex24hourstradeprofitstrader allows you to analyse your investment for the next one to two years.",
      },
      {
        delay: 900,
        image: "/icon/pick-12.png",
        title: "COVERED BY INSURANCE",
        description:
          "Every client having an associate account with Forex24hourstradeprofitstrader is covered by our insurance scheme.",
      },
      {
        delay: 1000,
        image: "/icon/pick-38.png",
        title: "DAILY PAYOUTS",
        description:
          "Our payouts are daily and without delay. after a withdrawal request is made, your transanction is processed in less than 24hrs.",
      },
    ],
  }),
};
</script>

<style></style>
