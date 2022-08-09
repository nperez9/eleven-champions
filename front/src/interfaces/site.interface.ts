export interface Site {
  id: number | string;
  name: string;
  description?: string;
  city?: City;
  country?: Country;
}

export interface City {
  id: string;
  cityName: string;
}

export interface Country {
  id: string;
  code: CountryCode;
  countryName: string;
  description?: string;
  nationality?: string;
}

export type CountryCode ='ARG' | 'COL' | 'BRA';
  
