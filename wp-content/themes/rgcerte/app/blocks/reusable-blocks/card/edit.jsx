import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Inspector } from './inspector';
import './edit.scss';

export function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({ className: 'ms-card' });

  const innerBlocks = useInnerBlocksProps(
    blockProps,
    {
      template: [
        ['makersolucoes/container', { className: 'ms-card-container' },
          [
            ['makersolucoes/icone'],
            ['core/heading'],
            ['makersolucoes/divider'],
            ['core/paragraph'],

          ]
        ]
      ],      
      templateInsertUpdatesSelection: true,
    },
  );

  return (
    <div {...blockProps}>
      <Inspector attributes={attributes} setAttributes={setAttributes} />
      <div {...innerBlocks} style={{ 'max-width': `${attributes.maxWidth}%`}}>

      </div>
    </div>
  );
}
