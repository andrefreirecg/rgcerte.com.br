import React from 'react';
import ReactDom from 'react-dom';
import AliceCarousel from 'react-alice-carousel';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { SpacingClassGenerator } from '../../controllers/general-spacing/class';

import './style.scss';

export function Save({ attributes }) {
  let styleButtons = attributes.buttonsStyle ? attributes.buttonsStyle : '';
	let spacingClass = SpacingClassGenerator({ attributes });
  let responsive = {
    0: {
      items: attributes.responsiveMobile,
      itemsFit: 'contain'
    },
    640: {
      items: attributes.responsiveTablet,
      itemsFit: 'contain'
    },
    1024: {
      items: attributes.responsiveDesktop,
      itemsFit: 'contain'
    },
  };
  const handleDragStart = (e) => e.preventDefault();
  const images = attributes.images.map((imageUrl, index) => (
    <img key={index} src={imageUrl} alt={`Slide ${index}`} />
  ));
  const blockProps = useBlockProps.save({ className: 'ms-slider' +  + spacingClass + ` ${styleButtons}`});
  const innerBlocks = useInnerBlocksProps.save(blockProps);
  return (
    <div {...innerBlocks} >
      {attributes.images.length > 0 && (
        <AliceCarousel
          mouseTracking={true}
          animationDuration={attributes.animationDuration}
          animationType={attributes.animationType}
          autoPlay={attributes.autoPlay}
          autoPlayInterval={attributes.autoPlayInterval}
          infinite={attributes.infinite}
          items={images}
          responsive={responsive}
        />
      )}
    </div>
  );
}

