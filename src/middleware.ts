import createMiddleware from 'next-intl/middleware';
import { pathnames, defaultLocale, locales, localePrefix } from './config/navigation';
import { NextRequest } from 'next/server';
 
const intlMiddleware = createMiddleware({
  locales, // A list of all locales that are supported
  defaultLocale, // Used when no locale matches
  localePrefix,
  pathnames
});

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  const shouldHandle = pathname === '/' || new RegExp(`^/(${locales.join('|')})(/.*)?$`).test(
      request.nextUrl.pathname
    )

  if(!shouldHandle) return;

  return intlMiddleware(request);
}