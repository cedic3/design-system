import React from 'react';
import type { API_HashEntry } from '@storybook/types';
import { TYPE_TAGS } from '../../.storybook/constants';

export default function renderLabel(item: API_HashEntry) {
  let typeIcons: JSX.Element[] = [];

  if (item.type === 'docs') {
    typeIcons = item.parameters?.tags
      .filter((tag: string) => Object.values(TYPE_TAGS).includes(tag))
      .map((tag: string) => (
        <span key={`${item.id}_${tag}`} className={`type type--${tag}`}>
          {tag}
        </span>
      ));
  }

  return (
    <span className="label">
      {item.name}
      <span>{typeIcons}</span>
    </span>
  );
}
