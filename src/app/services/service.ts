import { BASE_URL } from '@constant/constant';
import axios from 'axios';

class Service {
  instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2500,
  });

  request(method: string, endpoint: string, data: any) {
    this.instance
      .request({ method, data, url: endpoint, headers: {} })
      .then((response) => response)
      .catch((error) => error);
  }

  get(endpoint: string, data: any) {
    return this.request('GET', endpoint, data);
  }

  put(endpoint: string, data: any) {
    return this.request('PUT', endpoint, data);
  }

  post(endpoint: string, data: any) {
    return this.request('POST', endpoint, data);
  }

  delete(endpoint: string, data: any) {
    return this.request('DELETE', endpoint, data);
  }
}

export default new Service();
