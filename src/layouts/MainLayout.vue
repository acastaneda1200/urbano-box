<template>
  <q-layout view="hHh Lpr lff">
    <q-header
      v-if="!isAuthRoute"
      class="bg-purple text-white flex"
      style="height: 100px"
    >
      <q-toolbar>
        <q-btn flat class="lt-md" round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title class="q-ml-md flex items-center">
          <router-link to="/">
            <img src="~assets/logos/urbano_logo_white.svg" />
          </router-link>
        </q-toolbar-title>
        <q-btn to="/login" rounded color="white" class="flex-end text-black">
          Login
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      side="left"
      overlay
      behavior="mobile"
      class="bg-grey-9"
      elevated
    >
      <q-list dark>
        <q-item-label header>Essential Links</q-item-label>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>https://quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://github.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>GitHub</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="http://chat.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>https://chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://forum.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>https://forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://twitter.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://facebook.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page
        class="bg-image"
        :style="{
          backgroundImage: 'url(' + backgroundImage + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <router-view />
      </q-page>
    </q-page-container>

    <q-footer v-if="loggedIn" class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "stores/auth";
import { useUtilityStore } from "stores/utility";
import { storeToRefs } from "pinia";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const route = useRoute();
    const drawer = ref(false);
    const auth = useAuthStore();
    const utility = useUtilityStore();
    const { loggedIn } = storeToRefs(auth);
    const { backgroundImage } = storeToRefs(utility);
    const isAuthRoute = computed(() => {
      const currentPath = route.path;
      return (
        !currentPath.includes("order/register") &&
        (currentPath.includes("change-password") ||
          currentPath.includes("login") ||
          currentPath.includes("register"))
      );
    });

    return {
      drawer,
      loggedIn,
      backgroundImage,
      isAuthRoute,
    };
  },
});
</script>
<style lang="scss" scoped>
.bg-image {
  background-size: cover;
  background-position: center center;
}
</style>
