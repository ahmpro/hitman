import {
    requestImages,
    receiveImages,
    errorImages
} from '../../actions/images';

import {
    REQUEST_IMAGES,
    REQUEST_IMAGES_ERROR,
    RECEIVE_IMAGES
} from '../../constants/images';

describe('Images\' actions', () => {

    it('should requests images', () => {
        expect(requestImages()).toMatchObject({
            type: REQUEST_IMAGES
        });
    });

    it('should request images error', () => {
        expect(errorImages()).toMatchObject({
            type: REQUEST_IMAGES_ERROR
        });
    });

    it('should receive images', () => {
        const images = {
            children: [],
            images: [],
            name: '/',
            path: '/'
        };

        expect(receiveImages(images)).toMatchObject({
            type: RECEIVE_IMAGES,
            payload: {images}
        });
    });

});
