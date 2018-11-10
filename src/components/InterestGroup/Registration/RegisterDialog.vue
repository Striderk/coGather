
<template>
  <v-dialog persistent v-model="registerDialog" max-width="400">
    <v-btn color="primary" slot="activator">
      {{ userIsRegistered ? 'Unregister' : 'Register' }}
    </v-btn>
    <v-card>
      <v-card-title class="headline" v-if="userIsRegistered">Unregister from Meetup?</v-card-title>
      <v-card-title class="headline" v-else>Register for Meetup?</v-card-title>
      <v-card-text>You can change your mind until 2 days before the Meetup.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="red--text darken-1"
          flat
          @click="registerDialog = false">Cancel</v-btn>
        <v-btn
          class="green--text darken-1"
          flat
          @click="onAgree">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['meetupId'],
    data(){
      return{
        registerDialog: false
      }
    },
    computed: {
      userIsRegistered () {
        return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
          return meetupId === this.meetupId
        }) >= 0
      }
    },
    methods: {
      onAgree() {
        if (this.userIsRegistered){
          this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
        } else {
          this.$store.dispatch('registerUserForMeetup', this.meetupId)
        }
      }
    }
  }
</script>

<style scoped>

</style>
