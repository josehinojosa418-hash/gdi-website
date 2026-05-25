import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { nombre, empresa, email, telefono, tipo, mensaje } = await req.json();

  if (!nombre || !email || !tipo || !mensaje) {
    return NextResponse.json({ error: "Campos requeridos faltantes." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1d3557; padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px; letter-spacing: 1px;">
          GDI — Nueva Solicitud de Contacto
        </h1>
      </div>
      <div style="padding: 32px; border: 1px solid #e5e7eb;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 160px; font-size: 13px;">Nombre</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; font-size: 14px;">${nombre}</td></tr>
          ${empresa ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Empresa</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;">${empresa}</td></tr>` : ""}
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;"><a href="mailto:${email}" style="color: #e63946;">${email}</a></td></tr>
          ${telefono ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Teléfono</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;">${telefono}</td></tr>` : ""}
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Tipo de Proyecto</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #e63946; font-weight: 600;">${tipo}</td></tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Mensaje</p>
          <div style="background: #f8f9fa; padding: 16px; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${mensaje}</div>
        </div>
      </div>
      <div style="padding: 16px 32px; background: #f8f9fa; text-align: center;">
        <p style="color: #9ca3af; font-size: 12px; margin: 0;">
          Grupo Desarrollador Industrial S.A. de C.V. · grupogdi@gdisa.com · www.gdisa.com
        </p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "GDI Website <onboarding@resend.dev>",
      to: "grupogdi@gdisa.com",
      replyTo: email,
      subject: `[GDI] Nueva solicitud: ${tipo} — ${nombre}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "No se pudo enviar el correo." }, { status: 500 });
  }
}
