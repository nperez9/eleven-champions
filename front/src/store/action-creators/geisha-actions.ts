import { GeishaService } from '../../services/GeishaService';

export const getGeishaList = (filters: any) => {
  return async (dispatch: any) => {
    const geishas = await GeishaService.getList();
    console.info(geishas)
  }
}