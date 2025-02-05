import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const { Map: MapboxMap } = mapboxgl; // Destructure the Map property

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN as string;

export const Map: React.FC = () => {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null); // Still using the Map type from mapboxgl

	useEffect(() => {
		console.log("Map effect mounted");
		if (!mapContainerRef.current) {
			console.error("Map container not found");
			return;
		}

		const style =
			"mapbox://styles/technologiestiftung/cm5wj9ora00sc01s7frft831h";

		if (!mapRef.current) {
			console.log("Initializing map...");
			mapRef.current = new MapboxMap({
				container: mapContainerRef.current,
				style: style,
				center: [13.421, 52.501], // Note: [lng, lat] order!
				zoom: 12,
			});

			mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");

			mapRef.current.on("load", () => {
				console.log("Map has loaded successfully");
			});

			mapRef.current.on("error", (error) => {
				console.error("Map error:", error);
			});
		}

		return () => {
			console.log("Map effect cleanup");
			if (mapRef.current) {
				console.log("Cleaning up map instance:", mapRef.current);
				mapRef.current.remove();
			}
		};
	}, []);

	return (
		<div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
	);
};
