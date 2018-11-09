<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Gather</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name = "location"
                label = "Location"
                id = "location"
                v-model="editedLocation"
                required></v-text-field>
              <v-text-field
                name = "description"
                label = "Description"
                id = "description"
                v-model="editedDescription"
                multi-line
                required></v-text-field>

            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider>
        </v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat
              @click="editDialog = false">Cancel</v-btn>
              <v-btn flat
              @click="onSaveChanges">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>

</template>

<script>
  export default {
    props: ['meetup'],
    data () {
      return {
        editDialog: false,
        editedLocation: this.meetup.location,
        editedDescription: this.meetup.description
      }
    },
    methods: {
      onSaveChanges() {
        if ((this.editedDescription.trim() === '') || (this.editedLocation.trim() === '')) {
          return
        }
        this.editDialog = false
        this.$store.dispatch('updateMeetup', {
          id: this.meetup.id,
          location: this.editedLocation,
          description: this.editedDescription
        })
      }
    }
    }
</script>

<style scoped>

</style>
