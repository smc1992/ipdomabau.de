
export const generateAdminEmailHTML = (formData: any) => {
  const serviceNames: { [key: string]: string } = {
    'malerarbeiten': 'Malerarbeiten',
    'trockenbau': 'Trockenbau', 
    'innenausbau': 'Innenausbau',
    'parkettverlegung': 'Parkettverlegung',
    'sanierung': 'Sanierung'
  };

  const budgetNames: { [key: string]: string } = {
    'unter-5000': 'Unter 5.000€',
    '5000-15000': '5.000€ - 15.000€',
    '15000-30000': '15.000€ - 30.000€',
    'ueber-30000': 'Über 30.000€'
  };

  const timelineNames: { [key: string]: string } = {
    'sofort': 'Sofort',
    '1-3-monate': '1-3 Monate',
    '3-6-monate': '3-6 Monate',
    'flexibel': 'Flexibel'
  };

  const propertyNames: { [key: string]: string } = {
    'wohnung': 'Wohnung',
    'haus': 'Haus',
    'gewerbe': 'Gewerbe',
    'buero': 'Büro'
  };

  const contactPreferenceNames: { [key: string]: string } = {
    'telefon': 'Telefon',
    'email': 'E-Mail',
    'whatsapp': 'WhatsApp'
  };

  const preferredTimeNames: { [key: string]: string } = {
    'vormittag': 'Vormittag (9-12 Uhr)',
    'nachmittag': 'Nachmittag (12-17 Uhr)',
    'abend': 'Abend (17-19 Uhr)'
  };

  return `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neue Projektanfrage</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
        }
        .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }
        .header p {
            margin: 8px 0 0 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
        }
        .section h2 {
            margin: 0 0 15px 0;
            color: #1e293b;
            font-size: 18px;
            font-weight: 600;
            display: flex;
            align-items: center;
        }
        .section h2::before {
            content: "📋";
            margin-right: 8px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 15px;
        }
        .info-item {
            background: white;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
        }
        .info-label {
            font-weight: 600;
            color: #475569;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .info-value {
            color: #1e293b;
            font-size: 14px;
            font-weight: 500;
        }
        .description {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
            margin-top: 15px;
        }
        .priority-badge {
            display: inline-block;
            background: #dc2626;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .timeline-badge {
            display: inline-block;
            background: #059669;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .footer {
            background: #1e293b;
            color: white;
            padding: 20px 30px;
            text-align: center;
            font-size: 14px;
        }
        .cta-button {
            display: inline-block;
            background: #2563eb;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 15px 0;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏗️ Neue Projektanfrage</h1>
            <p>Eingegangen am ${new Date().toLocaleDateString('de-DE', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>Kundendaten</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Name</div>
                        <div class="info-value">${formData.firstName} ${formData.lastName}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">E-Mail</div>
                        <div class="info-value">${formData.email}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Telefon</div>
                        <div class="info-value">${formData.phone}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Bevorzugter Kontakt</div>
                        <div class="info-value">${contactPreferenceNames[formData.contactPreference] || 'Nicht angegeben'}</div>
                    </div>
                </div>
                ${formData.preferredTime ? `
                <div class="info-item" style="margin-top: 15px;">
                    <div class="info-label">Bevorzugte Kontaktzeit</div>
                    <div class="info-value">${preferredTimeNames[formData.preferredTime]}</div>
                </div>
                ` : ''}
            </div>

            <div class="section">
                <h2>Projektdetails</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Gewünschte Leistung</div>
                        <div class="info-value">${serviceNames[formData.service] || formData.service}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Objektart</div>
                        <div class="info-value">${propertyNames[formData.propertyType] || formData.propertyType}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Budget</div>
                        <div class="info-value">${budgetNames[formData.budget] || formData.budget}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Zeitrahmen</div>
                        <div class="info-value">
                            <span class="${formData.timeline === 'sofort' ? 'priority-badge' : 'timeline-badge'}">
                                ${timelineNames[formData.timeline] || formData.timeline}
                            </span>
                        </div>
                    </div>
                </div>
                ${formData.roomCount ? `
                <div class="info-item" style="margin-top: 15px;">
                    <div class="info-label">Raumanzahl/Größe</div>
                    <div class="info-value">${formData.roomCount}</div>
                </div>
                ` : ''}
            </div>

            ${formData.projectDescription ? `
            <div class="section">
                <h2>Projektbeschreibung</h2>
                <div class="description">
                    ${formData.projectDescription.replace(/\n/g, '<br>')}
                </div>
            </div>
            ` : ''}

            ${formData.additionalServices && formData.additionalServices.length > 0 ? `
            <div class="section">
                <h2>Zusätzliche Services</h2>
                <div class="info-value">
                    ${formData.additionalServices.split(', ').map((service: string) => {
                        const serviceMap: { [key: string]: string } = {
                            'beratung': '💬 Kostenlose Beratung',
                            'planung': '📐 3D-Planung',
                            'materialberatung': '🎨 Materialberatung',
                            'nachbetreuung': '🛠️ Nachbetreuung'
                        };
                        return serviceMap[service] || service;
                    }).join('<br>')}
                </div>
            </div>
            ` : ''}

            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${formData.email}" class="cta-button">
                    📧 Kunde kontaktieren
                </a>
                <a href="tel:${formData.phone}" class="cta-button" style="margin-left: 10px;">
                    📞 Anrufen
                </a>
            </div>
        </div>

        <div class="footer">
            <p><strong>Nächste Schritte:</strong></p>
            <p>1. Kunde innerhalb von 24h kontaktieren<br>
            2. Beratungstermin vereinbaren<br>
            3. Vor-Ort-Besichtigung planen</p>
            <p style="margin-top: 15px; opacity: 0.8;">
                Diese E-Mail wurde automatisch generiert von Ihrem Kontaktformular.
            </p>
        </div>
    </div>
</body>
</html>
  `;
};

export const generateCustomerEmailHTML = (formData: any) => {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bestätigung Ihrer Projektanfrage</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8fafc;
        }
        .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .content {
            padding: 30px;
        }
        .footer {
            background: #1e293b;
            color: white;
            padding: 20px 30px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Vielen Dank für Ihre Anfrage!</h1>
            <p>Wir haben Ihre Projektanfrage erhalten</p>
        </div>
        
        <div class="content">
            <p>Liebe/r ${formData.firstName} ${formData.lastName},</p>
            
            <p>vielen Dank für Ihr Interesse an unseren Leistungen. Wir haben Ihre Anfrage für <strong>${formData.service}</strong> erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
            
            <h3>Nächste Schritte:</h3>
            <ol>
                <li>Wir prüfen Ihre Anfrage und bereiten ein individuelles Angebot vor</li>
                <li>Unser Experte kontaktiert Sie für ein kostenloses Beratungsgespräch</li>
                <li>Bei Interesse vereinbaren wir einen Vor-Ort-Termin</li>
            </ol>
            
            <p>Bei dringenden Fragen erreichen Sie uns unter:</p>
            <p><strong>Telefon:</strong> +49 123 456789<br>
            <strong>E-Mail:</strong> info@ihr-unternehmen.de</p>
            
            <p>Mit freundlichen Grüßen<br>
            Ihr Team</p>
        </div>

        <div class="footer">
            <p>Diese E-Mail wurde automatisch generiert.</p>
        </div>
    </div>
</body>
</html>
  `;
};
