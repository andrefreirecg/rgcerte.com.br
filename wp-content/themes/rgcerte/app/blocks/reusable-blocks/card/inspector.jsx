import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody, RangeControl, TextControl
} from '@wordpress/components';

export function Inspector({ attributes, setAttributes }) {
  
  return (
    <InspectorControls>
      <PanelBody
        title="Dimensões do divisor"
      >
        <RangeControl
          label="Largura máxima"
          value={attributes.maxWidth}
          onChange={(value) => setAttributes({ maxWidth: value })}
          min={10}
          max={100}
        />
      </PanelBody>
      <TextControl
        label="link"
        value={attributes.linkAttribute}
        onChange={(value) => {setAttributes({ linkAttribute: value })}}
    />
    </InspectorControls>
  );
}
