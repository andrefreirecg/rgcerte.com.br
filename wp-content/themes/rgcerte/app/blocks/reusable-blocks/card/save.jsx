import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './style.scss';

export function Save(attributes) {
  const blockProps = useBlockProps.save({ className: 'ms-card' });
  const innerBlocks = useInnerBlocksProps.save(blockProps);
  
  let maxWidth = attributes.attributes.maxWidth ? `${attributes.attributes.maxWidth}%` : null;
  const marginBottom = (attributes.attributes.style && attributes.attributes.style.spacing.margin && attributes.attributes.style.spacing.margin.bottom ? attributes.attributes.style.spacing.margin.bottom.slice(-2) : 0);
  const marginTop = (attributes.attributes.style && attributes.attributes.style.spacing.margin && attributes.attributes.style.spacing.margin.top ? attributes.attributes.style.spacing.margin.top.slice(-2) : 0);
  const marginLeft = (attributes.attributes.style && attributes.attributes.style.spacing.margin && attributes.attributes.style.spacing.margin.left ? attributes.attributes.style.spacing.margin.left.slice(-2) : 0);
  const marginRight = (attributes.attributes.style && attributes.attributes.style.spacing.margin && attributes.attributes.style.spacing.margin.right ? attributes.attributes.style.spacing.margin.right.slice(-2) : 0);
  const paddingBottom = (attributes.attributes.style && attributes.attributes.style.spacing.padding ? attributes.attributes.style.spacing.padding.bottom.slice(-2) : 0);
  const paddingTop = (attributes.attributes.style && attributes.attributes.style.spacing.padding ? attributes.attributes.style.spacing.padding.top.slice(-2) : 0);
  const paddingLeft = (attributes.attributes.style && attributes.attributes.style.spacing.padding ? attributes.attributes.style.spacing.padding.left.slice(-2) : 0);
  const paddingRight = (attributes.attributes.style && attributes.attributes.style.spacing.padding ? attributes.attributes.style.spacing.padding.right.slice(-2) : 0);
  const styles = {
    marginBottom: `var(--wp--preset--spacing--${marginBottom});`,
    marginTop: `var(--wp--preset--spacing--${marginTop});`,
    marginLeft: `var(--wp--preset--spacing--${marginLeft});`,
    marginRight: `var(--wp--preset--spacing--${marginRight});`,
    paddingBottom: `var(--wp--preset--spacing--${paddingBottom});`,
    paddingTop: `var(--wp--preset--spacing--${paddingTop});`,
    paddingLeft: `var(--wp--preset--spacing--${paddingLeft});`,
    paddingRight: `var(--wp--preset--spacing--${marginRight});`,
    font: `font-family: ${attributes.attributes.fontFamily};`,
    color: `color: var(--wp--preset--color--${attributes.attributes.textColor});`,
    backgroundColor: `background-color: ${attributes.attributes.backgroundColor};`,
    fontSize: `font-size: var(--wp--preset--font-size--${attributes.attributes.fontSize});`,
    'max-width': maxWidth
  };
  console.log(attributes.attributes)
  return (
    <>
      {attributes.attributes.linkAttribute ? (
        <a href={attributes.attributes.linkAttribute} target="_blank" rel="noopener noreferrer">
          <div {...innerBlocks} style={styles} />
        </a>
      ) : (
        <div {...innerBlocks} style={styles} />
      )}
    </>
  );
}
