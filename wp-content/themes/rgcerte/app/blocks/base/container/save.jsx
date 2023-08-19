import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classNames from 'classnames';
import './style.scss';

export function Save({ attributes }) {
  const { tagName: Tag, classContainer } = attributes;
  const blockProps = useBlockProps.save({ className: classNames(['ContainerBlocks', classContainer]) });

  return <Tag {...useInnerBlocksProps.save(blockProps)} />;
}
