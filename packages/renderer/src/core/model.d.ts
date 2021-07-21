export interface CommonWSModel {
  type: number;
  uuid: string;
  guid: string;
  cnt: string;
}

export interface ClipboardData {
  process: string;
  title: string;
  content: string;
}

export interface ProcessData {
  name: string;
  desc: string;
  path: string;
  pid: number;
  user: string;
}

export interface SoftData {
  name: string;
}

export interface ServiceData {
  desc: string;
  name: string;
  disp: string;
  path: string;
  user: string;
  stat: string;
  type: string;
}

export interface FileTreeType {
  label: string;
  id: string;
  loadAll?: boolean;
  type: string;
  name?: string; //名称，非driver特有
  extra?: {
    name: string;
    type: string;
    cttime: string;
    lttime: string;
    size: string;
  };
  children?: FileTreeType[];
}
