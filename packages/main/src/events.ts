import { ipcMain, Menu } from 'electron';
import { CHANGE_MENU } from '../../common/types';

const registerEvents = () => {
  ipcMain.on(CHANGE_MENU, () => {
    const menus = [
      {
        label: 'File',
        submenu: [
          {
            label: 'Exit',
            click: () => {
              console.log('click');
            },
          },
        ],
      },
    ];

    const m = Menu.buildFromTemplate(menus);
    Menu.setApplicationMenu(m);
  });
};

export { registerEvents };
