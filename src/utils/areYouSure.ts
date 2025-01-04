export const areYouSure = (callback: () => void, message = "Are you sure?") => {
    // eslint-disable-next-line no-restricted-globals
    const sure = confirm(message)
    sure && callback()
}