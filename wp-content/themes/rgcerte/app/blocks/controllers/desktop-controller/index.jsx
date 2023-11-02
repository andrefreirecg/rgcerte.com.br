import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody, TextControl, 
} from "@wordpress/components";

export function InspectorDesktop({ attributes, setAttributes }) {
  
  return (
    <InspectorControls>
      <PanelBody
        title="Espaçamento - Desktop"
        initialOpen={false}
      >
        <h4>Padding - <span class="dashicons dashicons-fullscreen-exit-alt"></span></h4>
        <div className="spacing-controls">
          <TextControl
            type="number"
            label="Topo"
            value={attributes.msPaddingDesktopTop}
            onChange={(value) => setAttributes({ msPaddingDesktopTop: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Direita"
            value={attributes.msPaddingDesktopRight}
            onChange={(value) => setAttributes({ msPaddingDesktopRight: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Baixo"
            value={attributes.msPaddingDesktopBottom}
            onChange={(value) => {setAttributes({ msPaddingDesktopBottom: value }); console.log(attributes.paddingDesktopBottom)} }
            min={0}
          />
          <TextControl
            type="number"
            label="Esquerda"
            value={attributes.msPaddingDesktopLeft}
            onChange={(value) => setAttributes({ msPaddingDesktopLeft: value })}
            min={0}
          />
        </div>
       
        <h4>Margin - <span class="dashicons dashicons-fullscreen-alt"></span></h4>
        <div className="spacing-controls">
          <TextControl
            type="number"
            label="Topo"
            value={attributes.msMarginDesktopTop}
            onChange={(value) => setAttributes({ msMarginDesktopTop: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Direita"
            value={attributes.msMarginDesktopRight}
            onChange={(value) => setAttributes({ msMarginDesktopRight: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Baixo"
            value={attributes.msMarginDesktopBottom}
            onChange={(value) => setAttributes({ msMarginDesktopBottom: value })}
            min={0}
          />
          <TextControl
            type="number"
            label="Esquerda"
            value={attributes.msMarginDesktopLeft}
            onChange={(value) => setAttributes({ msMarginDesktopLeft: value })}
            min={0}
          />
        </div>
      </PanelBody>
    </InspectorControls>
  );
}
