import http from "./http-common"
class BookingService{
    postReserva(data){
        return http.post("/reserva",data);
    }
    ObtenerTodas(){
        return http.get("/reserva/");
    }
    ObtenerUsuario(id){
        return http.get(`/reserva?user_id_from=${id}`);
    }
    ObtenerId(id){
        return http.get(`/reserva/${id}`);
    }
    Agregar(id,data){
        return http.patch(`/reserva/${id}`,data);
    }
    Borrar(id)
    {
        return http.delete(`/reserva/${id}`);
    }
}
export default new BookingService();
