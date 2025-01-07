import { create } from "zustand";
import { URLSearchParams } from "url";

interface URLState {
	url: URL;
	setSearchParams: (searchParams: URLSearchParams) => void;
	addSearchParam: (key: string, value: string) => void;
}

let debounceTimeoutId: ReturnType<typeof setTimeout>;

export const useUrlState = create<URLState>()((set, get) => ({
	url: new URL(window.location.href),

	setSearchParams: (searchParams: URLSearchParams) => {
		const url = new URL(get().url);
		url.search = searchParams.toString();

		set({ url });

		clearTimeout(debounceTimeoutId);

		debounceTimeoutId = setTimeout(() => {
			window.history.pushState({}, "", url);
		}, 500);
	},

	addSearchParam: (key: string, value: string) => {
		const url = new URL(get().url);
		url.searchParams.set(key, value);
		const updatedSearchParams = url.searchParams;
		get().setSearchParams(updatedSearchParams);
	},
}));
