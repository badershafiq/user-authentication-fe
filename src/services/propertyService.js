import axios from "axios";

class PropertyService {
  getProperties() {
    return axios.get("https://php-react-test-api.herokuapp.com/api/properties");
  }
}

export default new PropertyService();
