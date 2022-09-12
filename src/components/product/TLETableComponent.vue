<template>
  <v-data-table :headers="headers" :items="tle" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script lang="ts">
import Vue from "vue";

import { NasaService } from "@/services/Nasa.service";
import Component from "vue-class-component";
import { IMember } from "@/models/TLEModel.interface";

@Component
export default class TLETable extends Vue {
  headers = [
    {
      text: "TLE Name",
      align: "start",
      sortable: false,
      value: "name",
    },
    { text: "Date", value: "date" },
    { text: "Line1", value: "line1" },
    { text: "Line2", value: "line2" },
  ];
  private tleService = new NasaService();
  tle = [] as IMember[];

  getTleList() {
    this.tleService.getTleList().then((response) => {
      this.tle = response.member;
    });
  }
  mounted() {
    this.getTleList();
  }
}
</script>
