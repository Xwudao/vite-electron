import { createStore, createLogger } from 'vuex';
import type { GlobalState, UserInfo } from './state';
import state from './state';
import mutations from './mutations';
import local from '../core/data';
import { ACTION_CHANGE_UUID, KEY_USER_DATA, KEY_UUID } from './types';

const store = createStore<GlobalState>({
  state,
  mutations,
  actions: {},
  plugins: import.meta.env.MODE !== 'production' ? [createLogger()] : [],
});

// init data
const userInfo = local.getValue<UserInfo>(KEY_USER_DATA);
if (userInfo) {
  store.commit(KEY_USER_DATA, userInfo);
}

const uuid = local.getValue<string>(KEY_UUID);
if (uuid) {
  store.commit(ACTION_CHANGE_UUID, uuid);
}

export default store;
