import $ from 'jquery';

$('.ms-accordion').on('click', function () {
    alert('teste')
    $(this).find('.ms-accordion-body').toggleClass('active');
});

import { Inspector } from './inspector';
import { InspectorSpacing } from '../../controllers/general-spacing/inspector';
import { SpacingClassGenerator } from '../../controllers/general-spacing/class';
import { InnerBlocks ,useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';

export function Edit({ attributes, setAttributes }) {
	const TEMPLATE = [
		['makersolucoes/accordion-header'],
		['makersolucoes/accordion-body'],
	  ];
	let spacingClass = SpacingClassGenerator({ attributes });

	const blockProps = useBlockProps({ className: 'ms-accordion ' + spacingClass });

	const { children: innerBlocks } = useInnerBlocksProps({}, {
		template: TEMPLATE,
		templateLock: true,

	  });
	return (
		<div {...blockProps} >
			{/* <Inspector attributes={attributes} setAttributes={setAttributes} /> */}
			<InspectorSpacing attributes={attributes} setAttributes={setAttributes} />
			{innerBlocks}
		</div>
	);
}
