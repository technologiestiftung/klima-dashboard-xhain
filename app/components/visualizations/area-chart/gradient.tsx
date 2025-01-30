// Gradient.tsx
import React from "react";
import { xhainBlue30, xhainBlue40, xhainBlue20 } from "../colors";

export const Gradient: React.FC = () => {
	return (
		<defs>
			<linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="50%" stopColor={xhainBlue40} stopOpacity={1} />
				<stop offset="80%" stopColor={xhainBlue30} stopOpacity={1} />
				<stop offset="100%" stopColor={xhainBlue20} stopOpacity={1} />
			</linearGradient>
		</defs>
	);
};
