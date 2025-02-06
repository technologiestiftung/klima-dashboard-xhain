import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN;
const mapboxStyle = import.meta.env.VITE_MAPBOX_STYLE;

export const Map: React.FC = () => {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);

	useEffect(() => {
		if (!mapContainerRef.current) {
			console.error("Map container not found");
			return () => {};
		}

		if (!mapRef.current) {
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: mapboxStyle,
				center: [13.421, 52.501],
				zoom: 11.5,
				maxZoom: 15,
				minZoom: 10.5,
			});

			mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");

			// mapRef.current.on("load", () => {
			// 	console.log("Map has loaded successfully");
			// });

			mapRef.current.on("error", (error) => {
				console.error("Map error:", error);
			});
		}

		return () => {
			if (mapRef.current) {
				mapRef.current.remove();
				mapRef.current = null;
			}
		};
	}, []);

	return <div ref={mapContainerRef} className={`w-full h-[500px]`} />;
};
