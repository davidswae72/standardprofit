<template>
  <v-container class="mt-16 pb-10">
    <v-row style="height: 100hv;" justify="center" class="py-4 pt-16">
      <v-col
        cols="12"
        md="10"
        class="font-weight-light text-subtitle-1 text-md-h6 my-2"
      >
        <v-card
          light
          max-width="800"
          flat
          class="mx-auto white primary--text pt-10"
        >
          <v-card-title class="d-flex flex-column align-center mt-6">
            <v-btn text href="/" class="mt-n8">
              <v-img src="/orangestrips.png" width="100" alt="Standardprofit" />
            </v-btn>

            <div class="text-h5 font-weight-medium mt-10">Create Account</div>
          </v-card-title>
          <v-card-text class="pb-6">
            <v-row class="ma-0">
              <v-col cols="12" class="py-0">
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  class="pb-2"
                  @submit.prevent="submit"
                >
                  <v-row class="py-4">
                    <v-col cols="12" class="px-4 text-uppercase">
                      <div
                        class="text-subtitle-1 text-sm-h6 font-weight-light text3--text"
                      >
                        Person Details
                      </div>
                      <v-divider
                        style="width: 100px; padding: 1px"
                        class="secondary mb-6 mt-2"
                      ></v-divider>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        v-model="firstName"
                        name="firstName"
                        type="text"
                        dense
                        outlined
                        light
                        class="text-subtitle-2 font-weight-light"
                        color="secondary"
                        label="First Name"
                        required
                        :rules="[(v) => !!v || 'First Name is required']"
                      />
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        v-model="lastName"
                        name="lastName"
                        type="text"
                        dense
                        outlined
                        light
                        class="text-subtitle-2 font-weight-light"
                        color="secondary"
                        label="Last Names"
                        required
                        :rules="[(v) => !!v || 'Last Name is required']"
                      />
                    </v-col>

                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        v-model="email"
                        name="email"
                        type="text"
                        dense
                        outlined
                        light
                        class="text-subtitle-2 font-weight-light"
                        color="secondary"
                        label="Email"
                        required
                        :rules="emailRules"
                      />
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-select
                        v-model="gender"
                        dense
                        color="secondary"
                        :items="['Male', 'Female', 'Other']"
                        outlined
                        light
                        label="Gender"
                        class="text-subtitle-2 font-weight-light rounded-md"
                        required
                      />
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        v-model="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        dense
                        outlined
                        light
                        class="text-subtitle-2 font-weight-light"
                        color="secondary"
                        label="PhoneNumber"
                        :rules="[(v) => !!v || 'Phone Number is required']"
                        required
                      />
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        v-model="password"
                        :type="show ? 'text' : 'password'"
                        name="password"
                        dense
                        outlined
                        light
                        color="secondary"
                        label="Password"
                        required
                        class="text-subtitle-2 font-weight-light"
                        :rules="passwordRules"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        hint="Password must be 8 characters long and contain atleast one lowercase, uppercase, number and special character"
                        @click:append="show = !show"
                      />
                    </v-col>
                

                    <!-- todo former confirm password -->
                    <!-- <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        v-model="confirmPassword"
                        :type="show1 ? 'text' : 'password'"
                        name="confirmPassword"
                        dense
                        outlined
                        light
                        color="secondary"
                        label="Confirm Password"
                        required
                        class="text-subtitle-2 font-weight-light"
                        :rules="[
                          confirmPasswordRules,
                          passwordConfirmationRule,
                        ]"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show1 = !show1"
                      />
                    </v-col> -->
                    <v-col cols="12" class="px-4 text-uppercase">
                      <div
                        class="text-subtitle-1 text-sm-h6 font-weight-light text3--text"
                      >
                        Other Details
                      </div>
                      <v-divider
                        style="width: 100px; padding: 1px"
                        class="secondary mb-6 mt-2"
                      ></v-divider>
                    </v-col>
                    <!-- <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                        v-model="zipCode"
                        name="zipCode"
                        type="text"
                        dense
                        outlined
                        light
                        class="text-subtitle-2 font-weight-light"
                        color="secondary"
                        label="Zip Code"
                        :rules="[(v) => !!v || 'Zip Code is required']"
                        required
                      />
                    </v-col> -->
                    <v-col cols="6" class="py-0">
                      <v-autocomplete
                        v-model="country"
                        :items="countries"
                        item-text="name"
                        dense
                        outlined
                        light
                        class="text-subtitle-2 font-weight-light"
                        color="secondary"
                        label="Nationality"
                        required
                        :rules="[(v) => !!v || 'Nationality is required']"
                      />
                    </v-col>
                    <v-col cols="6" class="py-0">
                      <v-select
                        v-model="currency"
                        dense
                        color="secondary"
                        :items="currencies"
                        outlined
                        light
                        class="text-subtitle-2 font-weight-light"
                        :rules="[(v) => !!v || 'Currency is required']"
                        label="Currency"
                        required
                      />
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                      <v-select
                        v-model="plan"
                        value="Starter"
                        dense
                        color="secondary"
                        :items="['Starter', 'Bronze', 'Silver', 'Gold']"
                        :rules="[(v) => !!v || 'Plan is required']"
                        outlined
                        light
                        label="Plan"
                        class="text-subtitle-2 font-weight-light"
                        required
                      />
                    </v-col>
                    <v-col cols="12" md="6" class="py-0">
                    
                        <v-text-field
                          v-model="accManager"
                          name="accManager"
                          type="text"
                          dense
                          outlined
                          light
                          class="text-subtitle-2 font-weight-light"
                          color="secondary"
                          label="Account Manager"
                          :rules="[(v) => !!v || 'Account manager is required']"
                          required
                        />
                      <!-- <v-select
                        v-model="accManager"
                        value="Starter"
                        dense
                        color="secondary"
                        :items="[
                          'Lesedi Morgan',
                          'Christopher Mpho',
                          'Khumo Joan',
                          'Brittany khumo Dnelle',
                          'Jennifer Masilo',
                          'Erika Thabiso',
                          'Thami Thabiso',
                          'Kadrile Kabelo',
                          'Jenamiso Mountain',
                        ]"
                        :rules="[(v) => !!v || 'Account Manager is required']"
                        outlined
                        light
                        label="Account Manager"
                        class="text-subtitle-2 font-weight-light"
                        required
                      /> -->
                    </v-col>

                    <!-- <v-col cols="12" class="py-0">
                      <v-text-field
                        v-model="referredBy"
                        name="referredBy"
                        type="text"
                        dense
                        outlined
                        light
                        class="text-subtitle-2  font-weight-light"
                        color="secondary"
                        label="Referral ID"
                        required
                      />
                    </v-col> -->

                    <!-- <v-col cols="12" md="6" class="py-0">
                      <v-file-input
                        v-model="photo"
                        dense
                        type="file"
                        name="image"
                        chips
                        outlined
                        light
                        class="text-subtitle-2 font-weight-light"
                        required
                        :rules="[v => !!v || 'ID is required']"
                        label="Upload ID"
                        prepend-icon="mdi-camera"
                      />
                    </v-col> -->

                      <!-- todo new zip code -->
                      <!-- <v-col cols="12" md="6" class="py-0">
                      <v-text-field
                          v-model="zipCode"
                          type="text"
                          name="zipcode"
                          outlined
                          light
                          dense
                          required
                          class="text-subtitle-2 font-weight-light"
                          :rules="zipcodeRules"
                          label="zipcode"/>
                    </v-col> -->


                      <!-- todo new ssn code -->
                      <!-- <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                            v-model="SSN"
                            type="text"
                            name="SSN/ID"
                            outlined
                            light
                            dense
                            required
                            class="text-subtitle-2 font-weight-light"
                            :rules="SSNRules"
                            label="SSN/ID Number"/>
  
                      </v-col> -->

                      <!-- todo this is the new address field that has been added -->
                      <!-- <v-col cols="12" class="py-0">
                        <v-textarea
                            v-model="Address"
                            type="text"
                            name="Address"
                            outlined
                            light
                            rows="2"
                            dense
                            required
                            class="text-subtitle-2 font-weight-light"
                            :rules="AddressRules"
                            label="Address"/>
                      </v-col> -->

                               
                    <v-col cols="12" class="py-0">
                      <v-checkbox
                        v-model="acceptTerms"
                        :rules="[(v) => !!v || 'You must agree to continue!']"
                        required
                        light
                        color="secondary"
                        class="py-0 my-0"
                        type="checkbox"
                        value="1"
                      >
                        <template v-slot:label>
                          <div class="text-subtitle-2">
                            I have Read and I Accept the
                            <nuxt-link
                              tag="a"
                              class="secondary--text"
                              to="/terms"
                            >
                              Terms & Conditions
                            </nuxt-link>
                            and
                            <nuxt-link
                              tag="a"
                              class="secondary--text"
                              to="/policy"
                            >
                              Privacy Policy
                            </nuxt-link>
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>
                    <v-col cols="12" class="py-0">
                      <v-checkbox
                        v-model="acceptAge"
                        :rules="[(v) => !!v || 'You must agree to continue!']"
                        required
                        light
                        color="secondary"
                        class="py-0 my-0"
                        type="checkbox"
                        value="1"
                      >
                        <template v-slot:label>
                          <div class="text-subtitle-2">
                            I am 18 years of age or older
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>
                    <v-col cols="12" class="py-0">
                      <v-checkbox
                        required
                        light
                        color="secondary"
                        class="py-0 my-0"
                        type="checkbox"
                        value="1"
                      >
                        <template v-slot:label>
                          <div class="text-subtitle-2">
                            I agree to receive Standardprofit and third party
                            emails
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>
                    <v-col cols="12" class="py-0">
                      <v-btn
                        depressed
                        type="submit"
                        block
                        :loading="loading.register"
                        color="secondary"
                        class="text-capitalize rounded text-subtitle-2 font-weight-regular"
                      >
                        Create Account
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        class="py-0 mt-2 white--text font-weight-light text-center"
      >
        <div class="text-subtitle-1 mt-2">
          Already a member?
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
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data: () => ({
    valid: true,
    show: false,
    show1: false,
    acceptTerms: null,
    acceptAge: null,
    // photo: null,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    referredBy: "",
    // zipCode: "",
    // zipcodeRules: [ (v) => (!!v && v.length > 5) || 'Zipcode is required'],
    gender: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: null,
    currency: null,
    plan: "Starter",
    accManager: "",
    // SSN: "",
    // SSNRules: [ v => !!v || "SSN is required"],
    // Address: "",
    // AddressRules: [ v => !!v || "Address is required"],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
    ],
    confirmPassword: "",
    confirmPasswordRules: [(v) => !!v || "Password is required"],
  }),

  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
      countries: "authentication/getCountries",
      state: "controller/getState",
    }),
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
    referred() {
      return this.$route.query.ref;
    },
    currencies() {
      const currencies = this.state("currency");
      const arr = [];
      currencies &&
        currencies.forEach((el) => {
          arr.push(el.name);
        });

      console.log(arr);
      return arr;
    },
  },

  methods: {
    ...mapMutations({ setData: "authentication/setData" }),
    ...mapActions({
      register: "authentication/register",
      initAlert: "controller/initAlert",
    }),

    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();
      return textOne.includes(searchText);
    },

    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const payload = {
          // referredBy: this.referredBy ? this.referredBy : null,
          plan: this.plan,
          accManager: this.accManager,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          gender: this.gender,
          // zipCode: this.zipCode,
          // Address: this.Address,
          // SSN: this.SSN,
          tradeLevel: "Level 1",
          signal: 20,
          password: this.password,
          country: this.country,
          currency: this.currency,
          symbol: this.getSymbol(this.currency),
          date: this.getDate("current"),
        };
        console.log(payload);
        this.register(payload);
      }
    },

    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getSymbol(payload) {
      const currencies = this.state("currency");
      let symbol;
      currencies &&
        currencies.forEach((el) => {
          if (el.name.toLowerCase() === payload.toLowerCase()) {
            symbol = el.symbol;
          }
        });

      console.log(symbol);
      return symbol;
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
