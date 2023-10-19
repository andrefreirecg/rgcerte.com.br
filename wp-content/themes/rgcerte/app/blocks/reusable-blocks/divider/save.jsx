import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './style.scss';

export function Save({ attributes }) {
  const blockProps = useBlockProps.save({ className: 'ms-divider' });
  const innerBlocks = useInnerBlocksProps.save(blockProps);

  let maxWidth = attributes.maxWidth ? `${attributes.maxWidth}%` : null;
  return (
    <div {...innerBlocks} style={{ 'max-width': maxWidth, 'border-radius': attributes.borderRadius, minHeight: `${attributes.minHeight}px` }}>
    </div>
  );
}
