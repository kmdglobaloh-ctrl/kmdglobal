import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Log for debugging — replace with Resend/SendGrid/Web3Forms in production
  console.log("[Alfieri Contact]", JSON.stringify(body, null, 2));

  // Production: uncomment and configure your email provider
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Alfieri Website <noreply@yourdomain.com>",
  //   to: "sales@alfieribrothers.com",
  //   subject: `New ${body.type || "Contact"} Form Submission — ${body.name}`,
  //   text: JSON.stringify(body, null, 2),
  // });

  return NextResponse.json({ ok: true });
}
