import axios from 'axios';
import { GeishaItem, Geisha } from '../interfaces';
import { collection, getDocs, Firestore } from 'firebase/firestore/lite';

const baseAPIURL = '/api/geisha';


export class GeishaService {
  static async getList(filter: any = {}): Promise<Array<GeishaItem>> {
    try {
      const { data } = (await axios.get<Array<GeishaItem>>(baseAPIURL));
      return data;
    } catch (e) {
      // TODO: add error Handler
      console.error(e);
      return [];
    }
  }

  static async getGeishaById(id: string): Promise<Geisha | void> {
    try {
      const { data } = (await axios.get<Geisha>(`${baseAPIURL}/${id}`));
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Geisha get error");
    }
  }

  static async getGeishaList(db: Firestore) {
    try {
      const citiesCol = collection(db, 'geisha');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      return cityList;
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}