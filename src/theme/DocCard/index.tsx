import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {usePluralForm} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';

import type {Props} from '@theme/DocCard';
import Heading from '@theme/Heading';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

import styles from './styles.module.css';

// Adds Iconify support
import { Icon } from '@iconify/react';

function useCategoryItemsPlural() {
  const {selectMessage} = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        {count},
      ),
    );
}

function CardContainer({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: ReactNode;
}): ReactNode {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer, className)}>
      {children}
    </Link>
  );
}

function CardLayout({
  className,
  href,
  icon,
  iconify,
  title,
  description,
}: {
  className?: string;
  href: string;
  icon: ReactNode;
  iconify: string;
  title: string;
  description?: string;
}): ReactNode {
  return (
    <CardContainer href={href} className={className}>
      <Heading
        as="h2"
        className={clsx('text--truncate', styles.cardTitle)}
        title={title}>
        {/* Adds Iconify icon */}
        <Icon icon={iconify} className={clsx(styles.iconify)}/>{icon} {title}
      </Heading>
      {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}

function CardCategory({item}: {item: PropSidebarItemCategory}): ReactNode {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Adds emoji support for links with the `myEmoji` custom property
  const icon = item.customProps?.myEmoji ?? (isInternalUrl(item.href) ? '🗃️' : '🔗');

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  // Adds Iconify support for links with the `iconify` custom property
  if (item?.customProps?.iconify) {
    return (
      <CardLayout
        className={item.className}
        href={href}
        iconify={item?.customProps?.iconify}
        title={item.label}
        description={item.description ?? categoryItemsPlural(item.items.length)}
      />
    );
  }
  else {
    return (
      <CardLayout
        className={item.className}
        href={href}
        icon={icon}
        title={item.label}
        description={item.description ?? categoryItemsPlural(item.items.length)}
      />
    );
  }
}


function CardLink({item}: {item: PropSidebarItemLink}): ReactNode {
  // Adds emoji support for links with the `myEmoji` custom property
  const icon = item?.customProps?.myEmoji ?? (isInternalUrl(item.href) ? '📄️' : '🔗');
  const doc = useDocById(item.docId ?? undefined);

  // Adds Iconify support for links with the `iconify` custom property
  if (item?.customProps?.iconify) {
    return (
      <CardLayout
        className={item.className}
        href={item.href}
        iconify={item?.customProps?.iconify}
        title={item.label}
        description={item.description ?? doc?.description}
      />
    );
  }
  else {
    return (
      <CardLayout
        className={item.className}
        href={item.href}
        icon={icon}
        title={item.label}
        description={item.description ?? doc?.description}
      />
    );
  }
}

export default function DocCard({item}: Props): ReactNode {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
