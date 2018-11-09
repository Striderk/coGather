<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">{{ meetup.title }}</h3>
            <template v-if = "true">
              <v-spacer></v-spacer>
              <app-edit-meetup-dialog :meetup="meetup"></app-edit-meetup-dialog>
            </template>
          </v-card-title>
          <v-card-media
            :src = "meetup.imageUrl"
            height ="400px">
          </v-card-media>
          <v-card-text>
            <div class="info--text"> Time: {{ meetup.date }} </div>
            <div><app-edit-date-dialog :meetup="meetup" ></app-edit-date-dialog></div>
            <div class="info--text"> Location: {{ meetup.location }} </div>
            <div>Details: {{meetup.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <app-meetup-register-dialog
              :meetupId="meetup.id"></app-meetup-register-dialog>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      },
      loading() {
        return this.$store.getters.loading
      }
    }
  }
</script>
