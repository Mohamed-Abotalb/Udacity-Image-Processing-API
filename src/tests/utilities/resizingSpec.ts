import resizeImg from '../../utilities/resizing';
import path from 'path';
const newImg: string = path.join(
    __dirname,
    '../../../images',
    'thumbnails',
    'snow_200_200'
);
const imgName: string = 'snow'; // or any name of other images ['snow', 'road', 'green', 'sunset', 'buildings']

it('resizing the image correctly', async (): Promise<void> => {
    const result: string = await resizeImg(imgName, newImg, '200', '200');
    expect(result).toEqual('image is created');
});
