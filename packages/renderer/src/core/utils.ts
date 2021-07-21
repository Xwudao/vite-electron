const getUUID = (len: number, radix: number) => {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  // eslint-disable-next-line prefer-const
  let uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    let r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
};

const fileSizeTransform = (size: number): string => {
  if (size === 0 || !size) {
    return '-';
  }
  size = parseInt(String(size));
  let data = '';
  if (size < 0.1 * 1024) {
    //如果小于0.1KB转化成B
    data = size.toFixed(2) + ' B';
  } else if (size < 0.1 * 1024 * 1024) {
    //如果小于0.1MB转化成KB
    data = (size / 1024).toFixed(2) + ' KB';
  } else if (size < 0.1 * 1024 * 1024 * 1024) {
    //如果小于0.1GB转化成MB
    data = (size / (1024 * 1024)).toFixed(2) + ' MB';
  } else {
    //其他转化成GB
    data = (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }
  const sizestr = data + '';
  const len = sizestr.indexOf('.');
  const dec = sizestr.substr(len + 1, 2);
  if (dec == '00') {
    //当小数点后为00时 去掉小数部分
    return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
  }
  return sizestr;
};

const getFileIcon = (type: string, name: string): string => {
  if (type === 'driver') {
    return 'icon-netdisk';
  }
  if (/^D/gi.test(type)) {
    return 'icon-ccfolder';
  }
  const sp = name.split('.');
  if (sp.length > 1) {
    switch (sp[sp.length - 1].toLowerCase()) {
      case 'pdf':
        return 'icon-PDF';
      case 'cmd':
      case 'bat':
      case 'sh':
      case 'bash':
        return 'icon-cmd';
      case 'zip':
      case 'rar':
      case '7z':
      case 'bzip':
      case 'bz':
        return 'icon-zip2';
      case 'dll':
        return 'icon-dll';
      case 'html':
      case 'php':
        return 'icon-code';
      case 'java':
        return 'icon-javafill-copy';
      case 'chm':
        return 'icon-iconchm';
      case 'ttf':
      case 'eot':
      case 'otf':
      case 'fon':
      case 'font':
      case 'woff':
      case 'woff2':
      case 'ttc':
        return 'icon-font';
      case 'url':
        return 'icon-url';
      case 'ppt':
      case 'pptx':
        return 'icon-PPT';
      case 'xlsx':
      case 'xls':
        return 'icon-excel';
      case 'docx':
      case 'doc':
        return 'icon-word__easyiconnet';
      case 'mp4':
        return 'icon-video';
      case 'mov':
        return 'icon-video';
      case 'apk':
        return 'icon-android';
      case 'exe':
        return 'icon-microsoft';
      case 'mp3':
        return 'icon-music';
      case 'jpg':
      case 'png':
      case 'jpeg':
      case 'bmp':
        return 'icon-tupian2';
      default:
        return 'icon-file1';
    }
  }
  return 'icon-file1';
};

const computedStat = (stat: number) => {
  switch (stat) {
    case 5:
      return 'Continue Pending';
    case 6:
      return 'Pause Pending';
    case 7:
      return 'Paused';
    case 4:
      return 'Started';
    case 2:
      return 'Start Pending';
    case 1:
      return 'Stopped';
    case 3:
      return 'Stop Pending';
  }
  return 'Unknown';
};
const computedType = (stat: number) => {
  switch (stat) {
    case 2:
      return 'Automatic';
    case 3:
      return 'Demand';
    case 4:
      return 'Disabled';
  }
  return 'Unknown';
};

export { fileSizeTransform, getUUID, getFileIcon, computedStat, computedType };
