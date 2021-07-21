import {
  ACTION_CHANGE_NAVBAR_NAME,
  ACTION_CHANGE_UUID,
  KEY_USER_DATA,
  KEY_UUID,
} from './types';
import local from '../core/data';
import type { GlobalState } from './state';

const mutations = {
  [KEY_USER_DATA](state: GlobalState, userInfo: any) {
    local.setValue(KEY_USER_DATA, userInfo);
  },
  [ACTION_CHANGE_NAVBAR_NAME](state: GlobalState, name: string) {
    state.systemInfo.navbarName = name;
  },
  [ACTION_CHANGE_UUID](state: GlobalState, uuid: string) {
    state.commonInfo.uuid = uuid;
    local.setValue(KEY_UUID, uuid);
  },
};

export default mutations;
