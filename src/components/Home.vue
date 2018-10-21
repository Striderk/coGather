/* eslint-disable */
<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetups/new" class="info">Organize Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                    v-for="(meetup,i) in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    @click="onLoadMeetup(meetup.id)"
                    >
                    <div class = "title">
                        {{ meetup.title }}
                    </div>
                    </v-carousel-item>
                    <div></div>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome Interest Group!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
    computed:{
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
      methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/'+ id)
      }
      }
    }
</script>

<style scoped>
    .title {
        text-align: center;
        bottom: 50px;
        background-color: rgba(0,0,0,0.5);
        color: white;
        font-size: 2em;
        padding: 20px;
    }
</style>
