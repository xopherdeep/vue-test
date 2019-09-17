<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>
          Vue App
        </span>
        <span class="font-weight-light">
          List of Objects
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-textarea
        class="mx-5 mt-5"
        label="Search Users"
        rows="1"
        autoGrow
        clearable
        prepend-icon="mdi-magnify"
        v-model="nameFilter"
      ></v-textarea>
      <v-btn-toggle v-model="sortAsc">
        <v-btn>
          <v-icon>
            mdi-sort-ascending
          </v-icon>
        </v-btn>
        <v-btn>
          <v-icon>
            mdi-sort-descending
          </v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-select
        v-model="eyeColorFilter"
        :items="eyeColors"
        clearable
        class="mx-5 mt-5"
        prepend-icon="mdi-eye"
        label="Eye Color"
      ></v-select>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script src="./App.js">
