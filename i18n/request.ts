import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // If locale is undefined or invalid, fallback to 'en'
  const baseLocale = locale || 'en';

  return {
    locale: baseLocale,
    messages: (await import(`../messages/${baseLocale}.json`)).default
  };
});