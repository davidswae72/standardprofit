<template>
  <v-row justify="center" class="bg-get primary white--text px-md-16 px-4 py-16 ma-0">
    <v-col
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      cols="12"
      class="text-center font-weight-light"
    >
      <h2 class="text-h5 font-weight-bold text-uppercase text-md-h3 mb-4">
        Get
        <span class="secondary--text">Started</span> in three easy steps
      </h2>

      <p>
        Begin your journey to financial freedom. Make your money work for you.
      </p>
    </v-col>
    <v-col
      v-for="start in started"
      :key="start.name"
      data-aos="fade-up"
      :data-aos-delay="start.delay"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      cols="12"
      sm="6"
      md="3"
      color="transparent"
      class="py-0"
    >
      <v-card
        class="py-6 mx-auto"
        height="300"
        color="transparent "
        max-width="300"
        flat
      >
        <v-card-title
          class="headline white--text  d-flex justify-center flex-column font-weight-light"
        >
          <div class="my-2">
            <v-icon size="60" color="secondary">
              {{ start.icon }}
            </v-icon>
          </div>
          <div class="my-2">
            {{ start.name }}
          </div>
        </v-card-title>
        <v-card-text class="text-center grey--text sfont-weight-light ">
          {{ start.description }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" class="d-flex justify-center py-0">
      <v-btn to="/register" tile color="secondary" outlined class="text-subtitle-1 px-6">
        Get Started
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    started: [
      {
        name: 'Create Account',
        description: 'Register an account to build your investment portofolio',
        icon: 'mdi-account-box',
        delay: 500
      },
      {
        name: 'Fund Your Account',
        description: 'Deposit Cryptocurrency to fund your account',
        icon: 'mdi-account-cash',
        delay: 600
      },
      {
        name: 'Make Profit',
        description: 'Get your money working for you and earn great returns',
        icon: ' mdi-cash-fast',
        delay: 700
      }
    ]
  })
}
</script>

<style>
.bg-get {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url("/bg/globe.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
