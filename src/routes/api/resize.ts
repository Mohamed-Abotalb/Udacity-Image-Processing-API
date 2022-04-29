import express from 'express';
import fs from 'fs';
import path from 'path';
import checkImgParams from '../../utilities/validation';
import resizeImg from '../../utilities/resizing';
const resizeRoute = express.Router();

const thumbDir: string = path.join(__dirname, '../../../images', 'thumbnails');

resizeRoute.get('/', (req: express.Request, res: express.Response): void => {
    const { imageName, width, height } = req.query;

    const newImg: string = path.join(
        thumbDir,
        `${imageName}_${width}_${height}`
    );

    (async (): Promise<void> => {
        if (
            checkImgParams(
                imageName as string,
                width as string,
                height as string
            )
        ) {
            res.send('please enter a valid values');
        } else {
            if (!fs.existsSync(thumbDir)) {
                fs.mkdirSync(thumbDir);
                await resizeImg(
                    imageName as string,
                    newImg,
                    width as string,
                    height as string
                );
                res.sendFile(`${newImg}.jpg`);
            } else {
                if (fs.existsSync(`${newImg}.jpg`)) {
                    res.sendFile(`${newImg}.jpg`);
                } else {
                    await resizeImg(
                        imageName as string,
                        newImg,
                        width as string,
                        height as string
                    );
                    res.sendFile(`${newImg}.jpg`);
                }
            }
        }
    })();
});

export default resizeRoute;
