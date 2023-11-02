import { Inspector } from './inspector';
import { InspectorSpacing } from '../../controllers/general-spacing/inspector';
import { SpacingClassGenerator } from '../../controllers/general-spacing/class';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './edit.scss';

export function Edit({ attributes, setAttributes }) {
  
  let spacingClass = SpacingClassGenerator({ attributes });
  
  const blockProps = useBlockProps({ className: 'ms-slider ' + spacingClass });

  const innerBlocks = useInnerBlocksProps(
    blockProps,
    {
      template: false,      
      templateInsertUpdatesSelection: false,
      allowedBlocks: [],
    },
  );

  return (
    <div {...innerBlocks} >
      <InspectorSpacing attributes={attributes} setAttributes={setAttributes} />
      <Inspector attributes={attributes} setAttributes={setAttributes} />
      <InnerBlocks />
    </div>
  );
}
