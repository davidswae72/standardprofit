<template>
  <v-carousel continuous hide-delimiters>
    <v-carousel-item
      reverse-transition="slide-x-transition"
      transition="slide-x-reverse-transition"
    >
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="7" sm="6">
          <div class="white--text d-flex align-start">
            <div
              style="width: 10px; height: 100px"
              class="secondary mr-4"
            ></div>
            <div>
              <div
                class="
                  text-uppercase text-h6 text-sm-h3
                  font-weight-black
                  overflow-x-visible
                "
              >
                The Most <span class="secondary--text">Secure Crypto</span>
                Currency
              </div>
              <div class="mt-5 ml-n4">
                <p class="text-caption text-sm-subtitle-1">
                  Crypto investment is the modern trend. Invest with our trading
                  techn ology while you make money off the screen
                </p>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <v-btn
              to="/register"
              tile
              color="secondary"
              :small="$vuetify.breakpoint.xsOnly"
              class="ma-0"
            >
              Create Account
            </v-btn>
            <v-btn
              to="/login"
              tile
              color="white"
              :small="$vuetify.breakpoint.xsOnly"
              class="ma-0 ml-n2"
            >
              Login
            </v-btn>
          </div>
        </v-col>
        <v-col
          data-aos="fade-in"
          data-aos-delay="600"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          cols="5"
          sm="6"
        >
          <v-card
            class="transparent imageBody overflow-visible"
            flat
            :max-height="$vuetify.breakpoint.xsOnly ? 300 : 500"
          >
            <v-card-text class="overflow-visible">
              <v-img
                :height="$vuetify.breakpoint.xsOnly ? 300 : 500"
                src="/bg/earth.png"
                class="rotateAni animate__animated animate__fadeInDown"
                contain
              />
              <v-img
                :height="$vuetify.breakpoint.xsOnly ? 150 : 300"
                src="/bg/bitcoin.png"
                class="imgeAbsolute"
                contain
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
    <v-carousel-item>
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="7" sm="6">
          <div class="white--text d-flex align-start">
            <div
              style="width: 10px; height: 100px"
              class="secondary mr-4"
            ></div>
            <div>
              <div
                class="
                  text-uppercase text-h6 text-sm-h3
                  font-weight-black
                  overflow-x-visible
                "
              >
                <span class="secondary--text">Bitcoin</span> Currency Easy Way
                <span class="secondary--text">To Trade</span>
              </div>
              <div class="mt-5 ml-n4">
                <p class="text-caption text-sm-subtitle-1">
                  Bitcoing investments is the new way to secure invest your
                  money online.<br class="d-none d-sm-block" />
                  We are number one in the game
                </p>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <v-btn
              to="/register"
              tile
              color="secondary"
              :small="$vuetify.breakpoint.xsOnly"
              class="ma-0"
            >
              Create Account
            </v-btn>
            <v-btn
              to="/login"
              tile
              color="white"
              :small="$vuetify.breakpoint.xsOnly"
              class="ma-0 ml-n2"
            >
              Login
            </v-btn>
          </div>
        </v-col>
        <v-col
          data-aos="fade-in"
          data-aos-delay="600"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          cols="5"
          sm="6"
        >
          <v-card
            class="transparent"
            flat
            :max-height="$vuetify.breakpoint.xsOnly ? 300 : 500"
          >
            <v-card-text>
              <v-img
                :height="$vuetify.breakpoint.xsOnly ? 300 : 400"
                src="/icon/rocket.png"
                class="
                  animate__animated
                  animate__slower
                  animate__shakeY
                  animate__infinite
                "
                contain
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {};
</script>

<style scoped>
.imageBody {
  position: relative;
}

.imgeAbsolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rotateAni {
  -webkit-animation: spin 15s linear infinite;
  -moz-animation: spin 15s linear infinite;
  animation: spin 15s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>