<template>
  <div>
    <!--<div>
      <v-card>
        <filter-component/>
        <v-card-actions class="justify-center">
          <v-btn @click="getPublicationData">FILTRO</v-btn>
        </v-card-actions>
      </v-card>
    </div>-->
    <div>
    <v-card>
      <filter-component/>
      <v-card-actions class="justify-center">
        <v-btn @click="getPostData">Filtrar</v-btn>
      </v-card-actions>
    </v-card>
    </div>
    <v-responsive class="align-content-center" >
      <v-container fluid class="cards">
        <v-row>
          <div class="justify-center" v-for="post in PostArray" :key="post.id"  style="display: flex; justify-content: center; align-items: center">
            <v-card class="justify-center" max-width="800" style="background-color: #099740">
              <v-list style="background-color: #000000">
                <v-list-item >
                  <v-list-item-avatar>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png"/>
                  </v-list-item-avatar>
                  <v-card-title v-text="post.title" style="color: white"></v-card-title>
                </v-list-item>
              </v-list>
              <v-img :src="post.image" class="white-text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"  height="200px"
                     width="449px">
              </v-img>
              <v-card-subtitle class="pb-0 text-center" v-text="post.date" style="font: 16px bold; color: black">
              </v-card-subtitle>
              <v-card-subtitle class="pb-0 text-center" v-text="post.comment" style="font: 20px bold; color: black">
              </v-card-subtitle>

              <v-card-actions>
                <v-btn @click="AnteReservar(post.userId,post.id)" style="background-color: #22995C">
                  <v-icon style="color: white">mdi-clipboard-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-row>
      </v-container>
    </v-responsive>

    <!--CUADRO DE DIALOGO (PUBLICAR)-->
    <div>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-actions>
              <v-btn color="blue" text @click="Close">
                <v-icon large>mdi-close-circle</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <v-container>
                <span>
                  Para: {{this.nombre_publicador}}
                </span>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Comentario" v-model="comentario" required>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field type="number" label="Dinero" v-model="price" required>
                    </v-text-field>
                  </v-col>

                </v-row>
              </v-container>
              <small>Indicar el campo requerido</small>
            </v-card-text>
            <v-btn color="#19A05E" text @click="Reservar" >RESERVAR</v-btn>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

  </div>

</template>

<script>
import PostService from "@/services/PostService";
import UserService from "../../services/UserService";
import ReservationService from "../../services/ReservationService";
export default {
  name: "Post",
  data: ()=>({
    PostArray:[],
    dialog:false,
    titulo:"",
    comentario:"",
    price:"",
    imagen:"",
    post_id:"",
    user_id:"",
    nombre_publicador:"",
  }),
  methods:{
    retrievePost(){
      PostService.getAllPosts().then((res)=>{
         this.PostArray=res.data;
      })
      .catch((e)=>{
        console.log(e);
      })
    },
     AnteReservar(user,post){
      this.user_id=user;
      this.post_id=post;
      UserService.ObtenerPorId(this.user_id).then((res)=>{
        this.nombre_publicador=res.data.name+" "+res.data.lastName;
       })
       this.dialog=true;
     },
    Reservar(){

      let mensaje=this.comentario;
      let precio=Number(this.price);
      let fecha="12-01-2022";
      let aproved=false;
      let postid=this.post_id;
      let userpost=this.user;
      let current=1;
      if(mensaje!==""&&precio!==0){
        ReservationService.postReserva({
          fecha,
          precio,
          aproved,
          message:mensaje,
          publication_id:postid,
          user_id_at:userpost,
          user_id_from:current
        }).then(
            this.retrievePost,
            this.dialog=false
        )
        alert("publicacion exitosa")
      }

    },
    Close(){
      this.dialog=false;
    }
  },
  mounted() {
    this.retrievePost();
  }
}
</script>

<style scoped>
.cards {
  text-align: center;
}
</style>