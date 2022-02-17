import axios from "axios";

class AuthService {
  register(data) {
    return axios.post(
      "https://php-react-test-api.herokuapp.com/api/register",
      data
    );
  }

  login(data) {
    return axios.post(
      "https://php-react-test-api.herokuapp.com/api/login",
      data
    );
  }
}

export default new AuthService();
