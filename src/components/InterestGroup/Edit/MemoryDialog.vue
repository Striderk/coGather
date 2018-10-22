<template>
  <v-dialog width="350px" persistent>
    <v-btn fab accent slot="activator">
      <v-text-link>Memories</v-text-link>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-carousel>
              <v-carousel-item
                v-for="(meetup,i) in meetups"
                :key="meetup.id"
                :src="meetup.imageUrl"
                @click="onLoadMeetup(meetup.id)"
              >
              </v-carousel-item>
              <div></div>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>

</template>

<script>
  export default {
    computed:{
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    }

  }
</script>

<style scoped>

</style>

