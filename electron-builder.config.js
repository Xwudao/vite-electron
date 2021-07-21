const now = new Date();
const buildVersion = `${now.getFullYear() - 2000}.${
  now.getMonth() + 1
}.${now.getDate()}`;

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  compression: 'store',
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64', 'ia32'],
      },
    ],
  },
  nsis: {
    oneClick: false,
    allowElevation: true,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: 'InjectCode',
  },
  directories: {
    output: 'dist',
    buildResources: 'buildResources',
  },
  files: ['packages/**/dist/**'],
  extraMetadata: {
    version: buildVersion,
  },
};

module.exports = config;
