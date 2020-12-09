export type ApplicationPeriod = {
  id: number;
  name: string;
  reservationUnits: number[];
  applicationPeriodBegin: string;
  applicationPeriodEnd: string;
  reservationPeriodBegin: string;
  reservationPeriodEnd: string;
  purposes: number[];
};

export type Space = {
  id: number;
  locationType: 'fixed';
  name: string;
  parent: number;
  building: number;
  surfaceArea: null;
};

export type Resource = {
  id: number;
  name: string;
  locationType: 'fixed';
  space: number;
  bufferTimeBefore: string;
  bufferTimeAfter: string;
};

export type Service = {
  id: number;
  name: string;
  serviceType: 'introduction';
  bufferTimeBefore: string;
  bufferTimeAfter: string;
};

export type ReservationUnit = {
  id: number;
  name: string;
  spaces: Space[];
  resources: Resource[];
  services: Service[];
  requireINtroduction: boolean;
};