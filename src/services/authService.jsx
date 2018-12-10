export class AuthService {
    Login(username, password) {
        console.log("Usuário recebido pelo serviço", username, password);
        return true;
    }
}
export default AuthService;