import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function Map() {
  return (
    <MapContainer
      center={[-34.6037, -58.3816]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; OpenStreetMap'
        tileSize={512}
        zoomOffset={-1}
      />

      <Marker position={[-34.6037, -58.3816]}>
        <Popup>Hola desde Buenos Aires</Popup>
      </Marker>
    </MapContainer>
  );
}
