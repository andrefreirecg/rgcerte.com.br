import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody, TextControl, 
} from "@wordpress/components";

export function InspectorMobile({ attributes, setAttributes }) {
  return (
    <InspectorControls>
      <PanelBody
        title="Espaçamento - Mobile"
        initialOpen={false}
>
        <h4>Padding - <span class="dashicons dashicons-fullscreen-exit-alt"></span></h4>
        <div className="spacing-controls">
          <TextControl
            type="number"
            label="Topo"
            value={attributes.msPaddingMobileTop}
            onChange={(value) => setAttributes({ msPaddingMobileTop: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Direita"
            value={attributes.msPaddingMobileRight}
            onChange={(value) => setAttributes({ msPaddingMobileRight: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Baixo"
            value={attributes.msPaddingMobileBottom}
            onChange={(value) => {setAttributes({ msPaddingMobileBottom: value }); console.log(attributes.paddingMobileBottom)} }
            min={0}
          />
          <TextControl
            type="number"
            label="Esquerda"
            value={attributes.msPaddingMobileLeft}
            onChange={(value) => setAttributes({ msPaddingMobileLeft: value })}
            min={0}
          />
        </div>
       
        <h4>Margin - <span class="dashicons dashicons-fullscreen-alt"></span></h4>
        <div className="spacing-controls">
          <TextControl
            type="number"
            label="Topo"
            value={attributes.msMarginMobileTop}
            onChange={(value) => setAttributes({ msMarginMobileTop: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Direita"
            value={attributes.msMarginMobileRight}
            onChange={(value) => setAttributes({ msMarginMobileRight: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Baixo"
            value={attributes.msMarginMobileBottom}
            onChange={(value) => setAttributes({ msMarginMobileBottom: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Esquerda"
            value={attributes.msMarginMobileLeft}
            onChange={(value) => setAttributes({ msMarginMobileLeft: value })}
            min={0}
          />
        </div>
      </PanelBody>
    </InspectorControls>
  );
}
