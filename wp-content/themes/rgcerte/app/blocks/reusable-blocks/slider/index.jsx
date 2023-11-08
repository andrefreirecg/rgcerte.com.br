import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import {spacingAttributes} from '../../controllers/general-spacing/index';
import { Edit } from './edit';
import { Save } from './save';
const customAttributes = {
  ...metadata.attributes,
  ...spacingAttributes,
};
registerBlockType(metadata.name, {
  ...metadata,
  attributes: customAttributes,
  edit: Edit,
  save: Save,
});
