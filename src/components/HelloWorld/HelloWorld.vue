<template>
  <v-container>
    <v-layout
      justify-center
      align-center
      full-height
      text-center
      wrap
    >
      <v-flex xs12 mb5
        v-for="(user, key) in users"
        class="mb-5"
        :key="key"
      >
        <v-card
          @click="viewUser(user._id)"
            class="mx-auto"
            max-width="400"
            tile
          >

          <v-list-item two-line>
            <v-layout justify-center align-center>
              <v-flex xs2>
                <v-avatar>
                  <v-img :src="user.picture" />
                </v-avatar>
              </v-flex>
              <v-flex grow>
                <v-list-item-content>
                  <v-list-item-title>
                    {{user.name}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-flex>
              <v-flex shrink>
                <v-icon :color="user.eyeColor">
                  mdi-eye
                </v-icon>
              </v-flex>
            </v-layout>
          </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-if="user" persistent v-model="dialog" max-width="700">
      <v-card
      >
        <v-card-title class="headline">
          <v-avatar>
            <v-img :src="user.picture" />
          </v-avatar>
          &nbsp;
          {{user.name}}
          &nbsp;
          <v-icon :color="user.eyeColor">
            mdi-eye
          </v-icon>
        </v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs4>
              <v-layout wrap>
                <v-flex xs12>
                  <v-icon>
                    mdi-domain
                  </v-icon>
                  {{user.company}}
                </v-flex>
                <v-flex xs12>
                  <v-icon>
                    mdi-bank
                  </v-icon>
                  {{user.balance}}
                </v-flex>
                <v-flex xs12>
                  <v-icon>
                    mdi-phone
                  </v-icon>
                  {{user.phone}}
                </v-flex>
                <v-flex xs12>
                  <v-icon>
                    mdi-human-{{user.gender}}
                  </v-icon>
                  {{user.gender}}
                </v-flex>
                <v-flex xs12>
                  <v-icon>
                    mdi-email
                  </v-icon>
                  {{user.email}}
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs8>
              {{user.greeting}}
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="mx-3">
          <v-btn color="primary" @click="saveUser">Ok</v-btn>
          <div class="flex-grow-1"></div>
          <v-switch v-model="user.isActive" label="Active" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script src="./HelloWorld.js">
