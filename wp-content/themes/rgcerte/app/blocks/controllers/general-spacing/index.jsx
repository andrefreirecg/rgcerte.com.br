import metadataMobile from '../mobile-controller/attributes.json';
import metadataTablet from '../tablet-controller/attributes.json';
import metadataDesktop from '../desktop-controller/attributes.json';

export const spacingAttributes = {
    ...metadataMobile.attributes,
    ...metadataTablet.attributes,
    ...metadataDesktop.attributes,
};
