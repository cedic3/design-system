/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { HeadingLevel } from "./components/post-accordion-item/heading-levels";
import { AlertType } from "./components/post-alert/alert-types";
import { Placement } from "@floating-ui/dom";
export { HeadingLevel } from "./components/post-accordion-item/heading-levels";
export { AlertType } from "./components/post-alert/alert-types";
export { Placement } from "@floating-ui/dom";
export namespace Components {
    interface PostAccordion {
        /**
          * Collapses all `post-accordion-item`.
         */
        "collapseAll": () => Promise<void>;
        /**
          * Expands all `post-accordion-item`.  If `close-others` is `true` and all items are closed, it will open the first one. Otherwise, it will keep the opened one.
         */
        "expandAll": () => Promise<void>;
        /**
          * If `true`, multiple `post-accordion-item` can be open at the same time.
         */
        "multiple": boolean;
        /**
          * Toggles the `post-accordion-item` with the given id.
         */
        "toggle": (id: string) => Promise<void>;
    }
    interface PostAccordionItem {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Defines the hierarchical level of the accordion item header within the headings structure.
         */
        "headingLevel"?: HeadingLevel;
        /**
          * Triggers the collapse programmatically.
         */
        "toggle": (force?: boolean) => Promise<boolean>;
    }
    interface PostAlert {
        /**
          * Triggers alert dismissal programmatically (same as clicking on the close button (×)).
         */
        "dismiss": () => Promise<void>;
        /**
          * The label to use for the close button of a dismissible alert.
         */
        "dismissLabel": string;
        /**
          * If `true`, a close button (×) is displayed and the alert can be dismissed by the user.
         */
        "dismissible": boolean;
        /**
          * If `true`, the alert is positioned at the bottom of the window, from edge to edge.
         */
        "fixed": boolean;
        /**
          * The icon to display in the alert. By default, the icon depends on the alert type.  If `none`, no icon is displayed.
         */
        "icon": string;
        /**
          * The type of the alert.
         */
        "type": AlertType;
    }
    /**
     * @class PostCardControl - representing a stencil component
     */
    interface PostCardControl {
        /**
          * Defines the `checked` attribute of the control. If `true`, the control is selected at its value will be included in the forms data.
         */
        "checked": boolean;
        /**
          * Defines the description in the control-label.
         */
        "description": string;
        /**
          * Defines the `disabled` attribute of the control. If `true`, the user can not interact with the control and the controls value will not be included in the forms data.
         */
        "disabled": boolean;
        /**
          * Defines the icon `name` inside of the card. <span className="alert alert-sm alert-info">If not set the icon will not show up.</span>
         */
        "icon": string;
        /**
          * Defines the text in the control-label.
         */
        "label": string;
        /**
          * Defines the `name` attribute of the control. <span className="alert alert-sm alert-info">This is a required property, when the control is used in a native `form`. If not specified, a native `form` will never contain this controls value.</span> <span className="alert alert-sm alert-info">This is a required property, when the control is used with type `radio`.</span>
         */
        "name": string;
        /**
          * A public method to reset the controls `checked` and `validity` state. The state is set to `null`, so it's neither valid nor invalid.
         */
        "reset": () => Promise<void>;
        /**
          * Defines the `type` attribute of the control.
         */
        "type": 'checkbox' | 'radio';
        /**
          * Defines the validation `validity` of the control. To reset validity to an undefiend state, simply remove the attribute from the control.
         */
        "validity": null | 'true' | 'false';
        /**
          * Defines the `value` attribute of the control. <span className="alert alert-sm alert-info">This is a required property, when the control is used with type `radio`.</span>
         */
        "value": string;
    }
    interface PostCollapsible {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Triggers the collapse programmatically.  If there is a collapsing transition running already, it will be reversed.
         */
        "toggle": (open?: boolean) => Promise<boolean>;
    }
    /**
     * @class PostIcon - representing a stencil component
     */
    interface PostIcon {
        /**
          * The name of the animation.
         */
        "animation"?: Animation | null;
        /**
          * The base path, where the icons are located (must be a public url).<br/>Leave this field empty to use the default cdn url.
         */
        "base"?: string | null;
        /**
          * When set to `true`, the icon will be flipped horizontally.
         */
        "flipH"?: boolean;
        /**
          * When set to `true`, the icon will be flipped vertically.
         */
        "flipV"?: boolean;
        /**
          * The name/id of the icon (e.g. 1000, 1001, ...).
         */
        "name": string;
        /**
          * The number of degree for the css rotate transformation.
         */
        "rotate"?: number | null;
        /**
          * The number for the css scale transformation.
         */
        "scale"?: number | null;
    }
    interface PostPopover {
        /**
          * Show a little indicator arrow
         */
        "arrow"?: boolean;
        /**
          * Define the caption of the close button for assistive technology
         */
        "closeButtonCaption": string;
        /**
          * Programmatically hide this popover
         */
        "hide": () => Promise<void>;
        /**
          * Defines the placement of the popover according to the floating-ui options available at https://floating-ui.com/docs/computePosition#placement. Popoverss are automatically flipped to the opposite side if there is not enough available space and are shifted towards the viewport if they would overlap edge boundaries.
         */
        "placement"?: Placement;
        /**
          * Programmatically display the popover
          * @param target An element with [data-popover-target="id"] where the popover should be shown
         */
        "show": (target: HTMLElement) => Promise<void>;
        /**
          * Toggle popover display
          * @param target An element with [data-popover-target="id"] where the popover should be anchored to
          * @param force Pass true to always show or false to always hide
         */
        "toggle": (target: HTMLElement, force?: boolean) => Promise<void>;
    }
    interface PostPopovercontainer {
        /**
          * Wheter or not to display a little pointer arrow
         */
        "arrow"?: boolean;
        /**
          * Programmatically hide this tooltip
         */
        "hide": () => Promise<void>;
        /**
          * Defines the placement of the tooltip according to the floating-ui options available at https://floating-ui.com/docs/computePosition#placement. Tooltips are automatically flipped to the opposite side if there is not enough available space and are shifted towards the viewport if they would overlap edge boundaries.
         */
        "placement"?: Placement;
        /**
          * Programmatically display the tooltip
          * @param target An element with [data-tooltip-target="id"] where the tooltip should be shown
         */
        "show": (target: HTMLElement) => Promise<void>;
        /**
          * Toggle tooltip display
          * @param target An element with [data-tooltip-target="id"] where the tooltip should be shown
          * @param force Pass true to always show or false to always hide
         */
        "toggle": (target: HTMLElement, force?: boolean) => Promise<boolean>;
    }
    interface PostTabHeader {
        /**
          * The name of the panel controlled by the tab header.
         */
        "panel": HTMLPostTabPanelElement['name'];
    }
    interface PostTabPanel {
        /**
          * The name of the panel, used to associate it with a tab header.
         */
        "name": string;
    }
    interface PostTabs {
        /**
          * The name of the panel that is initially shown. If not specified, it defaults to the panel associated with the first tab.  **Changing this value after initialization has no effect.**
         */
        "activePanel": HTMLPostTabPanelElement['name'];
        /**
          * Shows the panel with the given name and selects its associated tab. Any other panel that was previously shown becomes hidden and its associated tab is unselected.
         */
        "show": (panelName: string) => Promise<void>;
    }
    interface PostTooltip {
        /**
          * Wheter or not to display a little pointer arrow
         */
        "arrow"?: boolean;
        /**
          * Programmatically hide this tooltip
         */
        "hide": () => Promise<void>;
        /**
          * Defines the placement of the tooltip according to the floating-ui options available at https://floating-ui.com/docs/computePosition#placement. Tooltips are automatically flipped to the opposite side if there is not enough available space and are shifted towards the viewport if they would overlap edge boundaries.
         */
        "placement"?: Placement;
        /**
          * Programmatically display the tooltip
          * @param target An element with [data-tooltip-target="id"] where the tooltip should be shown
         */
        "show": (target: HTMLElement) => Promise<void>;
        /**
          * Toggle tooltip display
          * @param target An element with [data-tooltip-target="id"] where the tooltip should be shown
          * @param force Pass true to always show or false to always hide
         */
        "toggle": (target: HTMLElement, force?: boolean) => Promise<void>;
    }
}
export interface PostAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostAlertElement;
}
export interface PostCardControlCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostCardControlElement;
}
export interface PostCollapsibleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostCollapsibleElement;
}
export interface PostPopovercontainerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostPopovercontainerElement;
}
export interface PostTabsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostTabsElement;
}
declare global {
    interface HTMLPostAccordionElement extends Components.PostAccordion, HTMLStencilElement {
    }
    var HTMLPostAccordionElement: {
        prototype: HTMLPostAccordionElement;
        new (): HTMLPostAccordionElement;
    };
    interface HTMLPostAccordionItemElement extends Components.PostAccordionItem, HTMLStencilElement {
    }
    var HTMLPostAccordionItemElement: {
        prototype: HTMLPostAccordionItemElement;
        new (): HTMLPostAccordionItemElement;
    };
    interface HTMLPostAlertElementEventMap {
        "dismissed": void;
    }
    interface HTMLPostAlertElement extends Components.PostAlert, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPostAlertElementEventMap>(type: K, listener: (this: HTMLPostAlertElement, ev: PostAlertCustomEvent<HTMLPostAlertElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPostAlertElementEventMap>(type: K, listener: (this: HTMLPostAlertElement, ev: PostAlertCustomEvent<HTMLPostAlertElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPostAlertElement: {
        prototype: HTMLPostAlertElement;
        new (): HTMLPostAlertElement;
    };
    interface HTMLPostCardControlElementEventMap {
        "input": boolean;
        "change": boolean;
    }
    /**
     * @class PostCardControl - representing a stencil component
     */
    interface HTMLPostCardControlElement extends Components.PostCardControl, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPostCardControlElementEventMap>(type: K, listener: (this: HTMLPostCardControlElement, ev: PostCardControlCustomEvent<HTMLPostCardControlElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPostCardControlElementEventMap>(type: K, listener: (this: HTMLPostCardControlElement, ev: PostCardControlCustomEvent<HTMLPostCardControlElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPostCardControlElement: {
        prototype: HTMLPostCardControlElement;
        new (): HTMLPostCardControlElement;
    };
    interface HTMLPostCollapsibleElementEventMap {
        "collapseChange": boolean;
    }
    interface HTMLPostCollapsibleElement extends Components.PostCollapsible, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPostCollapsibleElementEventMap>(type: K, listener: (this: HTMLPostCollapsibleElement, ev: PostCollapsibleCustomEvent<HTMLPostCollapsibleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPostCollapsibleElementEventMap>(type: K, listener: (this: HTMLPostCollapsibleElement, ev: PostCollapsibleCustomEvent<HTMLPostCollapsibleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPostCollapsibleElement: {
        prototype: HTMLPostCollapsibleElement;
        new (): HTMLPostCollapsibleElement;
    };
    /**
     * @class PostIcon - representing a stencil component
     */
    interface HTMLPostIconElement extends Components.PostIcon, HTMLStencilElement {
    }
    var HTMLPostIconElement: {
        prototype: HTMLPostIconElement;
        new (): HTMLPostIconElement;
    };
    interface HTMLPostPopoverElement extends Components.PostPopover, HTMLStencilElement {
    }
    var HTMLPostPopoverElement: {
        prototype: HTMLPostPopoverElement;
        new (): HTMLPostPopoverElement;
    };
    interface HTMLPostPopovercontainerElementEventMap {
        "postPopoverToggled": boolean;
    }
    interface HTMLPostPopovercontainerElement extends Components.PostPopovercontainer, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPostPopovercontainerElementEventMap>(type: K, listener: (this: HTMLPostPopovercontainerElement, ev: PostPopovercontainerCustomEvent<HTMLPostPopovercontainerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPostPopovercontainerElementEventMap>(type: K, listener: (this: HTMLPostPopovercontainerElement, ev: PostPopovercontainerCustomEvent<HTMLPostPopovercontainerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPostPopovercontainerElement: {
        prototype: HTMLPostPopovercontainerElement;
        new (): HTMLPostPopovercontainerElement;
    };
    interface HTMLPostTabHeaderElement extends Components.PostTabHeader, HTMLStencilElement {
    }
    var HTMLPostTabHeaderElement: {
        prototype: HTMLPostTabHeaderElement;
        new (): HTMLPostTabHeaderElement;
    };
    interface HTMLPostTabPanelElement extends Components.PostTabPanel, HTMLStencilElement {
    }
    var HTMLPostTabPanelElement: {
        prototype: HTMLPostTabPanelElement;
        new (): HTMLPostTabPanelElement;
    };
    interface HTMLPostTabsElementEventMap {
        "tabChange": HTMLPostTabPanelElement['name'];
    }
    interface HTMLPostTabsElement extends Components.PostTabs, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPostTabsElementEventMap>(type: K, listener: (this: HTMLPostTabsElement, ev: PostTabsCustomEvent<HTMLPostTabsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPostTabsElementEventMap>(type: K, listener: (this: HTMLPostTabsElement, ev: PostTabsCustomEvent<HTMLPostTabsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPostTabsElement: {
        prototype: HTMLPostTabsElement;
        new (): HTMLPostTabsElement;
    };
    interface HTMLPostTooltipElement extends Components.PostTooltip, HTMLStencilElement {
    }
    var HTMLPostTooltipElement: {
        prototype: HTMLPostTooltipElement;
        new (): HTMLPostTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "post-accordion": HTMLPostAccordionElement;
        "post-accordion-item": HTMLPostAccordionItemElement;
        "post-alert": HTMLPostAlertElement;
        "post-card-control": HTMLPostCardControlElement;
        "post-collapsible": HTMLPostCollapsibleElement;
        "post-icon": HTMLPostIconElement;
        "post-popover": HTMLPostPopoverElement;
        "post-popovercontainer": HTMLPostPopovercontainerElement;
        "post-tab-header": HTMLPostTabHeaderElement;
        "post-tab-panel": HTMLPostTabPanelElement;
        "post-tabs": HTMLPostTabsElement;
        "post-tooltip": HTMLPostTooltipElement;
    }
}
declare namespace LocalJSX {
    interface PostAccordion {
        /**
          * If `true`, multiple `post-accordion-item` can be open at the same time.
         */
        "multiple"?: boolean;
    }
    interface PostAccordionItem {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Defines the hierarchical level of the accordion item header within the headings structure.
         */
        "headingLevel"?: HeadingLevel;
    }
    interface PostAlert {
        /**
          * The label to use for the close button of a dismissible alert.
         */
        "dismissLabel"?: string;
        /**
          * If `true`, a close button (×) is displayed and the alert can be dismissed by the user.
         */
        "dismissible"?: boolean;
        /**
          * If `true`, the alert is positioned at the bottom of the window, from edge to edge.
         */
        "fixed"?: boolean;
        /**
          * The icon to display in the alert. By default, the icon depends on the alert type.  If `none`, no icon is displayed.
         */
        "icon"?: string;
        /**
          * An event emitted when the alert element is dismissed, after the transition. It has no payload and only relevant for dismissible alerts.
         */
        "onDismissed"?: (event: PostAlertCustomEvent<void>) => void;
        /**
          * The type of the alert.
         */
        "type"?: AlertType;
    }
    /**
     * @class PostCardControl - representing a stencil component
     */
    interface PostCardControl {
        /**
          * Defines the `checked` attribute of the control. If `true`, the control is selected at its value will be included in the forms data.
         */
        "checked"?: boolean;
        /**
          * Defines the description in the control-label.
         */
        "description"?: string;
        /**
          * Defines the `disabled` attribute of the control. If `true`, the user can not interact with the control and the controls value will not be included in the forms data.
         */
        "disabled"?: boolean;
        /**
          * Defines the icon `name` inside of the card. <span className="alert alert-sm alert-info">If not set the icon will not show up.</span>
         */
        "icon"?: string;
        /**
          * Defines the text in the control-label.
         */
        "label": string;
        /**
          * Defines the `name` attribute of the control. <span className="alert alert-sm alert-info">This is a required property, when the control should participate in a native `form`. If not specified, a native `form` will never contain this controls value.</span> <span className="alert alert-sm alert-info">This is a required property, when the control is used with type `radio`.</span>
         */
        "name"?: string;
        /**
          * An event emitted whenever the components checked state is toggled. The event payload (emitted under `event.detail.state`) is a boolean: `true` if the component is checked, `false` if it is unchecked. <span className="alert alert-sm alert-info">If the component is used with type `radio`, it will only emit this event, when the checked state is changing to `true`.</span>
         */
        "onChange"?: (event: PostCardControlCustomEvent<boolean>) => void;
        /**
          * An event emitted whenever the components checked state is toggled. The event payload (emitted under `event.detail.state`) is a boolean: `true` if the component is checked, `false` if it is unchecked.
         */
        "onInput"?: (event: PostCardControlCustomEvent<boolean>) => void;
        /**
          * Defines the `type` attribute of the control.
         */
        "type": 'checkbox' | 'radio';
        /**
          * Defines the validation `validity` of the control. To reset validity to an undefiend state, simply remove the attribute from the control.
         */
        "validity"?: null | 'true' | 'false';
        /**
          * Defines the `value` attribute of the control. <span className="alert alert-sm alert-info">This is a required property, when the control is used with type `radio`.</span>
         */
        "value"?: string;
    }
    interface PostCollapsible {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * An event emitted when the collapse element is shown or hidden, before the transition.  The event payload is a boolean: `true` if the collapsible was opened, `false` if it was closed.
         */
        "onCollapseChange"?: (event: PostCollapsibleCustomEvent<boolean>) => void;
    }
    /**
     * @class PostIcon - representing a stencil component
     */
    interface PostIcon {
        /**
          * The name of the animation.
         */
        "animation"?: Animation | null;
        /**
          * The base path, where the icons are located (must be a public url).<br/>Leave this field empty to use the default cdn url.
         */
        "base"?: string | null;
        /**
          * When set to `true`, the icon will be flipped horizontally.
         */
        "flipH"?: boolean;
        /**
          * When set to `true`, the icon will be flipped vertically.
         */
        "flipV"?: boolean;
        /**
          * The name/id of the icon (e.g. 1000, 1001, ...).
         */
        "name": string;
        /**
          * The number of degree for the css rotate transformation.
         */
        "rotate"?: number | null;
        /**
          * The number for the css scale transformation.
         */
        "scale"?: number | null;
    }
    interface PostPopover {
        /**
          * Show a little indicator arrow
         */
        "arrow"?: boolean;
        /**
          * Define the caption of the close button for assistive technology
         */
        "closeButtonCaption": string;
        /**
          * Defines the placement of the popover according to the floating-ui options available at https://floating-ui.com/docs/computePosition#placement. Popoverss are automatically flipped to the opposite side if there is not enough available space and are shifted towards the viewport if they would overlap edge boundaries.
         */
        "placement"?: Placement;
    }
    interface PostPopovercontainer {
        /**
          * Wheter or not to display a little pointer arrow
         */
        "arrow"?: boolean;
        /**
          * Fires whenever the popover gets shown or hidden, passing the new state in event.details as a boolean
         */
        "onPostPopoverToggled"?: (event: PostPopovercontainerCustomEvent<boolean>) => void;
        /**
          * Defines the placement of the tooltip according to the floating-ui options available at https://floating-ui.com/docs/computePosition#placement. Tooltips are automatically flipped to the opposite side if there is not enough available space and are shifted towards the viewport if they would overlap edge boundaries.
         */
        "placement"?: Placement;
    }
    interface PostTabHeader {
        /**
          * The name of the panel controlled by the tab header.
         */
        "panel"?: HTMLPostTabPanelElement['name'];
    }
    interface PostTabPanel {
        /**
          * The name of the panel, used to associate it with a tab header.
         */
        "name"?: string;
    }
    interface PostTabs {
        /**
          * The name of the panel that is initially shown. If not specified, it defaults to the panel associated with the first tab.  **Changing this value after initialization has no effect.**
         */
        "activePanel"?: HTMLPostTabPanelElement['name'];
        /**
          * An event emitted after the active tab changes, when the fade in transition of its associated panel is finished. The payload is the name of the newly shown panel.
         */
        "onTabChange"?: (event: PostTabsCustomEvent<HTMLPostTabPanelElement['name']>) => void;
    }
    interface PostTooltip {
        /**
          * Wheter or not to display a little pointer arrow
         */
        "arrow"?: boolean;
        /**
          * Defines the placement of the tooltip according to the floating-ui options available at https://floating-ui.com/docs/computePosition#placement. Tooltips are automatically flipped to the opposite side if there is not enough available space and are shifted towards the viewport if they would overlap edge boundaries.
         */
        "placement"?: Placement;
    }
    interface IntrinsicElements {
        "post-accordion": PostAccordion;
        "post-accordion-item": PostAccordionItem;
        "post-alert": PostAlert;
        "post-card-control": PostCardControl;
        "post-collapsible": PostCollapsible;
        "post-icon": PostIcon;
        "post-popover": PostPopover;
        "post-popovercontainer": PostPopovercontainer;
        "post-tab-header": PostTabHeader;
        "post-tab-panel": PostTabPanel;
        "post-tabs": PostTabs;
        "post-tooltip": PostTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "post-accordion": LocalJSX.PostAccordion & JSXBase.HTMLAttributes<HTMLPostAccordionElement>;
            "post-accordion-item": LocalJSX.PostAccordionItem & JSXBase.HTMLAttributes<HTMLPostAccordionItemElement>;
            "post-alert": LocalJSX.PostAlert & JSXBase.HTMLAttributes<HTMLPostAlertElement>;
            /**
             * @class PostCardControl - representing a stencil component
             */
            "post-card-control": LocalJSX.PostCardControl & JSXBase.HTMLAttributes<HTMLPostCardControlElement>;
            "post-collapsible": LocalJSX.PostCollapsible & JSXBase.HTMLAttributes<HTMLPostCollapsibleElement>;
            /**
             * @class PostIcon - representing a stencil component
             */
            "post-icon": LocalJSX.PostIcon & JSXBase.HTMLAttributes<HTMLPostIconElement>;
            "post-popover": LocalJSX.PostPopover & JSXBase.HTMLAttributes<HTMLPostPopoverElement>;
            "post-popovercontainer": LocalJSX.PostPopovercontainer & JSXBase.HTMLAttributes<HTMLPostPopovercontainerElement>;
            "post-tab-header": LocalJSX.PostTabHeader & JSXBase.HTMLAttributes<HTMLPostTabHeaderElement>;
            "post-tab-panel": LocalJSX.PostTabPanel & JSXBase.HTMLAttributes<HTMLPostTabPanelElement>;
            "post-tabs": LocalJSX.PostTabs & JSXBase.HTMLAttributes<HTMLPostTabsElement>;
            "post-tooltip": LocalJSX.PostTooltip & JSXBase.HTMLAttributes<HTMLPostTooltipElement>;
        }
    }
}
