<template>
  <q-page class="flex column">
    <Hero />
    <WhatWeDo />
    <AboutUs />
    <MeetUs />
    <QuestionsComponent />
    <ClientReviews />
    <ContactUs />
    <LandingFooter />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import WhatWeDo from "src/sections/WhatWeDo.vue";
import Hero from "src/sections/HeroComponent.vue";
import AboutUs from "src/sections/AboutUs.vue";
import MeetUs from "src/sections/MeetUs.vue";
import QuestionsComponent from "src/sections/QuestionsComponent.vue";
import ClientReviews from "src/sections/ClientReviews.vue";
import ContactUs from "src/sections/ContactUs.vue";
import LandingFooter from "src/sections/LandingFooter.vue";

export default defineComponent({
  name: "Landing-page",
  components: {
    WhatWeDo,
    Hero,
    AboutUs,
    MeetUs,
    QuestionsComponent,
    ClientReviews,
    ContactUs,
    LandingFooter,
  },
});
</script>
