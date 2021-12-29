import axios from "axios";

const callBackendApi = async (method, path, data) => {
  const response = await axios({
    method: method,
    url: 'http://localhost:8080' + path,
    data: data
  });

  return response;
}

export default callBackendApi;