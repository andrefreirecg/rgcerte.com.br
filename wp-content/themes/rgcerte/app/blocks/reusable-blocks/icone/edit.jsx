import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';

export function Edit({ attributes }) {
  const blockProps = useBlockProps();

  const innerBlocks = useInnerBlocksProps(
    blockProps,
    {
      template: [
        ['core/image']
      ],      
      templateInsertUpdatesSelection: true,
    },
  );

  return (
    <div {...innerBlocks} />
  );
}
