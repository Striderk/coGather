<template>
  <v-container grid-list-xl>
    <v-layout row wrap text-xs-center mt-4>
      <v-flex xs5>
        <v-avatar
          slot="activator"
          size="150px"
        >
          <img
            src="@/assets/sadudu.jpeg"
            alt="Avatar"
          >
        </v-avatar>
      </v-flex>
      <v-flex xs7 text-xs-left>
        <div class="display-1">Savanna Du</div>
        <div class="grey--text mt-2">
          <v-icon small>email</v-icon>
          <span class="ml-1">sadudu.gmail.com</span>
        </div>
        <div class="grey--text">
          <v-icon small>phone</v-icon>
          <span class="ml-1">+65 91234567</span>
        </div>
        <div class="mt-4">
          <span class="subheading"><b>292</b> followers</span>
          <span class="subheading ml-4"><b>178</b> following</span>
        </div>
      </v-flex>

      <v-flex xs12>
        <v-tabs fixed-tabs color="rgba(255,255,255,0)">
          <v-tab>Interests</v-tab>
          <v-tab>Past Gatherings</v-tab>
        </v-tabs>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card>
          <v-img
            src="https://img.grouponcdn.com/deal/2GEFue6xKcgK6sW7gc6sxrAFHDD1/2G-2048x1229/v1/c700x420.jpg"
            aspect-ratio="1.8"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Latin Dance</h3>
              <div class="grey--text">Category: Dance</div>
              <div class="grey--text">Proficiency: Intermediate</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card>
          <v-img
            src="https://welltempered.files.wordpress.com/2018/06/willy-street-chamber-players-2018.jpg"
            aspect-ratio="1.8"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Violin</h3>
              <div class="grey--text">Category: Music</div>
              <div class="grey--text">Proficiency: Expert</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">View Level 8 Cert</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card>
          <v-img
            src="https://cdn1.medicalnewstoday.com/content/images/articles/318/318774/a-woman-practicing-yoga-on-the-beach.jpg"
            aspect-ratio="1.8"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Yoga</h3>
              <div class="grey--text">Category: Sports</div>
              <div class="grey--text">Proficiency: Starter</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card>
          <v-img
            src="https://media.istockphoto.com/photos/group-of-amateur-athletes-training-together-outdoors-in-city-sun-picture-id902851028?k=6&m=902851028&s=612x612&w=0&h=2YZWRQT9khUCCKTXs5AKCVhfSBQL7MipxF-RBAryt4A="
            aspect-ratio="1.8"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Jogging</h3>
              <div class="grey--text">Category: Sports</div>
              <div class="grey--text">Proficiency: Intermediate</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
