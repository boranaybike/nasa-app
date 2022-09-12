<template>
  <v-card class="mx-auto" max-width="800">
    <v-img class="white--text align-end" height="400px" :src="`${apod.hdurl}`">
      <v-card-title>{{ apod.title }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div class="context">{{ apod.explanation }}</div>
    </v-card-text>

    <v-card-actions>
      <div style="color: #dc3329">{{ apod.date }}</div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

import { NasaService } from "@/services/Nasa.service";
import { IApod } from "@/models/ApodModel.interface";
import Component from "vue-class-component";

@Component
export default class ApodCard extends Vue {
  private apodService = new NasaService();
  apod = {} as IApod;

  getApodDetail() {
    this.apodService.getApod().then((response) => {
      this.apod = response;
    });
  }
  mounted() {
    this.getApodDetail();
  }
}
</script>

<style scoped>
.mx-auto {
  background-color: #1e1e1e;
}
.context {
  color: whitesmoke;
  font-size: 14px;
  padding: 20px 50px;
}
</style>
