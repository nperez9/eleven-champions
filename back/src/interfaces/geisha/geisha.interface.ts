import { BodyInfo } from './body.interface';
import { Worktime } from './work-time.interface';
import { Site, Country, Price, Image } from '../core';

export interface GeishaList {
  id: number | string;
  name: string;
  age: number;
  phone: string | number;
  place: string;
  coverImg: string;
  isAvailable?: boolean;
}

export type ServiceType = 'escort' | 'massage' | 'virtual';

export interface Geisha {
  id: number | string;
  name: string;
  age: number;
  phone: string;
  site: Site;
  coverImage: string;
  photos: Array<string>;
  nactionality: Country;
  price: Price;
  description?: string;
  bodyInfo?: BodyInfo;
  services?: Array<string>;
  workTime?: Worktime;
  serviceType?: ServiceType;
}