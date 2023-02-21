<template>
  <v-card flat color="transparent" class="px-0">
    <v-card-text class="d-flex align-center justify-space-between pr-0">
      <v-avatar
        :size="$vuetify.breakpoint.xsOnly ? 100 : 130"
        style="border: 3px solid #1a71f5"
        color="secondary"
        class="mr-4"
      >
        <v-img :src="data && data.image"></v-img>
      </v-avatar>
      <div>
        <v-icon size="70" color="secondary"> mdi-format-quote-open </v-icon>
        <div
          class="
            text1--text
            text--lighten-1
            font-weight-light
            text-subtitle-2 text-sm-subtitle-1
          "
        >
          {{ data && data.description }}
        </div>
        <div
          class="
            text-subtitle-1 text-sm-h6
            primary--text
            font-weight-medium
            my-1
          "
        >
          {{ data && data.name }}
        </div>
        <div class="text-subtitle-2 text-sm-subtitle-1 secondary--text">
          {{ data && data.occupation }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        iamge: "",
        description: "",
        name: "",
        occupation: "",
      }),
    },
  },
};
</script>

<style>
</style>