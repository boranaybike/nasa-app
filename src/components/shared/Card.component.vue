<template>
  <router-link :to="`/${path}`" style="text-decoration: none">
    <v-card class="card" dark>
      <v-card-title>
        <span class="title">{{ title }}</span>
      </v-card-title>

      <v-card-text class="context">{{ description }} </v-card-text>

      <v-card-actions>
        <v-list-item-content>
          <v-list-item-title style="font-family: 'Lucida Handwriting'; font-size: 14px; color: #dc3329"
            >"{{ subtitle }}"</v-list-item-title
          >
        </v-list-item-content>
      </v-card-actions>
    </v-card></router-link
  >
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop(String) path;
  @Prop(String) title;
  @Prop(String) subtitle;
  @Prop(String) description;
}
</script>

<style scoped>
.v-card {
  border-radius: 25px 5px;
  font-size: 14px;
  width: 400px;
  height: 230px;
}
</style>
