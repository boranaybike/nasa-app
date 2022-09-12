<template>
  <div class="detail">
    <ApodCard />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ApodCard from "../components/product/ApodCardComponent.vue";

@Component({
  name: "ApodDetail",
  components: { ApodCard },
})
export default class ApodDetail extends Vue {}
</script>

<style scoped lang="scss">
.detail {
  padding: 5vh 20vw 10vh;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
}
</style>
