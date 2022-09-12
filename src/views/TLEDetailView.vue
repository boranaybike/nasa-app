<template>
  <div class="table">
    <TLETable />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TLETable from "../components/product/TLETableComponent.vue";

@Component({
  name: "TLEDetail",
  components: { TLETable },
})
export default class TLEDetail extends Vue {}
</script>

<style scoped lang="scss">
.table {
  padding: 10vh 20vw;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
}
</style>
