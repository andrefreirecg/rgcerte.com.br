import { store as blockEditorStore, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export function Edit({ attributes, clientId }) {
  const {
    tagName: TagName, allowedBlocks, template,
  } = attributes;

  const hasInnerBlocks = useSelect(
    (select) => {
      const { getBlock } = select(blockEditorStore);
      const block = getBlock(clientId);
      return !!(block && block.innerBlocks.length);
    },
    [clientId],
  );

  const minHeightContainer = !hasInnerBlocks ? { minHeight: '100px' } : '';

  const blockProps = useBlockProps({ className: 'ContainerBlocks', style: { ...minHeightContainer } });

  const innerBlocksProps = useInnerBlocksProps(
    blockProps,
    {
      template,
      allowedBlocks,
    },
  );

  return (
    <TagName {...innerBlocksProps} />
  );
}
