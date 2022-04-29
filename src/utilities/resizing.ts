import path from 'path';
import sharp from 'sharp';

const resizeImg = async (
    imgName: string,
    newImg: string,
    w: string,
    h: string
): Promise<string> => {
    const width: number = Number.parseInt(w);
    const height: number = Number.parseInt(h);
    const imgPath: string = path.join(
        __dirname,
        '../../images',
        `${imgName}.jpg`
    );

    await sharp(imgPath).resize(width, height).toFile(`${newImg}.jpg`);

    return 'image is created';
};

export default resizeImg;
