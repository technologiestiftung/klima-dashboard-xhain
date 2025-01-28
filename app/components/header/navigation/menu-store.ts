import { create } from "zustand";

type MenuStore = {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
	closeMenu: () => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
	isMenuOpen: false,
	setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
	closeMenu: () => set({ isMenuOpen: false }),
}));
