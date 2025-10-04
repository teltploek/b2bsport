'use client';

import { useEffect, useRef, useState } from 'react';
import { mapStyles } from './mapStyles';
import styles from './Map.module.css';
import { loadGoogleMaps } from '@/utils/googleMapsLoader';

interface Office {
  name: string;
  position: { lat: number; lng: number };
  address: string;
}

interface MapProps {
  apiKey?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  singleLocation?: Office;
}

const offices: Office[] = [
  {
    name: 'Sjælland Kontor',
    position: { lat: 55.683526, lng: 12.464582 }, 
    address: 'Rødovrevej 151, 2610 Rødovre'
  },
  {
    name: 'Jylland & Fyn Kontor',
    position: { lat: 55.353508, lng: 8.774580 }, 
    address: 'Industrivej 41, 6760 Ribe'
  }
];

export default function Map({ apiKey, center: customCenter, zoom: customZoom, singleLocation }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    if (!apiKey) {
      console.log('Google Maps API key not provided. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.');
      return;
    }

    
    let isMounted = true;

    const initializeMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      try {
        
        if (!window.google?.maps?.Map) {
          console.error('Google Maps not ready');
          return;
        }

        
        const mapCenter = customCenter || { lat: 55.5, lng: 10.5 };
        const mapZoom = customZoom || 7;

        const map = new google.maps.Map(mapRef.current, {
          zoom: mapZoom,
          center: mapCenter,
          
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false,
          scaleControl: false,
          rotateControl: false,
          disableDefaultUI: false,
          clickableIcons: false,
        });

        mapInstanceRef.current = map;

      
      const locationsToShow = singleLocation ? [singleLocation] : offices;

      
      locationsToShow.forEach((office) => {
        const marker = new google.maps.Marker({
          position: office.position,
          map,
          title: office.name,
          icon: {
            url: '/images/map-pin.svg',
            scaledSize: new google.maps.Size(49, 71),
            anchor: new google.maps.Point(24, 71),
          },
        });

        
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 4px 0; font-weight: bold;">${office.name}</h3>
              <p style="margin: 0; color: #666;">${office.address}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

        
        if (!singleLocation && locationsToShow.length > 1) {
          const bounds = new google.maps.LatLngBounds();
          locationsToShow.forEach(office => {
            bounds.extend(office.position);
          });
          
          
          const padding = { top: 50, right: 50, bottom: 50, left: 50 };
          map.fitBounds(bounds, padding);
        }

        setMapLoaded(true);
      } catch (err) {
        console.error('Error initializing map:', err);
        setError('Failed to initialize map');
      }
    };

    const initMap = async () => {
      try {
        await loadGoogleMaps(apiKey);
        
        if (!isMounted) return;
        
        
        setTimeout(() => {
          if (isMounted && mapRef.current && !mapInstanceRef.current && window.google?.maps?.Map) {
            initializeMap();
          }
        }, 500);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        if (isMounted) {
          setError('Failed to load map');
        }
      }
    };

    initMap();

    return () => {
      isMounted = false;
      
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [apiKey, singleLocation, customCenter, customZoom]);

  
  if (!apiKey) {
    return (
      <div className="w-full h-full bg-semantic-background-secondary flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-semantic-text-secondary mb-2">Kort kommer snart</p>
          <p className="text-sm text-semantic-text-tertiary">
            Tilføj Google Maps API nøgle for at vise kortet
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${styles.mapContainer}`}>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}