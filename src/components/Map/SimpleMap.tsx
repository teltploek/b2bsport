'use client';

import { useEffect, useRef } from 'react';

interface SimpleMapProps {
  apiKey?: string;
  center: { lat: number; lng: number };
  zoom: number;
  title: string;
}

export default function SimpleMap({ apiKey, center, zoom, title }: SimpleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    const loadMap = () => {
      if (!window.google?.maps) {
        setTimeout(loadMap, 100);
        return;
      }

      const map = new google.maps.Map(mapRef.current!, {
        center,
        zoom,
        disableDefaultUI: true,
        styles: [
          {
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }],
          },
          {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f5f5' }],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#d4f0d4' }],  
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#dadada' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#b8d4e3' }],  
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{ color: '#e8f5e8' }],  
          },
        ],
      });

      new google.maps.Marker({
        position: center,
        map,
        title,
        icon: {
          url: '/images/map-pin.svg',
          scaledSize: new google.maps.Size(49, 71),
          anchor: new google.maps.Point(24, 71),
        },
      });
    };

    
    if (!document.getElementById('gmap-script')) {
      const script = document.createElement('script');
      script.id = 'gmap-script';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, [apiKey, center, zoom, title]);

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Map API key missing</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <style dangerouslySetInnerHTML={{
        __html: `
          .gmnoprint:not(.gm-bundled-control),
          .gm-style-cc,
          a[href^="https://maps.google.com"],
          img[src*="google_white"],
          img[src*="google4"],
          .gmnoprint > a > div {
            display: none !important;
          }
        `
      }} />
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}