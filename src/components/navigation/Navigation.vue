<template>
<div>
  <v-list-item class="px-2 mb-4" style="background-color:black">
    <v-list-item-title style="font: 20px bold; color: white" >Fecha Perfecta
    </v-list-item-title>
  </v-list-item>

  <v-list dense>
    <v-list-item @click="verPerfil" style="font: 20px bold; color: white; background-color: black">
      <v-list-item-icon>
        <v-icon style="color: white">mdi-account</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          PERFIL
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>

  <v-list dense>
    <v-list-item @click="miPost" style="font: 20px bold; color: white; background-color: black">
      <v-list-item-icon>
        <v-icon style="color: white">mdi-folder-multiple-image</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          MIS POSTS
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>

  <v-list dense>
    <v-list-item @click="TodosPost" style="font: 20px bold; color: white; background-color: black">
      <v-list-item-icon>
        <v-icon style="color: white">mdi-folder-multiple</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          TODOS LOS POSTS
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</div>
</template>

<script>
export default {
    name: "Navigation",
    data(){
    },
    methods:{
      verPerfil(){

      },
      miPost(){
        this.$router.push("/mypost");
      },
      TodosPost(){
        this.$router.push("/posts");
      }
    }
}
</script>

<style scoped>

</style>