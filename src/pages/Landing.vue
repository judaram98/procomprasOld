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
import WhatWeDo from "src/modules/sections/WhatWeDo.vue";
import Hero from "src/modules/sections/HeroComponent.vue";
import AboutUs from "src/modules/sections/AboutUs.vue";
import MeetUs from "src/modules/sections/MeetUs.vue";
import QuestionsComponent from "src/modules//sections/QuestionsComponent.vue";
import ClientReviews from "src/modules/sections/ClientReviews.vue";
import ContactUs from "src/modules/sections/ContactUs.vue";
import LandingFooter from "src/modules/sections/LandingFooter.vue";

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
