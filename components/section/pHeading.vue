<template>
  <div class="d-flex flex-column align-center">
    <div class="text-subtitle-1 my-4 text-center">
      <div
        style="letter-spacing: 5px"
        class="
          text1--text
          text--lighten-3
          font-weight-medium
          mb-2
          text-capitalize
        "
      >
        <slot name="sub" />
      </div>
      <div class="text-uppercase text3--text text-h6 text-sm-h4">
        <slot name="title" />
      </div>
    </div>
    <v-divider
      style="width: 50px; padding: 1px"
      class="secondary mb-6 mt-2"
    ></v-divider>
    <div
      class="
        tex1--text
        text--lighten-2
        font-weight-light
        text-subtitle-2 text-sm-subtitle-1 text-center
      "
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

</template>

<script>
export default {};
</script>

<style>
</style>