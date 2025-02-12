type TrackingEvent = {
	eventCategory?: string;
	eventAction: string;
	eventName: string;
};

export function trackInteraction({
	eventCategory = "user-interaction",
	eventAction,
	eventName,
}: TrackingEvent) {
	/**
	 * Schema: ["trackEvent", "<event-category>", "<event-action>", "<event-name>"]
	 */
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	window._paq.push(["trackEvent", eventCategory, eventAction, eventName]);
}
