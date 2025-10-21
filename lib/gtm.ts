
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const initGTM = () => {
  if (typeof window !== 'undefined' && GTM_ID) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
  }
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const updateConsent = (consentSettings: {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      ...consentSettings,
      security_storage: 'granted'
    });
  }
};
