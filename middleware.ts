import { NextRequest, NextResponse } from "next/server";

let locales = ['en', 'ptbr']

export function middleware(request: NextRequest){
    const {pathname} = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
}