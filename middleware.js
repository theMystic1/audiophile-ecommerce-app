// practice middleware {our own code}

import { auth } from "./app/_lib/auth";

/*
import { NextResponse } from "next/server";

// 1 export the middlware function
export function middleware(request) {
  console.log(request);
  
  // 2. return the response and where to redirect unauthorised users
  return NextResponse.redirect(new URL("/about", request.url));
}
*/

// using the auth as middleware, that auth is from our authentication session

export const middleware = auth;

//3. selecct the routes to protect
export const config = {
  matcher: ["/checkout"],
};
