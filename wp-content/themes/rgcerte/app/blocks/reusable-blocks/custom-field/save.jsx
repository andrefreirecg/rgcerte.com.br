import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';

export function Save({ attributes, setAttributes }) {
  const blockProps = useBlockProps.save({ className: 'ms-custom-field' });
  const innerBlocks = useInnerBlocksProps.save(blockProps);

  const key = attributes.key;

  wp_set_post_meta(get_the_ID(), 'key', key);
  return (
    <div {...innerBlocks} >
      <Inspector attributes={attributes} setAttributes={setAttributes} />
      <div className="campo-personalizado">
        Campo Personalizado
      </div>
    </div>
  );
}
