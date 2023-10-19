import { Inspector } from './inspector';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';

export function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({ className: 'ms-divider' });

  const innerBlocks = useInnerBlocksProps(
    blockProps,
    {
      template: false,      
      templateInsertUpdatesSelection: false,
      allowedBlocks: [],
    },
  );

  return (
    <div {...innerBlocks} style={{ 'max-width': `${attributes.maxWidth}%`, 'border-radius': attributes.borderRadius, minHeight: `${attributes.minHeight}px`  }} >
      <Inspector attributes={attributes} setAttributes={setAttributes} />
    </div>
  );
}
