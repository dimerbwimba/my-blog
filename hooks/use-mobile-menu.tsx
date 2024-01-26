import { create } from "zustand";

type MobileMenuStore = {
    isOpen:boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useMobileMenu = create<MobileMenuStore>((set,get) => ({
    isOpen : false,
    onOpen : () => set({isOpen : true}),
    onClose : () => set({isOpen : false}),
}))