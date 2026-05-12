import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Mail, Phone, MapPin } from "lucide-react";

const COMPANY = {
  name: "HLC Technologies",
  email: "sales@hlctechnologies.in",
  phone: "+91 98912 10081",
  address: "Janakpuri, West Delhi, Delhi 110058, India",
  hq: { lat: 28.6219, lng: 77.0856 },
};

export function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [20, 30],
      zoom: 2,
      scrollWheelZoom: false,
      zoomControl: true,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap &copy; CARTO",
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    const goldIcon = L.divIcon({
      className: "wom-marker",
      html: `<span class="wom-pulse"></span><span class="wom-dot"></span>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    const popupHtml = `
      <div class="wom-popup">
        <p class="wom-popup__eyebrow">Headquarters</p>
        <h3>${COMPANY.name}</h3>
        <p class="wom-popup__row">${COMPANY.address}</p>
        <p class="wom-popup__row"><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></p>
        <p class="wom-popup__row"><a href="tel:${COMPANY.phone.replace(/\s/g, "")}">${COMPANY.phone}</a></p>
      </div>
    `;

    const hqMarker = L.marker([COMPANY.hq.lat, COMPANY.hq.lng], { icon: goldIcon })
      .addTo(map)
      .bindPopup(popupHtml, { className: "wom-popup-wrap", closeButton: false, offset: [0, -6] });

    hqMarker.on("mouseover", () => hqMarker.openPopup());

    // Auto-track visitor location
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const youIcon = L.divIcon({
            className: "wom-marker wom-marker--you",
            html: `<span class="wom-pulse wom-pulse--blue"></span><span class="wom-dot wom-dot--blue"></span>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          });
          const youMarker = L.marker([latitude, longitude], { icon: youIcon })
            .addTo(map)
            .bindPopup(
              `<div class="wom-popup"><p class="wom-popup__eyebrow">Your location</p><h3>You are here</h3><p class="wom-popup__row">Connected to ${COMPANY.name}</p></div>`,
              { className: "wom-popup-wrap", closeButton: false, offset: [0, -6] }
            );
          youMarker.on("mouseover", () => youMarker.openPopup());

          const line = L.polyline(
            [
              [latitude, longitude],
              [COMPANY.hq.lat, COMPANY.hq.lng],
            ],
            { color: "#d4a548", weight: 1.5, opacity: 0.7, dashArray: "6 6" }
          ).addTo(map);

          const bounds = L.latLngBounds([
            [latitude, longitude],
            [COMPANY.hq.lat, COMPANY.hq.lng],
          ]).pad(0.4);
          map.fitBounds(bounds);
          void line;
        },
        () => {
          map.setView([COMPANY.hq.lat, COMPANY.hq.lng], 4);
        },
        { timeout: 6000 }
      );
    }

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border glass">
      <div ref={containerRef} className="h-[480px] w-full" aria-label="Global presence map" />
      <div className="pointer-events-none absolute left-6 top-6 z-[400] max-w-xs rounded-2xl border border-[var(--gold)]/30 bg-[oklch(0.12_0.05_260/0.85)] p-5 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gradient-gold">Global presence</p>
        <h3 className="mt-2 font-serif text-xl font-semibold">{COMPANY.name}</h3>
        <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
          <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--gold)]" /> {COMPANY.address}</li>
          <li className="flex items-start gap-2"><Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--gold)]" /> {COMPANY.email}</li>
          <li className="flex items-start gap-2"><Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--gold)]" /> {COMPANY.phone}</li>
        </ul>
      </div>
    </div>
  );
}