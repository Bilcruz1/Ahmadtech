import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Leaflet for handling zoom

// Disable scroll zoom and allow pinch-to-zoom only
const DisableScrollZoom = () => {
	const map = useMap();

	useEffect(() => {
		// Disable scroll wheel zoom
		map.scrollWheelZoom.disable();

		// Enable touch-based zoom (pinch-to-zoom on touch devices)
		map.touchZoom.enable();

		// Disable double-click zoom
		map.doubleClickZoom.disable();
	}, [map]);

	return null;
};

const MapComponent = () => {
	// Replace this with your specific location (latitude, longitude)
	const specificLocation = [40.712776, -74.005974]; // Example: New York City

	return (
		<div>
			<MapContainer
				center={specificLocation} // Your specific location coordinates
				zoom={13}
				style={{ height: '400px', width: '100%' }}
			>
				{/* OpenStreetMap TileLayer */}
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

				{/* Marker for your specific location */}
				<Marker position={specificLocation}>
					<Popup>This is your specific location. Customize as needed.</Popup>
				</Marker>

				{/* Add DisableScrollZoom component */}
				<DisableScrollZoom />
			</MapContainer>
		</div>
	);
};

export default MapComponent;
