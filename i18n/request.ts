import { getRequestConfig } from "next-intl/server";
import { type Locale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // 静态导出需要等待 locale 解析
  let locale = await requestLocale;

  // 确保 locale 有效
  if (!(locale && routing.locales.includes(locale as Locale))) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
