import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapLegend } from "./map-legend";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN;
const mapboxStyle = import.meta.env.VITE_MAPBOX_STYLE;
const initalZoomLevel = 11.65;

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
				center: [13.421, 52.508],
				zoom: initalZoomLevel,
				maxZoom: 15,
				minZoom: 10.5,
				maxBounds: [
					[13.29, 52.48], // Southwest coordinates
					[13.56, 52.535], // Northeast coordinates
				],
			});

			// Helper function to adjust the zoom level based on the width
			const adjustZoom = () => {
				const container = mapRef.current?.getContainer();
				const width = container?.clientWidth;
				if (!width || !mapRef.current) {
					return;
				}
				const newZoom = width <= 599 ? 11 : initalZoomLevel;

				if (mapRef.current.getZoom() !== newZoom) {
					mapRef.current.zoomTo(newZoom, { duration: 300 });
				}
			};

			// listener after the map has loaded to set the initial zoom
			mapRef.current.once("load", adjustZoom);

			// listener to update the zoom dynamically
			mapRef.current.on("resize", adjustZoom);

			mapRef.current.addControl(
				new mapboxgl.NavigationControl({ showCompass: false }),
				"top-right",
			);

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

	return (
		<div className="relative w-full h-full flex flex-col-reverse desktop:flex-col">
			<div ref={mapContainerRef} className={`w-full h-[250px] md:h-[500px]`} />
			<MapLegend />
		</div>
	);
};
