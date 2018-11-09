<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm10 md8 offset-md2>
        <v-card >
          <v-container fluid
                       grid-list-lg
          >
             <v-flex >
               <v-card color="cyan darken-2" class="info" v-for="(meetup,i) in meetups" :key="meetup.id">
                 <v-layout>
                   <v-flex xs5>
                     <v-img
                       :src="meetup.imageUrl"
                       height = "150px"
                       ></v-img>
                   </v-flex>
                   <v-flex xs7>
                     <v-card-title primary-title>
                       <div>
                         <h3 class="white--text mb-0">{{ meetup.title }}</h3>
                         <h5 class="white--text mb-0">{{ meetup.date.toString() }}</h5>
                       </div>
                     </v-card-title>
                     <v-card-actions>
                       <v-btn flat :to=" '/meetups/' + meetup.id" class="white--text" color="blue lighten-3">
                         <v-icon left light class="white--text">arrow_forward</v-icon>
                         View Gather Detail
                       </v-btn>
                     </v-card-actions>
                   </v-flex>
                 </v-layout>
               </v-card>
            </v-flex>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed:{
      meetups () {
        return this.$store.getters.loadedMeetups
      },
    }
  }
</script>
