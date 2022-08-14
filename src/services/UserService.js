import http from "./http-common"
class  UserService{
    usuarioActual = 1;

    cambiarActual(index) {this.usuarioActual = index;}

    ObtenerActual(){
        return this.usuarioActual
    }

    ObtenerTodos(){
        return http.get('/usuarios/');
    }
    ObtenerPorId(index){
        return http.get('/usuarios/' + index);
    }
    ObtenerPorUsuario(user){
        return http.get(`/usuarios?user=${user}`);
    }
    ActualizarPorId(id,data){
        return http.patch(`/usuarios/${id}`,data)
    }
    postUsuario(data){
        return http.post(`/usuarios`, data)
    }
}
export default new UserService();