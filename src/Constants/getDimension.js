function getViewportWidth() {
    if (document.documentElement && document.documentElement.clientWidth) {        
        return document.documentElement.clientWidth;
    }
    if (document.body && document.body.clientWidth) {
        return document.body.clientWidth;
    }
    return window.innerWidth;
}

function getViewportHeight() {
    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientHeight;
    }
    if (document.body && document.body.clientHeight) {
        return document.body.clientHeight;
    }
    return window.innerHeight;
}

export function getContainerSize() {
    const screenWidth = getViewportWidth();
    const screenHeight = getViewportHeight();

    return {
        screenWidth,
        screenHeight
    };
}