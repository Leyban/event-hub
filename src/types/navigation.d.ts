// This registers which makes navigation fully type-safe.

import {AppRootParamList} from '../constants/routes';

// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}
