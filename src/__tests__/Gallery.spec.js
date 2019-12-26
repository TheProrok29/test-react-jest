import renderer from 'react-test-renderer';
import React from 'react';
import Gallery from '../Gallery/Gallery.js';

describe('Gallery', () => {
    it('should render', () => {
        const imageList = [
            {
                image: 'photo.jpg',
                date: '20 July',
                likes: 13,
                comments: [],
            }
        ]
        const component = renderer
            .create(<Gallery imageList={imageList} />)
            .toJSON();

            expect(component).toMatchSnapshot();
    })
})
