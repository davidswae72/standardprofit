<template>
  <v-row justify="center" class="ma-0 light py-16">
    <v-col cols="12" md="10">
      <p-heading>
        <template v-slot:sub> Three steps bticoin </template>
        <template v-slot:title> OUR CONSULTANTS </template>
        For more than 5 years, our team of professionals keep making strategic
        decisions which in turn is a five-star rating for
        Standardprofit.
      </p-heading>
    </v-col>
    <v-col cols="12" md="10" class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-col
          v-for="(item, i) in team"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <v-card flat tile>
            <div class="my-2">
              <v-avatar tile size="100%">
                <img :src="item.image" max-width="100" alt="" />
              </v-avatar>
            </div>
            <v-card-text class="text-center">
              <div class="text-subtitle-1 text2--text text-sm-h6">
                {{ item.name }}
              </div>
              <div class="text-subtitle-2 my-2">{{ item.position }}</div>
              <div>
                <v-btn icon v-for="(link, i) in socials" :key="i">
                  <v-icon size="20">
                    {{ link }}
                  </v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
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
    team: [
      {
        delay: 500,
        image: "/people/pic5.jpeg",
        name: "Ann Zulu",
        position: "Consultant",
      },
      {
        delay: 600,
        image: "/people/pic6.jpeg",
        name: "Richard Wagner",
        position: "Ceo & Founder",
      },
      {
        delay: 700,
        image: "/people/pic7.jpeg",
        name: "Jessica Atkin",
        position: "Manager",
      },
    ],

    socials: ["mdi-facebook", "mdi-linkedin", "mdi-twitter", "mdi-instagram"],
  }),
};
</script>

<style></style>
