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
          <v-card-media
            :src = "meetup.imageUrl"
            height ="400px">
          </v-card-media>
          <v-card-title>
            <h3 class="headline mb-0">{{ meetup.title }}</h3>
            <template v-if = "true">
              <v-spacer></v-spacer>
              <app-edit-meetup-dialog :meetup="meetup"></app-edit-meetup-dialog>
            </template>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs8>
                <div>Details    :  {{meetup.description}}</div>
                <div> Time    :   {{ meetup.date }} </div>
                <div><app-edit-date-dialog :meetup="meetup" ></app-edit-date-dialog></div>
                <div> Location    :    {{ meetup.location }} </div>
                <div>Organiser    :    {{meetup.organiser}}</div>
                <div>Proficiency Requirements    :    {{meetup.proficiency}}</div>
                <div class="d-flex">Ratings    :    <span><v-rating v-model="rating" background-color="orange lighten-3"
                                                             color="orange" size="16" dense readonly></v-rating></span>
                </div>
                <div> Partipants    :
                  <v-avatar
                    slot="activator"
                    size="25px"
                  >
                    <img
                      src="@/assets/sadudu.jpeg"
                      alt="Avatar"
                    >
                  </v-avatar>
                  <v-avatar
                    slot="activator"
                    size="25px"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      alt="Avatar"
                    >
                  </v-avatar>
                  <v-avatar
                    slot="activator"
                    size="25px"
                  >
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="Avatar"
                    >
                  </v-avatar>
                  and {{ meetup.participants }} others</div>
              </v-flex>
              <v-flex xs4 text-xs-right>
                <v-menu offset-y>
                  <v-btn slot="activator" icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-title>Share on Facebook</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-title>Share on Instagram</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>

                <app-meetup-register-dialog
                  :meetupId="meetup.id"></app-meetup-register-dialog>
              </v-flex>
            </v-layout>
          </v-card-text>
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
    },
    data: () => ({
      rating: 4
    })
  }
</script>
