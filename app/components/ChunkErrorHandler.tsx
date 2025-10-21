'use client';

import { useEffect } from 'react';

export default function ChunkErrorHandler() {
  useEffect(() => {
    // ChunkLoadError Handler
    const handleError = (event: ErrorEvent) => {
      if (event.error && (
        event.error.name === 'ChunkLoadError' ||
        event.error.message.includes('Loading chunk') ||
        event.error.message.includes('ChunkLoadError')
      )) {
        // Seite neu laden bei ChunkLoad-Fehlern
        window.location.reload();
      }
    };

    // Unhandled Promise Rejections für Chunk-Fehler
    const handleRejection = (event: PromiseRejectionEvent) => {
      if (event.reason && (
        event.reason.name === 'ChunkLoadError' ||
        event.reason.message?.includes('Loading chunk')
      )) {
        window.location.reload();
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return null; // Keine UI, nur Event-Handler
}
