<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <LayoutComponent />
  </v-app>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";
import LayoutComponent from "@/components/layout/LayoutComponent.vue";
@Component({
  name: "App",
  components: {
    LayoutComponent,
  },
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
div[data-app="true"] {
  background: url("@/assets/M13_final2_sinfirma.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>
