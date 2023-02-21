<template>
  <x-side-bar :loading="loading.wallet" :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex text3--text flex-column">
        <span v-if="type === 'add'" class="text-h6 d-flex align-center">
          New Wallet Address
        </span>
        <span v-if="type === 'edit'" class="text-h6 d-flex align-center">
          Edit Wallet Address
        </span>
      </div>
    </template>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submit"
    >
      <!-- /////////////////// Add Address Section /////////////////// -->
      <v-row v-if="type === 'add'" no-gutters class="ma-0 pt-4">
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="name"
            type="text"
            name="name"
            dense
            outlined
            color="primary"
            label="Name"
            required
            class="text-subtitle-2 font-weight-light "
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="address"
            type="text"
            name="address"
            dense
            outlined
            color="primary"
            label="Address"
            required
            :rules="nameRules"
            class="text-subtitle-2 font-weight-light "
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-file-input
            v-model="file"
            type="file"
            outlined
            dense
            accept="image/*"
            :label="`Upload QR`"
            class="text-subtitle-2 mx-1 font-weight-light rounded-md"
          />
        </v-col>

        <v-col cols="12" class="py-0 d-flex align-center">
          <v-spacer />
          <v-btn
            block
            depressed
            type="submit"
            :loading="loading.wallet"
            tile
            color="primary"
            :rules="addressRules"
            class="text-capitalize rounded text-subtitle-2 font-weight-regular"
          >
            Add Address
          </v-btn>
        </v-col>
      </v-row>
      <!-- /////////////////// Edit Address Section /////////////////// -->
      <v-row v-if="type === 'edit'" no-gutters class="ma-0 pt-4">
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="data.name"
            type="text"
            name="name"
            dense
            outlined
            color="primary"
            label="Name"
            required
            :rules="nameRules"
            class="text-subtitle-2 font-weight-light "
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="data.address"
            type="text"
            name="address"
            dense
            outlined
            color="primary"
            label="Address"
            required
            :rules="addressRules"
            class="text-subtitle-2 font-weight-light "
          />
        </v-col>
        <v-col v-if="!edit" cols="10" class="py-0">
          <v-text-field
            type="text"
            name="qrcode"
            :value="data.photoURL"
            dense
            outlined
            color="primary"
            label="QR Code"
            required
            readonly
            class="text-subtitle-2 font-weight-light "
          />
        </v-col>
        <v-col v-if="!edit" cols="2" class="py-0">
          <v-btn
            icon
            small
            color="primary"
            depressed
            class="mt-2"
            @click="edit = !edit"
          >
            <v-icon>mdi-camera</v-icon>
          </v-btn>
        </v-col>
        <v-col v-if="edit" cols="12" class="py-0">
          <v-file-input
            v-model="file"
            type="file"
            outlined
            dense
            accept="image/*"
            :label="`Upload QR`"
            class="text-subtitle-2 mx-1 font-weight-light rounded-md"
          />
        </v-col>

        <v-col cols="12" class="py-0 d-flex align-center">
          <v-spacer />
          <v-btn
            block
            depressed
            type="submit"
            :loading="loading.wallet"
            tile
            color="primary"
            class="text-capitalize rounded text-subtitle-2 font-weight-regular"
          >
            Update Address
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </x-side-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import XSideBar from '../xSideBar.vue'

export default {
  components: { XSideBar },
  props: {
    drawer: Boolean,
    toggle: Function,
    wallet: Object,
    type: {
      type: String,
      default: 'add'
    }
  },
  data: () => ({
    valid: true,
    edit: false,
    name: '',
    nameRules: [
      v => !!v || 'Wallet Name is required'
    ],
    address: '',
    addressRules: [
      v => !!v || 'Wallet Address is required'
    ],
    file: null

  }),
  computed: {
    ...mapGetters({ user: 'authentication/getUser', loading: 'admin/getLoading' }),
    data () {
      return { ...this.wallet }
    }
  },
  methods: {
    ...mapActions({ walletUpdate: 'admin/walletUpdate' }),
    submit () {
      this.$refs.form.validate()
      if (this.$refs.form.validate()) {
        const type = this.type
        const oldPhoto = this.data.photoURL
        let payload
        const photo = this.edit ? this.file : oldPhoto

        if (type === 'add') {
          payload = {
            name: this.name,
            address: this.address
          }
        } else {
          payload = {
            name: this.data.name,
            address: this.data.address,
            id: this.wallet.id

          }
        }

        console.log(payload)
        this.walletUpdate({ payload, type, photo, edit: this.edit })
        if (!this.edit) {
          this.clear()
        }
      }
    },
    clear () {
      this.reset()
      this.resetValidation()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }

  }

}
</script>

<style>

</style>
