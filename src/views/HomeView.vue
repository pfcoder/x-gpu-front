<template>
  <div>
    <home />
    <about />
    <download />
    <pricing />
    <contact />
  </div>
</template>

<script>
//import navigation from "../components/PageNavigation";
//import footer from "../components/PageFooter";
import home from "../components/HomeSection";
import about from "../components/AboutSection";
import download from "../components/DownloadSection";
import pricing from "../components/PricingSection";
import contact from "../components/ContactSection";
import { getToken } from "@/utils/auth";

export default {
  name: "App",

  components: {
    home,
    about,
    download,
    pricing,
    contact,
  },

  /*data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },*/

  mounted: function () {
    // read cookie to check if login
    let poemSession = getToken();
    if (poemSession) {
      console.log("poem-session:", JSON.parse(poemSession));
    } else {
      console.log("not login");
    }

    const poem = this.$cookies.get("poem-session");
    console.log("poem:", poem);
  },
};
</script>
