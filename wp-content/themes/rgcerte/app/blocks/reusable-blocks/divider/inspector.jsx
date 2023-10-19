import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody, RangeControl
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
        <RangeControl
          label="Altura mínima"
          value={attributes.minHeight}
          onChange={(value) => setAttributes({ minHeight: value })}
          min={2}
          max={100}
        />
      </PanelBody>
      <PanelBody
        title="Arrendondamento da borda"
      >
        <RangeControl
          label="Arredondamento"
          value={attributes.borderRadius}
          onChange={(value) => setAttributes({ borderRadius: value })}
          min={0}
          max={100}
        />
      </PanelBody>
    </InspectorControls>
  );
}
