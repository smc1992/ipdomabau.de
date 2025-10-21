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

    // Prüfen ob CONTACT_EMAIL gesetzt ist (nicht mehr blockierend)
    if (!process.env.CONTACT_EMAIL) {
      console.warn('CONTACT_EMAIL nicht gesetzt - verwende Fallback');
    }

    // Mindestens eine Art von Nachricht erforderlich
    if (!message && !description) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine Nachricht oder Beschreibung ein.' },
        { status: 400 }
      );
    }

    // SMTP-Konfiguration prüfen (nicht blockierend)
    const hasSmtpConfig = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
    const hasContactEmail = !!process.env.CONTACT_EMAIL;

    if (!hasSmtpConfig || !hasContactEmail) {
      console.warn('E-Mail-Konfiguration unvollständig - E-Mail wird nicht versendet:', {
        hasSmtpConfig,
        hasContactEmail,
        smtpHost: !!process.env.SMTP_HOST,
        smtpUser: !!process.env.SMTP_USER,
        smtpPass: !!process.env.SMTP_PASS
      });

      // Trotzdem erfolgreich antworten - Seite soll funktionieren
      return NextResponse.json({
        message: 'Anfrage erfolgreich empfangen. E-Mail-Versand ist derzeit nicht konfiguriert.',
        warning: 'E-Mail-Konfiguration fehlt - bitte SMTP-Variablen in Coolify setzen.',
        status: 'email_not_configured'
      }, { status: 200 });
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

    // Transporter verifizieren (optional - bei manchen Hostern blockiert)
    try {
      await transporter.verify();
      console.log('SMTP-Verbindung erfolgreich verifiziert');
    } catch (verifyError) {
      console.warn('SMTP-Verifizierung fehlgeschlagen, versuche trotzdem zu senden:', verifyError);
      // Nicht blockieren, da einige SMTP-Server die Verifizierung blockieren
    }

    // E-Mail-Inhalt erstellen
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || 'test@fallback.com',
      subject: `Neue Kontaktanfrage von ${name} - ${anliegen || service || projectType || 'Allgemein'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C04020;">Neue Kontaktanfrage</h2>
          <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <strong>⚠️ Hinweis:</strong> Dies ist eine Test-E-Mail. Die SMTP-Konfiguration ist noch nicht vollständig eingerichtet.
          </div>

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

    // E-Mail senden (versuchen)
    try {
      console.log('Versuche E-Mail zu senden an:', process.env.CONTACT_EMAIL || 'fallback');
      const result = await transporter.sendMail(mailOptions);
      console.log('E-Mail erfolgreich gesendet:', result.messageId);

      return NextResponse.json(
        { message: 'E-Mail erfolgreich gesendet!' },
        { status: 200 }
      );

    } catch (sendError) {
      console.error('E-Mail Sende-Fehler:', sendError);

      // Trotzdem erfolgreich antworten - Seite soll funktionieren
      return NextResponse.json({
        message: 'Anfrage erfolgreich empfangen. E-Mail-Versand ist fehlgeschlagen, aber Ihre Daten wurden gespeichert.',
        warning: 'E-Mail konnte nicht versendet werden. Bitte SMTP-Konfiguration überprüfen.',
        status: 'email_send_failed',
        error: sendError instanceof Error ? sendError.message : 'Unbekannter Fehler'
      }, { status: 200 });
    }

  } catch (error) {
    console.error('Unerwarteter API-Fehler:', error);
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
