<template>
  <v-app-bar app color="transparent" dark>
    <div class="d-flex align-center">
      <router-link class="router-link" to="/">
        <v-img alt="Nasa Name" contain min-width="10" src="@/assets/NASA_Worm_logo.svg.png" width="80"
      /></router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn class="nasa-btn" href="https://nasa.gov" target="_blank" text>
      <span class="transparent mr-2">Nasa Web Site</span>
      <v-icon class="transparent">mdi-open-in-new</v-icon>
    </v-btn>

    <div class="menu-select ml-3">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list class="responsiveMenu">
          <v-list-item>
            <v-list-item-title><router-link class="router-link" to="/apod-detail">APOD</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link class="router-link" to="/tle-detail">TLE</router-link></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Header",
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.menu-select {
  display: flex;
}
.router-link {
  color: #0b3d91;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #dc3329;
  }
}
</style>
