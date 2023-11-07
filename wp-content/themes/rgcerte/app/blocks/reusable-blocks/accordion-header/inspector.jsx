import { InspectorControls } from '@wordpress/block-editor';
import {  PanelBody,
          TextControl,
          SelectControl,
          CheckboxControl
        } from '@wordpress/components';

export function Inspector({ attributes, setAttributes }) {
  return (
    <InspectorControls>
      <PanelBody title="Configurações do Slider">
        <CheckboxControl
          label="Auto Play"
          checked={attributes.autoPlay}
          onChange={(value) => setAttributes({ autoPlay: value })}
        />
        <CheckboxControl
          label="Loop inifito"
          checked={attributes.infinite}
          onChange={(value) => setAttributes({ infinite: value })}
        />


      </PanelBody>
      <PanelBody title="Configurações avançadas" initialOpen={false} >
        <h3 className="ms-inspector-slider">Tempo da animação</h3>
      <TextControl
          type="number"
          value={attributes.animationDuration}
          onChange={(value) => setAttributes({ animationDuration: value })}
        />
        <SelectControl
          label="Estilo botões"
          value={attributes.buttonsStyle}
          options={[
            { label: 'Centralizado', value: 'buttons-centered' },
            { label: 'Abaixo do slider', value: '' },
          ]}
          onChange={(value) => setAttributes({ buttonsStyle: value })}
        />
        <SelectControl
          label="Tipo de animação"
          value={attributes.animationType}
          options={[
            { label: 'Slide', value: 'slide' },
            { label: 'Fade', value: 'fade' },
          ]}
          onChange={(value) => setAttributes({ animationType: value })}
        />
        
        <h3 className="ms-inspector-slider">Intervalo do Auto Play</h3>
        <TextControl
          type="number"
          value={attributes.autoPlayInterval}
          onChange={(value) => setAttributes({ autoPlayInterval: value })}
        />
      </PanelBody>
      <PanelBody title="Configurações de responsividade" initialOpen={false} >
      <h3 className="ms-inspector-slider">Quantidade de itens: Mobile
      <TextControl
          type="number"
          value={attributes.responsiveMobile}
          onChange={(value) => setAttributes({ responsiveMobile: value })}
        />
        </h3>
        <h3 className="ms-inspector-slider">Quantidade de itens: Tablet
        <TextControl
          type="number"
          value={attributes.responsiveTablet}
          onChange={(value) => setAttributes({ responsiveTablet: value })}
        />
        </h3>
        <h3 className="ms-inspector-slider">Quantidade de itens: Desktop
        <TextControl
          type="number"
          value={attributes.responsiveDesktop}
          onChange={(value) => setAttributes({ responsiveDesktop: value })}
        />
        </h3>
      </PanelBody>
    </InspectorControls>
  );
}
