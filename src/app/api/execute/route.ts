import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { script, language, versionIndex } = await req.json();

  const response = await fetch("https://api.jdoodle.com/v1/execute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
      script,
      language,
      versionIndex,
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
