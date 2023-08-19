import { useBlockProps } from '@wordpress/block-editor';
import './edit.scss';

export function Edit({ attributes }) {
  const blockProps = useBlockProps({ className: 'Post' });

  return (
    <section {...blockProps}>
      <p>Esse bloco exibe uma lista de post</p>
    </section>
  );
}
