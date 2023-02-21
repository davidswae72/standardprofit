<template>
  <v-row justify="center" class="ma-0 light py-16">
    <v-col cols="12" md="10">
      <p-heading>
        <template v-slot:sub> Three steps bitcoin </template>
        <template v-slot:title> HOW IT WORK </template>
        To start trading and making profit in our platform requires no
        professional skills. In just three easy steps you are a millionaire.
      </p-heading>
    </v-col>
    <v-col cols="12" md="10" class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-col
          v-for="(item, i) in howItWorks"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <home-card :type="2" :dark="item.dark" :data="item" />
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
    howItWorks: [
      {
        delay: 500,
        number: 1,
        image: "/icon/pick-29.png",
        title: "CREATE YOUR WALLET ",
        description:
          "Create your account by clicking the create account button to have a profile wallet with us.",
      },
      {
        delay: 600,
        number: 2,
        dark: true,
        image: "/icon/pick-29.png",
        title: "MAKE PAYMENTS",
        description:
          "After your wallet is successfully created, fund your account by using one of the payment methods provided.",
      },
      {
        delay: 700,
        number: 3,
        image: "/icon/pick-29.png",
        title: "BUY OR SELL ORDERS",
        description:
          "On funding your account, our instruments allow you to trade bitcoin while you cashout daily.",
      },
    ],
  }),
};
</script>

<style>
</style>