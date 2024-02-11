import { create } from 'zustand'

// state
type UtilState = {
    isMobileMenuClicked: boolean
}

// actions
type UtilActions = {
    toggleMobileMenu: () => void
    setIsMobileMenuClicked: (value: boolean) => void
}


// initial state
const initialState: UtilState = {
    isMobileMenuClicked: false
}

// use 
export const useUtilStore = create<UtilState & UtilActions>()(
    (set) => ({

        // initial state
        ...initialState,

        // actions
        toggleMobileMenu: () => set(state => ({ isMobileMenuClicked: !state.isMobileMenuClicked })),

        // set state
        setIsMobileMenuClicked: (value: boolean) => set({ isMobileMenuClicked: value })
    })
)
