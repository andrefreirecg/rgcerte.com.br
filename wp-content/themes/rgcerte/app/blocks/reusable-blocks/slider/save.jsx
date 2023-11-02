import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { SpacingClassGenerator } from '../../controllers/general-spacing/class';
import './style.scss';

export function Save({ attributes }) {
  let spacingClass = SpacingClassGenerator({ attributes });
  const blockProps = useBlockProps.save({ className: 'ms-slider ' + spacingClass });
  const innerBlocks = useInnerBlocksProps.save(blockProps);
  return (
    <div {...innerBlocks} >
    </div>
  );
}

