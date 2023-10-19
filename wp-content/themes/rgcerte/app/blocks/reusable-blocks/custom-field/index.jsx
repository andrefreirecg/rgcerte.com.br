import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import { Edit } from './edit';
import { Save } from './save';

registerBlockType(metadata, {
  edit: Edit,
  save: () => <InnerBlocks.Content />
});
