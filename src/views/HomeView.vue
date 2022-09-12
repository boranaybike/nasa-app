<template>
  <div class="cards">
    <v-row no-gutters>
      <v-col v-for="card in Card">
        <div class="card">
          <CardComponent
            :path="card.path"
            :description="card.description"
            :title="card.title"
            :subtitle="card.subtitle"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CardComponent from "../components/shared/Card.component.vue";
import Component from "vue-class-component";
import { ICard } from "@/models/CardModel.interface";

@Component({
  components: {
    CardComponent,
  },
})
export default class Home extends Vue {
  value = "";
  Card: ICard[] = [
    {
      path: "apod-detail",
      description:
        "One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.",
      subtitle: "Astronomy Picture of the Day",
      title: "APOD",
    },
    {
      path: "tle-detail",
      description:
        " A two-line element set (TLE) is a data format encoding a list of orbital elements of an Earth-orbiting object for a given point in time. ",
      subtitle: "A two-line element set",
      title: "TLE",
    },
  ];
}
</script>

<style scoped lang="scss">
.cards {
  padding: 20vh 20vw;
  display: space-between;
}
.card {
  text-align: -webkit-center;
}
</style>
