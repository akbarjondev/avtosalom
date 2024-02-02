import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '../i18n';
 
export default createMiddleware({
  locales, // A list of all locales that are supported
  defaultLocale // Used when no locale matches
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(uz|en)/:path*']
};