const PLACEHOLDER_IMG = '/img/placeholder.png';

export const toImageUrl = (imagePath: string | undefined) => {
    if (!imagePath) {
        return new URL(PLACEHOLDER_IMG, import.meta.url).href;
    }

    return new URL(imagePath, import.meta.url).href;
};

export const getPlaceholderImage = () => toImageUrl(PLACEHOLDER_IMG);
