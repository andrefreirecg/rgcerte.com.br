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

	let spacingClass = SpacingClassGenerator({ attributes });

	const blockProps = useBlockProps({ className: 'ms-accordion-header ' + spacingClass });

	const TEMPLATE = [
		['core/heading', { placeholder: 'Título' }],
	  ];
	const { children: innerBlocks } = useInnerBlocksProps({}, {
		template: TEMPLATE,
		templateLock: true,

	  });

	return (
		<div {...blockProps} >
			<div className="ms-accordion-body-content">
				{innerBlocks}
			</div>
		</div>
	);
}
