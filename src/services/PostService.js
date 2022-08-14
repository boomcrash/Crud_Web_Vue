import http from "./http-common"

class PostService{
    newPost(data){
        return http.post("/publicaciones",data)
    }
    getAllPosts(){
        return http.get("/publicaciones")
    }
    getUserPost(id){
        return http.get("/publicaciones")
    }
}
export  default  new PostService();