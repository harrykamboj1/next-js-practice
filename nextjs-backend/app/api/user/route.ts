import { NextRequest } from "next/server";

export function GET() {
  return Response.json({
    email: "@gmail.com",
    name: "Harnoor",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  return Response.json({
    message: "You are logged in!",
  });
}
