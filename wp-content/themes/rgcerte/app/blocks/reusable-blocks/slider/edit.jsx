import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { Inspector } from './inspector';
import { InspectorSpacing } from '../../controllers/general-spacing/inspector';
import { SpacingClassGenerator } from '../../controllers/general-spacing/class';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';


export function Edit({ attributes, setAttributes }) {

	const handleDragStart = (e) => e.preventDefault();

	let styleButtons = attributes.buttonsStyle ? attributes.buttonsStyle : '';
	let spacingClass = SpacingClassGenerator({ attributes });

	const blockProps = useBlockProps({ className: 'ms-slider ' + spacingClass + ` ${styleButtons}` });

	const innerBlocks = useInnerBlocksProps(
		blockProps,
		{
			template: false,
			templateInsertUpdatesSelection: false,
			allowedBlocks: [],
		},
	);

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

	return (
		<div {...innerBlocks} >
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<InspectorSpacing attributes={attributes} setAttributes={setAttributes} />
			<MediaUpload
				onSelect={(media) => setAttributes({ images: media.map((item) => item.url) })}
				allowedTypes={['image']}
				multiple={true}
				value={attributes.images || []}
				render={({ open }) => (<Button isPrimary onClick={open}>Selecionar/Enviar Mídia</Button>)}
			/>
			{attributes.images.length > 0 && (
			<AliceCarousel
			mouseTracking={true}
			controlsStrategy="alternate"
			disableDotsControls={true}
			animationDuration={attributes.animationDuration}
			animationType={attributes.animationType}
			autoPlay={attributes.autoPlay}
			autoPlayInterval={attributes.autoPlayInterval}
			infinite={attributes.infinite}
			items={attributes.images.map((imageUrl, index) => (
				<img key={index} src={imageUrl} alt={`Slide ${index}`}/>))
			}
			responsive={responsive}
			/>
			)}
		</div>
	);
}
