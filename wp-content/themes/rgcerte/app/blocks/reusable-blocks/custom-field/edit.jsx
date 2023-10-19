import { Inspector } from './inspector';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';

export function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({ className: 'ms-custom-field' });

  const innerBlocks = useInnerBlocksProps(
    blockProps,
    {
      template: false,      
      templateInsertUpdatesSelection: false,
      allowedBlocks: [],
    },
  );

  return (
    <div {...blockProps} >
      <Inspector attributes={attributes} setAttributes={setAttributes} />
      <div className="campo-personalizado" style={{"text-align" : attributes.align}}>
        Campo personalizado
      </div>
    </div>
  );
}
