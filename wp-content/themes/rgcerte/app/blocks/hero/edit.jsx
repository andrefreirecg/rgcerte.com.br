import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';

export function Edit({ attributes }) {
  const blockProps = useBlockProps({ className: 'Hero Container' });

  const innerBlocks = useInnerBlocksProps(
    blockProps,
    {
      template: [
        ['makersolucoes/container', { className: 'Hero-information' },
          [
            ['core/heading'],
            ['core/paragraph'],
          ],
        ],
      ],
      templateInsertUpdatesSelection: true,
    },
  );

  return (
    <section {...innerBlocks} />
  );
}
