const maxDescriptionLength = 690;

export const abridgeText = text => {
    if (text.length > maxDescriptionLength) {
        // abridge text so that the last word is not truncated
        const lastWordBoundary = text.slice(0, 690).lastIndexOf(' ');
        return text.slice(0, lastWordBoundary) + '...';
    }

    return text;
};
