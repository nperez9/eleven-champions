import axios from 'axios';

const baseLoginAPIURL = '/api/auth';


export class AuthService {
  static async login(email: string, password: string) {
    try {
      const { data } = await axios.post(`${baseLoginAPIURL}/login`, { email, password });
      console.info(data);
      return data;
    } catch (e) {
      console.error(e);
      throw new Error('Failed to login');
    }
  }
}