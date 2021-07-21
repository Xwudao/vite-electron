import type { IpcRenderer } from 'electron';

interface ElectronApi {
  // eslint-disable-next-line no-undef
  readonly versions: Readonly<NodeJS.ProcessVersions>;
  readonly ipcRenderer: IpcRenderer;
}

declare global {
  interface Window {
    electron: Readonly<ElectronApi>;
    // eslint-disable-next-line no-undef
    electronRequire?: NodeRequire;
  }
}

//interface MyWindow extends Window {
//  electron: Readonly<ElectronApi>;
//  electronRequire?: NodeRequire;
//}
//
//declare let window: MyWindow;
