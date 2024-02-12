import { create } from 'zustand'

// state
type UtilState = {
    isMenuOpen: boolean
}

// actions
type UtilActions = {
    toggleMenu: () => void
    setIsMenuOpen: (value: boolean) => void
}


// initial state
const initialState: UtilState = {
    isMenuOpen: false
}

// use 
export const useUtilStore = create<UtilState & UtilActions>()(
    (set) => ({

        // initial state
        ...initialState,

        // actions
        toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),

        // set state
        setIsMenuOpen: (value: boolean) => set({ isMenuOpen: value })
    })
)
