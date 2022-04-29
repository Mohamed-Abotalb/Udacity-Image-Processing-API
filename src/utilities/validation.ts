const checkImgParams = (
    name: string,
    w: string,
    h: string
): string | undefined => {
    if (!w || !h || !name) {
        return 'invalid values';
    }
    const imgNames: string[] = ['snow', 'green', 'buildings', 'road', 'sunset'];
    const width: number = Number.parseInt(w);
    const height: number = Number.parseInt(h);
    if (
        width <= 0 ||
        height <= 0 ||
        isNaN(width) ||
        isNaN(height) ||
        !imgNames.includes(name)
    ) {
        return 'invalid values';
    }
};

export default checkImgParams;
