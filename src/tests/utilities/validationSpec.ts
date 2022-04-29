import checkImgParams from '../../utilities/validation';

it('checkImgParams(snow123, 0, 0) invalid values', () => {
    expect(checkImgParams('snow123', '0', '0')).toEqual('invalid values');
});

it('checkImgParams(green123, 200, 0) invalid values', () => {
    expect(checkImgParams('green123', '200', '0')).toEqual('invalid values');
});

it('checkImgParams(road123, 0, 200) invalid values', () => {
    expect(checkImgParams('road123', '0', '200')).toEqual('invalid values');
});

it('checkImgParams(buildings123, 0, -200) invalid values', () => {
    expect(checkImgParams('buildings123', '0', '-200')).toEqual(
        'invalid values'
    );
});

it('checkImgParams(sunset123, -200, 0) invalid values', () => {
    expect(checkImgParams('sunset123', '-200', '0')).toBe('invalid values');
});

it('checkImgParams(name, -200, -200) invalid values', () => {
    expect(checkImgParams('name', '-200', '-200')).toBe('invalid values');
});

it('checkImgParams(image, a, b) invalid values', () => {
    expect(checkImgParams('image', 'a', 'b')).toBe('invalid values');
});

it('checkImgParams(snowing, a, 200) invalid values', () => {
    expect(checkImgParams('snowing', 'a', '200')).toBe('invalid values');
});

it('checkImgParams(new , 200, b) invalid values', () => {
    expect(checkImgParams('new', '200', 'b')).toBe('invalid values');
});
