import { createI18n } from 'vue-i18n';

// const modules = import.meta.glob('../locales/*.json');
import zh from '../locales/zh.json';
import en from '../locales/en.json';

const messages = {
  zh: zh.data,
  en: en.data,
};
// for (const path in modules) {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// modules[path]().then((res: { data: { [key: string], string }, name: string }) => {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// messages[res.name] = res.data;
// });
// const mod = await modules[path]();
// const p1 = /([\w]+)\.json/gi.exec(path);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// if (p1 && p1[1]) messages[p1[1]] = mod.default;
// }

// const messages = {
//   en: {
//     message: {
//       hello: "hello world",
//     },
//   },
//   zh: {
//     message: {
//       hello: "你好",
//     },
//   },
// };

console.log(messages);
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'zh', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});
export default i18n;
