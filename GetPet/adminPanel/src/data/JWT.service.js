import axios from "axios";
import { mode } from "../data/server.service";
import TokenAPI from "./api/Token";
import Users from "./api/Users";

export default class JWTService {
  constructor() {
    this.token = new TokenAPI();
    this.user = new Users();
  }

  async getToken(user) {
    let errorMessage = '';

    const [token, permissions, loggedUser] = await axios.all([
      this.token.getToken({ user: user }),
      this.user.getPermissions({ user: user }),
      this.user.getUser({ user: user }),
    ]).catch((error) => errorMessage = error);

    if (errorMessage !== '') return errorMessage

    console.log(loggedUser)
    sessionStorage.setItem("permissions", permissions.data);
    sessionStorage.setItem("acessToken", token.data.access_token);
    sessionStorage.setItem("refreshToken", token.data.refresh_token);
    sessionStorage.setItem("user", loggedUser.data[0].name);
    return {'acessToken': token.data.access_token, 'refreshToken': token.data.refresh_token}
  }
  
  async refreshToken(user, refreshToken) {
    let errorMessage = '';
    
    if (!user || !refreshToken) return null
    
    const token = await this.token.refreshToken(refreshToken, user).catch((error) => errorMessage = error);
    
    if (errorMessage !== '') return errorMessage
    
    sessionStorage.setItem("acessToken", token.data.access_token);
    return {'acessToken': token.data.access_token, 'refreshToken': refreshToken}
  }
}
