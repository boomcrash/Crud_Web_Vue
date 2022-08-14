import http from "./http-common"

class PostService{
    newPost(data){
        return http.post("/publicaciones",data)
    }
    getAllPosts(){
        return http.get("/publicaciones")
    }
    getUserPost(id){
        return http.get(`/publicaciones?userId=${id}`);
    }
    getPostById(id){
        return http.get(`/publicaciones/${id}`);
    }
    putPost(id,data){
        return http.put(`/publicaciones/${id}`,data);
    }
    DeletePost(id)
    {
        return http.delete(`/publicaciones/${id}`);
    }
    filterPost(title){
        if(title!==undefined){
            return http.get(`/publicaciones?title=${title}`);
        }
    }
    getfilter() {
        return this.datafilter;
    }
    setfilter(data) {
        this.datafilter = data;
        //change
    }
}
export  default  new PostService();