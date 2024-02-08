import BackToTopButton from './BackToTopButton'
import ToggleModeButton from './ToggleModeButton'

const FloatingButtons = () => {
    return (
        <div
            className="
                flex flex-col gap-[0.5rem]
                fixed bottom-[var(--padding-x)] right-[var(--padding-x)]
            "
        >
            <BackToTopButton />
            <ToggleModeButton />
        </div>
    )
}

export default FloatingButtons;