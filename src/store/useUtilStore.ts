import { create } from 'zustand'

// state
type UtilState = {
    isHamburgerMenuClicked: boolean
}

// actions
type UtilActions = {
    toggleHamburgerMenu: () => void
    setIsHamburgerMenuClicked: (value: boolean) => void
}


// initial state
const initialState: UtilState = {
    isHamburgerMenuClicked: false
}

// use 
export const useUtilStore = create<UtilState & UtilActions>()(
    (set) => ({

        // initial state
        ...initialState,

        // actions
        toggleHamburgerMenu: () => set(state => ({ isHamburgerMenuClicked: !state.isHamburgerMenuClicked })),

        // set state
        setIsHamburgerMenuClicked: (value: boolean) => set({ isHamburgerMenuClicked: value })
    })
)
