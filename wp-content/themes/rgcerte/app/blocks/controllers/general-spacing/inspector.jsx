import { InspectorMobile } from '../mobile-controller/index.jsx';
import { InspectorTablet } from '../tablet-controller';
import { InspectorDesktop } from '../desktop-controller';
import { InspectorControls } from '@wordpress/block-editor';

export function InspectorSpacing({ attributes, setAttributes }) {
  
  return (
    <InspectorControls>
        <InspectorMobile attributes={attributes} setAttributes={setAttributes} />
        <InspectorTablet attributes={attributes} setAttributes={setAttributes} />
        <InspectorDesktop attributes={attributes} setAttributes={setAttributes} />
    </InspectorControls>
  );
}
