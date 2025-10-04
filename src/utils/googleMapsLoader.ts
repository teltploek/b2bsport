let isLoading = false;
let isLoaded = false;
let loadPromise: Promise<void> | null = null;

export const loadGoogleMaps = (apiKey: string): Promise<void> => {
  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    if (isLoaded && window.google?.maps?.Map) {
      resolve();
      return;
    }

    const existingScript = document.getElementById('google-maps-script') as HTMLScriptElement;
    if (existingScript) {
      const checkLoaded = () => {
        if (window.google?.maps?.Map) {
          isLoaded = true;
          resolve();
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;

    (window as any).initGoogleMaps = () => {
      isLoaded = true;
      isLoading = false;
      resolve();
      delete (window as any).initGoogleMaps;
    };

    script.onerror = () => {
      isLoading = false;
      loadPromise = null;
      reject(new Error('Failed to load Google Maps'));
      delete (window as any).initGoogleMaps;
    };

    isLoading = true;
    document.head.appendChild(script);
  });

  return loadPromise;
};