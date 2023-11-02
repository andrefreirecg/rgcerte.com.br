import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody, TextControl, 
} from "@wordpress/components";

export function InspectorTablet({ attributes, setAttributes }) {
  
  return (
    <InspectorControls>
      <PanelBody
        title="Espaçamento - Tablet"
        initialOpen={false}
      >
        <h4>Padding - <span class="dashicons dashicons-fullscreen-exit-alt"></span></h4>
        <div className="spacing-controls">
          <TextControl
            type="number"
            label="Topo"
            value={attributes.msPaddingTabletTop}
            onChange={(value) => setAttributes({ msPaddingTabletTop: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Direita"
            value={attributes.msPaddingTabletRight}
            onChange={(value) => setAttributes({ msPaddingTabletRight: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Baixo"
            value={attributes.msPaddingTabletBottom}
            onChange={(value) => {setAttributes({ msPaddingTabletBottom: value }); console.log(attributes.paddingTabletBottom)} }
            min={0}
          />
          <TextControl
            type="number"
            label="Esquerda"
            value={attributes.msPaddingTabletLeft}
            onChange={(value) => setAttributes({ msPaddingTabletLeft: value })}
            min={0}
          />
        </div>
       
        <h4>Margin - <span class="dashicons dashicons-fullscreen-alt"></span></h4>
        <div className="spacing-controls">
          <TextControl
            type="number"
            label="Topo"
            value={attributes.msMarginTabletTop}
            onChange={(value) => setAttributes({ msMarginTabletTop: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Direita"
            value={attributes.msMarginTabletRight}
            onChange={(value) => setAttributes({ msMarginTabletRight: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Baixo"
            value={attributes.msMarginTabletBottom}
            onChange={(value) => setAttributes({ msMarginTabletBottom: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Esquerda"
            value={attributes.msMarginTabletLeft}
            onChange={(value) => setAttributes({ msMarginTabletLeft: value })}
            min={0}
          />
        </div>
      </PanelBody>
    </InspectorControls>
  );
}
