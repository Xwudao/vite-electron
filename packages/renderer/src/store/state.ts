export interface SystemSetting {
  navbarName: string;
}

export interface CommonInfo {
  uuid: string;
}

export interface UserInfo {
  username: string;
  memo: string;
  token: string;
  id: number;
}

interface GlobalState {
  userInfo: UserInfo;
  systemInfo: SystemSetting;
  commonInfo: CommonInfo;
}

const state: GlobalState = {
  userInfo: {
    memo: '',
    username: '',
    id: -1,
    token: '',
  },
  systemInfo: {
    navbarName: 'Index',
  },
  commonInfo: {
    uuid: '',
  },
};

export type { GlobalState };
export default state;
