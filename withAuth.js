import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = localStorage.getItem("isLogged");
  let url = req.url;
  console.log("url", url);

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (verify && url === "http://localhost:3000") {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
