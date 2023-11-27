// import axios, {type AxiosInstance} from 'axios';
// import {
//   DosageApi,
//   DosageUsageApi,
//   DrugApi,
//   PatientApi,
//   PrescriptionApi,
//   ReminderApi,
//   UserApi,
// } from './api';

export * from './api';
export * from './models';

// export default class Api {
//   private axios: AxiosInstance;

//   readonly userApi: UserApi;
//   readonly drugApi: DrugApi;
//   readonly dosageApi: DosageApi;
//   readonly patientApi: PatientApi;
//   readonly reminderApi: ReminderApi;
//   readonly dosageUsageApi: DosageUsageApi;
//   readonly prescriptionApi: PrescriptionApi;

//   static instance: Api;

//   private constructor(accessToken: string) {
//     this.axios = axios.create({
//       baseURL: 'https://localhost:8000',
//       headers: {
//         Authorization: 'Token ' + accessToken,
//       },
//     });

//     this.userApi = new UserApi(this.axios);
//     this.drugApi = new DrugApi(this.axios);
//     this.dosageApi = new DosageApi(this.axios);
//     this.patientApi = new PatientApi(this.axios);
//     this.reminderApi = new ReminderApi(this.axios);
//     this.dosageUsageApi = new DosageUsageApi(this.axios);
//     this.prescriptionApi = new PrescriptionApi(this.axios);
//   }

//   static set accessToken(token: string) {
//     Api.instance = new Api(token);
//   }
// }
