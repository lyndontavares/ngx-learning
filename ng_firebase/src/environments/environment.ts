// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyBEswXIczagD7JnFmtCpmFP8BTH_Q5_VsI',
    authDomain: 'menufacil-00001.firebaseapp.com',
    databaseURL: 'https://menufacil-00001.firebaseio.com',
    projectId: 'menufacil-00001',
    storageBucket: 'menufacil-00001.appspot.com',
    messagingSenderId: '168806655361'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
