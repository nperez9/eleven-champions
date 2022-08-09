import { BodyInfo } from '../../../interfaces';

export interface DetailHeaderProps {
  name?: string;
  coverImage?: string;
  bodyInfo?: BodyInfo;
  phone?: string;
  age?: number;
  description?: string;
};

export interface HeaderInfoProps {
  title?: string;
  value?: string | number;
};