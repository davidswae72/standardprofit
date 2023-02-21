<template>
  <v-container fluid>
    <v-row
      style="height: 60vh"
      justify="center"
      align="center"
      class="bg-contact py-16 white--text"
    >
      <v-col cols="12" md="9" class="text-center white--text mt-10">
        <h4 class="text-h4 text-md-h2 font-weight-bold mb-4">
          Customer Service Center
        </h4>
      </v-col>
    </v-row>
    <v-row justify="center" class="white text2--text py-16 px-4 px-md-10">
      <v-col cols="12" md="10">
        <div class="elfsight-app-f7e59793-e79c-4b32-bbc7-05947f17dbbd"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",

  data: () => ({}),

  methods: {},

  head() {
    return {
      title: "Contact Us",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Have any questions or feedback? Please get in touch with us by filling the contact form below and our support will get back to you within 24 hours",
        },
      ],
      script: [
        {
          src: "https://apps.elfsight.com/p/platform.js",
        },
      ],
    };
  },
};
</script>

<style>
.bg-contact {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("/people/people-2.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
