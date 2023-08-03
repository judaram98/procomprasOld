<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-white text1" height-hint="98">
      <q-toolbar class="flex justify-between">
        <!-- Logo -->
        <img src="" />

        <!-- Navbar -->
        <q-tabs>
          <q-route-tab no-caps to="/" label="Inicio" class="text-darkGray" />
          <q-route-tab no-caps to="/" label="Nosotros" class="text-darkGray" />
          <q-route-tab no-caps to="/" label="Equipo" class="text-darkGray" />
          <q-route-tab no-caps to="/" label="Preguntas" class="text-darkGray" />
          <q-route-tab no-caps to="/" label="Reseñas" class="text-darkGray" />
          <q-route-tab
            no-caps
            to="/"
            label="Contáctanos"
            class="text-darkGray"
          />
          <StyledButton title="Ingresar" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import StyledButton from "components/StyledButton.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    StyledButton,
  },
});
</script>
