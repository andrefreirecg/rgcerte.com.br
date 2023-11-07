import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';

export function Edit() {
  const blockProps = useBlockProps({ className: 'Hero Container' });

  const innerBlocks = useInnerBlocksProps(
    blockProps,
    {
      template: [
        ['makersolucoes/container', { className: 'Hero-container' },
          [
            ['core/columns', { className: 'Hero-columns' }, [
              ['core/column', { className: 'Hero-column', width: '50%' }, [
                ['core/heading', { level: 1, className: 'Hero-title' }],
                ['core/paragraph', { className: 'Hero-description' }],
                ['core/buttons', [
                  ['core/button', { "backgroundColor": "whit", "style": { "color": { "text": "#1b1b1b" }, "border": { "width": "0px", "style": "none" } } }]
                ]]
              ]],
              ['core/column', { className: 'Hero-column', width: '50%' }, [
                ['core/image', { "sizeSlug": "full", "linkDestination": "none" }]
              ]]
            ]]
          ]
        ]
      ],      
      templateInsertUpdatesSelection: true,
      allowedBlocks: []
    },
  );

  return (
    <section {...innerBlocks} />
  );
}
