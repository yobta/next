import { type NextRequest, NextResponse } from 'next/server'

const domains = 'example.com *.example.com'

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' $nonce-tag;
  child-src $domains-tag;
  style-src 'self' $nonce-tag;
  font-src 'self';
`.replace(/\s{2,}/g, ' ')

export function generateCsp(): { csp: string; nonce: string } {
  const nonce = `nonce-${crypto.randomUUID()}`
  const csp = ContentSecurityPolicy.replace('$domains-tag', domains).replace(
    /\$nonce-tag/g,
    `'${nonce}'`
  )
  return { csp, nonce }
}

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { csp, nonce } = generateCsp()
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('content-security-policy', csp)
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set('content-security-policy', csp)
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
