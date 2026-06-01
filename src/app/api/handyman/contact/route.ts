import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  type: z.enum(["contact", "quote"]),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  serviceType: z.string().optional(),
  description: z.string().optional(),
  urgency: z.string().optional(),
  address: z.string().optional(),
  discount: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // TODO: Replace with real email delivery (e.g. Resend, SendGrid, Web3Forms):
    //
    // await resend.emails.send({
    //   from: "noreply@prohandyservices.com",
    //   to: "hello@prohandyservices.com",
    //   subject: `New ${data.type} from ${data.name}`,
    //   html: buildEmailHtml(data),
    // });
    //
    // For now we log and return success so the form works end-to-end in dev.
    console.log("[handyman/contact]", JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[handyman/contact] error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
