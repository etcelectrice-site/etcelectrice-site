import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    await resend.emails.send({
      from: "Euro Top Construct <noreply@mail.etcelectrice.net>",
      to: email,
      subject: "Köszönjük / Vă mulțumim",
      text: `Tisztelt ${name},\n\nKöszönjük az üzenetet, hamarosan felvesszük Önnel a kapcsolatot.\n\nÜzenet: ${message}\n\nÜdvözlettel, Euro Top Construct\n\n—\nStimate ${name},\nVă mulțumim pentru mesaj, revenim în curând.\n\nMesaj: ${message}\n\nCu stimă, Euro Top Construct`
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
