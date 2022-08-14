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
          <v-btn @click="onPost" style="background-color: #C75450">
            <v-icon style="color: white">mdi-plus-circle</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <v-responsive class="align-content-center" >
      <v-container fluid class="cards">
        <v-row>
          <div class="justify-center" v-for="post in PostArray" :key="post.id"  style="display: flex; justify-content: center; align-items: center">
            <v-card class="example" max-width="800" style="background-color: #099740" v-if="post.userId===1">
                  <!--<v-list-item-avatar>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png"/>
                  </v-list-item-avatar>-->
              <v-card-title v-text="post.title" style="color: white"></v-card-title>
              <v-img :src="post.image" class="white-text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"  height="200px"
                     width="449px">
              </v-img>
              <v-card-subtitle class="pb-0 text-center" v-text="post.date" style="font: 16px bold; color: black">
              </v-card-subtitle>
              <v-card-subtitle class="pb-0 text-center" v-text="post.comment" style="font: 20px bold; color: black">
              </v-card-subtitle>

              <v-card-actions>
                <v-btn @click="onUpdate(post.id)" style="background-color: #22995C">
                  <v-icon style="color: white">mdi-file-document-edit</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="Open3(post.id)" style="background-color: #22995C;">
                  <v-icon style="color: white">mdi-delete</v-icon>
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
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Titulo" v-model="titulo" required>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field label="comentario" v-model="comentario" required>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field label="imagen" v-model="imagen" required>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>Indicar el campo requerido</small>
            </v-card-text>
            <v-btn color="#19A05E" text @click="Publicar" >Publicar</v-btn>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

    <!--CUADRO DE DIALOGO (ACTUALIZAR)-->
    <div>
      <v-row justify="center">
        <v-dialog v-model="dialog2" persistent max-width="600px">
          <v-card>
            <v-card-actions>
              <v-btn color="blue" text @click="Close2">
                <v-icon large>mdi-close-circle</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Titulo" v-model="titulo" required>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field label="comentario" v-model="comentario" required>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field label="imagen" v-model="imagen" required>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>Indicar el campo requerido</small>
            </v-card-text>
            <v-btn color="#19A05E" text @click="Actualizar" >Actualizar</v-btn>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

    <!--CUADRO DE DIALOGO (ELIMINAR)-->
    <div>
      <v-row justify="center">
        <v-dialog v-model="dialog3" persistent max-width="600px">
          <v-card>
            <v-card-actions>
              <v-btn color="blue" text @click="Close3">
                <v-icon large>mdi-close-circle</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <small>¿ESTAS SEGURO QUE DESEAS ELIMINAR ESTA PUBLICACION?</small>
            </v-card-text>
            <v-btn color="#19A05E" text @click="Borrar()" >SI</v-btn>
            <v-btn color="#19A05E" text @click="Close3" >NO</v-btn>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

  </div>
</template>

<script>
import PostService from "@/services/PostService";
export default {
  name: "myPost",
  data: ()=>({
    PostArray:[],
    dialog:false,
    dialog2:false,
    dialog3:false,
    titulo:"",
    comentario:"",
    imagen:"",
    id_post:""

  }),
  methods:{
    retrievePost(){
      PostService.getAllPosts().then((res)=>{
        this.PostArray=res.data;
      })
          .catch((e)=>{
            console.log(e);
          })
    },Publicar(){
      PostService.newPost({userId:1,title:this.titulo,comment:this.comentario,date:"11-01-2022",image:this.imagen})
          .then((res)=>{
                console.log(res);
                this.retrievePost();
              }
          );
      alert("PUBLICACION EXITOSA !");
    },
    Actualizar(){
      PostService.putPost(this.id_post,{userId:1,title:this.titulo,comment:this.comentario,date:"11-01-2022",image:this.imagen})
          .then((res)=>{
                console.log(res);
                this.retrievePost();
              }
          );
      alert("ACTUALIZACION EXITOSA !");
    },
    onPost(){
      this.dialog=true;
    },
    getPostData(){
      this.array_publications=PostService.getfilter();
    },
    Close()
    {
      this.dialog = false;
    },
    Close2()
    {
      this.dialog2 = false;
    },
    Close3()
    {
      this.dialog3 = false;
    },
    Open3(id)
    {
      this.id_post=id;
      this.dialog3 = true;
    },
    onUpdate(id)
    {
      this.dialog2 = true;
      this.id_post = id;
      alert(id);
    },
    DeletePosts(id){
      console.log(id);
      PostService.DeletePost(id).then((res)=>{
        console.log(res);
        this.retrievePost();
      });
      alert("publication deleted");
    },
    Borrar()
    {
      this.DeletePosts(this.id_post);
      this.dialog3 = false;
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