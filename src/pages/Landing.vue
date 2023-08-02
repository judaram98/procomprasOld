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
import WhatWeDo from "components/WhatWeDo.vue";
import Hero from "components/HeroComponent.vue";
import AboutUs from "components/AboutUs.vue";
import MeetUs from "components/MeetUs.vue";
import QuestionsComponent from "components/QuestionsComponent.vue";
import ClientReviews from "components/ClientReviews.vue";
import ContactUs from "components/ContactUs.vue";
import LandingFooter from "components/LandingFooter.vue";

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
