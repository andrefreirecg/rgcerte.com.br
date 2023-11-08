import React from 'react';
import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
import { SpacingClassGenerator } from '../../controllers/general-spacing/class';
import './style.scss';
  

export function Save({ attributes }) {
	let spacingClass = SpacingClassGenerator({ attributes });
  const blockProps = useBlockProps.save({ className: 'ms-accordion ' +  + spacingClass });
  const { children: innerBlocks } = useInnerBlocksProps.save();
  return (
    <div {...blockProps} >
        {innerBlocks}
    </div>
  );
}

