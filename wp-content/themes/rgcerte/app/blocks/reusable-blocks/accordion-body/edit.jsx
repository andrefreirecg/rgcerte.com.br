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

	const blockProps = useBlockProps({ className: 'ms-accordion-body active ' + spacingClass });

	const TEMPLATE = [
		['core/paragraph', { placeholder: 'Conteúdo', "style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}} }],
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
