<template>
  <div class="row">
    <div class="col-sm-12 col-lg-7">
      <q-card
        flat
        style="
          min-height: 100vh;
          background: linear-gradient(
            89.94deg,
            rgba(91, 0, 135, 0.8) 0.06%,
            rgba(92, 0, 135, 0.3) 87.08%,
            rgba(92, 0, 135, 0) 99.95%
          );
        "
      >
        <q-container>
          <q-card-section class="text-h2 text-h6-xs text-white text-center">
            ¡Bienvenid@!
          </q-card-section>
        </q-container>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useUtilityStore } from "stores/utility";
import { onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const utility = useUtilityStore();
    const { setBackgroundImage } = utility;

    onMounted(() => {
      setBackgroundImage("src/assets/backgrounds/bg-no-auth.webp");
    });

    onUnmounted(() => {
      setBackgroundImage("");
    });
  },
});
</script>

<style>
</style>