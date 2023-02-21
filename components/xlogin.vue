<template>
  <v-card
    flat
    light
    max-width="400"
    color="white"
    class="mx-auto rounded-lg px-md-4 py-4"
  >
    <v-card-title class="d-flex flex-column align-center mt-6">
      <v-btn text href="/" class="mt-n8">
        <v-img src="/Cashtagforex.png" width="200" alt="Forex24hourstrade" />
      </v-btn>
      <div class="text-h5 font-weight-bold mt-10">Log In</div>
    </v-card-title>
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-row no-gutters>
          <v-col cols="12" class="py-0">
            <v-text-field
              v-model="email"
              type="email"
              name="email"
              dense
              outlined
              color="secondary"
              label="Email"
              :rules="emailRules"
              class="text-subtitle-2 font-weight-light rounded-md"
            />
          </v-col>
          <v-col cols="12" class="py-0 mb-n1">
            <v-text-field
              v-model="password"
              :type="show ? 'text' : 'password'"
              name="password"
              dense
              outlined
              color="secondary"
              label="Password"
              :rules="passwordRules"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              class="text-subtitle-2 font-weight-light rounded-md"
              @click:append="show = !show"
            />
          </v-col>

          <v-col cols="12" class="py-2">
            <v-btn
              type="submit"
              depressed
              block
              :loading="loading.login"
              color="secondary"
              class="text-subtitle-2 text-capitalize font-weight-normal"
            >
              Log in
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-1 mt-2 text-center">
            <div class="mb-2">
              <nuxt-link
                to="/password/reset"
                tag="a"
                class="font-weight-medium secondary--text"
              >
                Forgot Password
              </nuxt-link>
            </div>
            <div>
              Don't have an account
              <nuxt-link
                to="/register"
                tag="a"
                class="font-weight-medium secondary--text"
              >
                Sign up
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Personal",
  props: ["update", "setForm"],
  data: () => ({
    valid: true,
    show: true,
    email: "",
    emailRules: [(v) => !!v || "Email is required"],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
    ],
  }),

  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
    }),
  },

  methods: {
    ...mapActions({ loginUser: "authentication/loginUser" }),

    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const payload = {
          email: this.email,
          password: this.password,
          date: this.getDate("current"),
        };

        this.loginUser(payload);
        // console.log(payload);
      }
    },

    clear() {
      this.reset();
      this.resetValidation();
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getDate(get, days) {
      const currentDate = new Date();
      let newDate;

      function addDays(days) {
        const result = new Date(currentDate);
        result.setDate(result.getDate() + days);
        return formatDate(result);
      }

      function formatDate(date) {
        const hours = date.getHours() % 12 || 12;
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}-${hours}:${date.getMinutes()}`;
      }

      if (get === "add") {
        newDate = addDays(days);
      } else if (get === "current") {
        newDate = formatDate(currentDate);
      }
      return newDate;
    },
  },
};
</script>

<style></style>
