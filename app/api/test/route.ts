import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Teste alle ENV-Variablen
    const config = {
      hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
      hasContactEmail: !!process.env.CONTACT_EMAIL,
      hasSmtpHost: !!process.env.SMTP_HOST,
      hasSmtpUser: !!process.env.SMTP_USER,
      hasSmtpPass: !!process.env.SMTP_PASS,
      smtpPort: process.env.SMTP_PORT || '587',
      contactEmail: process.env.CONTACT_EMAIL ? 'gesetzt' : 'nicht gesetzt',
      smtpHost: process.env.SMTP_HOST ? 'gesetzt' : 'nicht gesetzt',
      smtpUser: process.env.SMTP_USER ? 'gesetzt' : 'nicht gesetzt',
      smtpPass: process.env.SMTP_PASS ? 'gesetzt (maskiert)' : 'nicht gesetzt',
    };

    console.log('API-Konfiguration Test:', {
      ...config,
      smtpPass: process.env.SMTP_PASS ? '***gesetzt***' : 'nicht gesetzt',
    });

    return NextResponse.json({
      status: 'API funktioniert',
      timestamp: new Date().toISOString(),
      config: config,
      instructions: 'Überprüfen Sie die Coolify-Logs für detaillierte Konfiguration.',
      nextSteps: [
        'Stellen Sie sicher, dass alle SMTP-Variablen gesetzt sind',
        'Testen Sie die SMTP-Verbindung',
        'Überprüfen Sie die CONTACT_EMAIL Variable'
      ]
    });

  } catch (error) {
    console.error('API-Test Fehler:', error);
    return NextResponse.json(
      { error: 'API-Test fehlgeschlagen', details: error instanceof Error ? error.message : 'Unbekannter Fehler' },
      { status: 500 }
    );
  }
}
