import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      anliegen,
      message,
      projectType,
      service,
      budget,
      timeline,
      propertyType,
      roomCount,
      address,
      description
    } = body;

    // Validierung - Flexibler für verschiedene Formulare
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind erforderlich.' },
        { status: 400 }
      );
    }

    // Prüfen ob CONTACT_EMAIL gesetzt ist
    if (!process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { error: 'E-Mail-Konfiguration fehlt. Bitte kontaktieren Sie den Administrator.' },
        { status: 500 }
      );
    }

    // Mindestens eine Art von Nachricht erforderlich
    if (!message && !description) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine Nachricht oder Beschreibung ein.' },
        { status: 400 }
      );
    }

    // SMTP-Konfiguration validieren
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { error: 'SMTP-Konfiguration unvollständig. Bitte kontaktieren Sie den Administrator.' },
        { status: 500 }
      );
    }

    // E-Mail-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Transporter verifizieren
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP-Konfiguration Fehler:', error);
      return NextResponse.json(
        { error: 'E-Mail-Server-Konfiguration ist ungültig.' },
        { status: 500 }
      );
    }

    // E-Mail-Inhalt erstellen
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Neue Kontaktanfrage von ${name} - ${anliegen || service || projectType || 'Allgemein'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C04020;">Neue Kontaktanfrage</h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Kontaktdaten:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
            ${address ? `<p><strong>Adresse:</strong> ${address}</p>` : ''}
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Projekt-Details:</h3>
            ${anliegen ? `<p><strong>Anliegen:</strong> ${anliegen}</p>` : ''}
            ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
            ${projectType ? `<p><strong>Projektart:</strong> ${projectType}</p>` : ''}
            ${propertyType ? `<p><strong>Immobilientyp:</strong> ${propertyType}</p>` : ''}
            ${roomCount ? `<p><strong>Anzahl Räume:</strong> ${roomCount}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Zeitrahmen:</strong> ${timeline}</p>` : ''}
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Nachricht:</h3>
            <p style="white-space: pre-wrap;">${message || description || 'Keine zusätzliche Nachricht'}</p>
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
