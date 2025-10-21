import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, anliegen, message, projectType, budget, timeline, description } = body;

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich.' },
        { status: 400 }
      );
    }

    // E-Mail-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-Mail-Inhalt erstellen
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || 'info@ipdomabau.de',
      subject: `Neue Kontaktanfrage von ${name} - ${anliegen || projectType || 'Allgemein'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C04020;">Neue Kontaktanfrage</h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Kontaktdaten:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Projekt-Details:</h3>
            ${anliegen ? `<p><strong>Anliegen:</strong> ${anliegen}</p>` : ''}
            ${projectType ? `<p><strong>Projektart:</strong> ${projectType}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Zeitrahmen:</strong> ${timeline}</p>` : ''}
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Nachricht:</h3>
            <p style="white-space: pre-wrap;">${message || description}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

          <p style="color: #666; font-size: 12px;">
            Diese Nachricht wurde über das Kontaktformular der DOMABAU Website gesendet.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('E-Mail Sende-Fehler:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
