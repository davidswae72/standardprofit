<template>
  <v-container class="pt-10">
    <v-row justify="center" class="py-16 mt-10">
      <v-col cols="12">
        <v-card
          light
          flat
          max-width="400"
          color="white"
          class="mx-auto rounded-lg px-md-4 py-2"
        >
          <v-card-title class="d-flex flex-column align-center mt-6">
            <v-btn text href="/" class="mt-n8">
              <v-img src="/orangestrips.png" width="100" alt="Standardprofit" />
            </v-btn>
            <div class="text-h5 font-weight-bold mt-10">Forgot Password</div>
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
                    filled
                    color="secondary"
                    label="Email"
                    :rules="emailRules"
                    class="text-subtitle-2 font-weight-light rounded-md"
                  />
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-btn
                    type="submit"
                    :loading="loading.reset"
                    depressed
                    block
                    color="secondary"
                    class="text-subtitle-2 text-capitalize font-weight-normal"
                  >
                    Reset Password
                  </v-btn>
                </v-col>

                <v-col cols="12" class="py-0 mt-2 text-center">
                  <div>
                    Back to?
                    <nuxt-link
                      to="/login"
                      tag="a"
                      class="font-weight-medium secondary--text"
                    >
                      Login
                    </nuxt-link>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  props: ["update", "setForm"],
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
    }),
  },

  methods: {
    ...mapMutations({ setRegistration: "authentication/setRegistration" }),
    ...mapActions({
      initAlert: "controller/initAlert",
      resetPassword: "authentication/resetPassword",
    }),

    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.resetPassword(this.email);
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
  },
};
</script>

<style></style>
