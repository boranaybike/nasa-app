<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./FooterComponent.vue";
import Header from "./HeaderComponent.vue";
import Component from "vue-class-component";

@Component({
  name: "Layout",
  components: { Footer, Header },
})
export default class Layout extends Vue {}
</script>
