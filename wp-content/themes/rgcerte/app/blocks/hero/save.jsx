import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './style.scss';

export function Save() {
  const blockProps = useBlockProps.save({ className: 'Hero' });
  const innerBlocks = useInnerBlocksProps.save(blockProps);

  return <section {...innerBlocks} />;
}
