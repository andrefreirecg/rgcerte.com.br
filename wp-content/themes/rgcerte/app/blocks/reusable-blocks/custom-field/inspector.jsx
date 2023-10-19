import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody, TextControl
} from '@wordpress/components';

export function Inspector({ attributes, setAttributes }) {
  
  return (
    <InspectorControls>
      <PanelBody
        title="Query"
      >
      <TextControl
          label="Key"
          value={attributes.key}
          onChange={(value) => setAttributes({ key: value })}
          />
      </PanelBody>
      
    </InspectorControls>
  );
}
