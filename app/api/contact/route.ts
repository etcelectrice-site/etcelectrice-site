import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Ellenőrizzük, hogy van-e API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY — skipping email send");
      return NextResponse.json(
        { ok: false, error: "Server misconfigured (missing API key)" },
        { status: 500 }
      );
    }

    // Itt hozzuk létre a Resend példányt — csak futásidőben
    const resend = new Resend(apiKey);

    const form = await req.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    // Email küldés
    await resend.emails.send({
      from: "Euro Top Construct <noreply@mail.etcelectrice.net>",
      to: email,
      subject: "Köszönjük / Vă mulțumim",
      text: `Tisztelt ${name},

Köszönjük az üzenetet, hamarosan felvesszük Önnel a kapcsolatot.

Üzenet: ${message}

Üdvözlettel,
Euro Top Construct

—
Stimate ${name},
Vă mulțumim pentru mesaj, revenim în curând.

Mesaj: ${message}

Cu stimă,
Euro Top Construct`
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Contact API error:", e);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
