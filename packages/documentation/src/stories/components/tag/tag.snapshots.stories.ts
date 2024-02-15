import { Args, StoryObj, StoryContext } from '@storybook/web-components';
import { html } from 'lit';
import { bombArgs } from '../../../utils';
import meta from './standard-html/tag.stories';

export default {
  ...meta,
  id: 'eedae2a5-f1e3-4a4b-a332-7ed7c84134c3',
  title: 'Snapshots',
};

type Story = StoryObj;

export const Tag: Story = {
  render: (_args: Args, context: StoryContext) => html`
    <div class="d-flex gap-3 flex-wrap">
      ${['bg-white', 'bg-dark'].map(
        bg => html`
          <div class="${bg + ' d-flex gap-3 flex-wrap p-3'}">
            ${bombArgs({
              color: meta.argTypes?.color?.options,
              showIcon: [true, false],
              size: ['', 'tag-sm'],
              content: ['Tag', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
            }).map((args: Args) => meta.render?.({ ...context.args, ...args }, context))}
          </div>
        `,
      )}
    </div>
  `,
};

export const PostTag: Story = {
  render: (_args: Args) => {
    return html`
      <div class="d-flex gap-3 flex-wrap">
        ${['bg-white', 'bg-dark'].map(
          bg => html`
            <div class="${bg + ' d-flex gap-3 flex-wrap p-3'}">
              ${bombArgs({
                bgColor: meta.argTypes?.color?.options,
                icon: [undefined, 1001],
                size: ['', 'tag-sm'],
                innerHTML: ['Tag', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
              }).map((args: Args) => {
                return html`
                  <post-tag icon=${args.icon} bg-color=${args.bgColor} size=${args.size}>
                    ${args.innerHTML}
                  </post-tag>
                `;
              })}
            </div>
          `,
        )}
      </div>
    `;
  },
};
