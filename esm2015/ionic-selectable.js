import { Directive, Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, IterableDiffers, Optional, Output, TemplateRef, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Form, Item, ModalController, Platform, Content, NavParams, IonicPageModule } from 'ionic-angular';
import 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableAddItemTemplateDirective {
}
IonicSelectableAddItemTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableAddItemTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableAddItemTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableCloseButtonTemplateDirective {
}
IonicSelectableCloseButtonTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableCloseButtonTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableCloseButtonTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableFooterTemplateDirective {
}
IonicSelectableFooterTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableFooterTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableFooterTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableGroupEndTemplateDirective {
}
IonicSelectableGroupEndTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableGroupEndTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableGroupEndTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableGroupTemplateDirective {
}
IonicSelectableGroupTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableGroupTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableGroupTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableHeaderTemplateDirective {
}
IonicSelectableHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableHeaderTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableHeaderTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableItemEndTemplateDirective {
}
IonicSelectableItemEndTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableItemEndTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableItemEndTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableItemIconTemplateDirective {
}
IonicSelectableItemIconTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableItemIconTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableItemIconTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableItemTemplateDirective {
}
IonicSelectableItemTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableItemTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableItemTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableMessageTemplateDirective {
}
IonicSelectableMessageTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableMessageTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableMessageTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectablePlaceholderTemplateDirective {
}
IonicSelectablePlaceholderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectablePlaceholderTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectablePlaceholderTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableSearchFailTemplateDirective {
}
IonicSelectableSearchFailTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableSearchFailTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableSearchFailTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableTitleTemplateDirective {
}
IonicSelectableTitleTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableTitleTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableTitleTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableValueTemplateDirective {
}
IonicSelectableValueTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableValueTemplate]',
            },] },
];
/** @nocollapse */
IonicSelectableValueTemplateDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableComponent {
    /**
     * @param {?} _modalController
     * @param {?} ionForm
     * @param {?} _platform
     * @param {?} ionItem
     * @param {?} _iterableDiffers
     * @param {?} element
     */
    constructor(_modalController, ionForm, _platform, ionItem, _iterableDiffers, element) {
        this._modalController = _modalController;
        this.ionForm = ionForm;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this.element = element;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._shouldBackdropClose = true;
        this._isOpened = false;
        this._value = null;
        this._canClear = false;
        this._hasConfirmButton = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new EventEmitter();
        this._label = null;
        this._valueItems = [];
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this._hasFilteredItems = false;
        /**
         * A list of items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
         *
         * \@default []
         * \@memberof IonicSelectableComponent
         */
        this.items = [];
        this.itemsChange = new EventEmitter();
        /**
         * Modal CSS class.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalCssClass = null;
        /**
         * Modal enter animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalEnterAnimation = null;
        /**
         * Modal leave animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalLeaveAnimation = null;
        /**
         * Determines whether Confirm button is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         */
        this.isConfirmButtonEnabled = true;
        /**
         * Item property to use as a unique identifier, e.g, `'id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.itemValueField = null;
        /**
         * Item property to display, e.g, `'name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.itemTextField = null;
        /**
         *
         * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupValueField = null;
        /**
         * Group property to display, e.g. `'country.name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupTextField = null;
        /**
         * Determines whether to show Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canSearch = false;
        /**
         * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
         * **Note**: Infinite scroll cannot be used together with virtual scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.hasInfiniteScroll = false;
        /**
         * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
         * **Note**: Virtual scroll cannot be used together with infinite scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.hasVirtualScroll = false;
        /**
         * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
         *
         * \@default '40px'
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollApproxItemHeight = '40px';
        /**
         * See Ionic VirtualScroll [approxItemWidth](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemwidth).
         *
         * \@default '100%'
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollApproxItemWidth = '100%';
        /**
         * See Ionic VirtualScroll [bufferRatio](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollbufferratio).
         *
         * \@default 3
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollBufferRatio = 3;
        /**
         * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
         *
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollHeaderFn = () => { return null; };
        /**
         * A placeholder for Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
         *
         * \@default 'Search'
         * \@memberof IonicSelectableComponent
         */
        this.searchPlaceholder = 'Search';
        /**
         * A placeholder.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.placeholder = null;
        /**
         * Text to display when no items have been found during search.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
         *
         * \@default 'No items found.'
         * \@memberof IonicSelectableComponent
         */
        this.searchFailText = 'No items found.';
        /**
         * Clear button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
         *
         * \@default 'Clear'
         * \@memberof IonicSelectableComponent
         */
        this.clearButtonText = 'Clear';
        /**
         * Add button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
         *
         * \@default 'Add'
         * \@memberof IonicSelectableComponent
         */
        this.addButtonText = 'Add';
        /**
         * Confirm button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
         *
         * \@default 'OK'
         * \@memberof IonicSelectableComponent
         */
        this.confirmButtonText = 'OK';
        /**
         * Close button text.
         * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
         *
         * \@default 'Cancel'
         * \@memberof IonicSelectableComponent
         */
        this.closeButtonText = 'Cancel';
        /**
         * Determines whether Searchbar should receive focus when Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#focussearchbar).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.focusSearchbar = false;
        /**
         * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.headerColor = null;
        /**
         * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupColor = null;
        /**
         * Fires when item/s has been selected and Modal closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onChange = new EventEmitter();
        /**
         * Fires when the user is typing in Searchbar.
         * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearch = new EventEmitter();
        /**
         * Fires when no items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearchFail = new EventEmitter();
        /**
         * Fires when some items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearchSuccess = new EventEmitter();
        /**
         * Fires when the user has scrolled to the end of the list.
         * **Note**: `hasInfiniteScroll` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onInfiniteScroll = new EventEmitter();
        /**
         * Fires when Modal has been opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onOpen = new EventEmitter();
        /**
         * Fires when Modal has been closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onClose = new EventEmitter();
        /**
         * Fires when an item has been selected or unselected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSelect = new EventEmitter();
        /**
         * Fires when Clear button has been clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onClear = new EventEmitter();
        /**
         * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
         *
         * \@default 250
         * \@memberof IonicSelectableComponent
         */
        this.searchDebounce = 250;
        /**
         * A list of items to disable.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
         *
         * \@default []
         * \@memberof IonicSelectableComponent
         */
        this.disabledItems = [];
        /**
         * Determines whether item value only should be stored in `ngModel`, not the entire item.
         * **Note**: Item value is defined by `itemValueField`.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.shouldStoreItemValue = false;
        /**
         * Determines whether to allow editing items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canSaveItem = false;
        /**
         * Determines whether to allow deleting items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canDeleteItem = false;
        /**
         * Fires when Edit item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
         * **Note**: `canSaveItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSaveItem = new EventEmitter();
        /**
         * Fires when Delete item button has been clicked.
         * **Note**: `canDeleteItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onDeleteItem = new EventEmitter();
        /**
         * Fires when Add item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
         * **Note**: `canAddItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onAddItem = new EventEmitter();
        this.propagateOnChange = (_) => { };
        this.propagateOnTouched = () => { };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    /**
     * @return {?}
     */
    get _isMultipleCssClass() {
        return this.isMultiple;
    }
    /**
     * @return {?}
     */
    get _hasValueCssClass() {
        return this.hasValue();
    }
    /**
     * @return {?}
     */
    get _hasPlaceholderCssClass() {
        return this._hasPlaceholder;
    }
    /**
     * @return {?}
     */
    get _shouldStoreItemValue() {
        return this.shouldStoreItemValue && this._hasObjects;
    }
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
     *
     * \@readonly
     * \@default null
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get label() {
        return this._label;
    }
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
     *
     * \@readonly
     * \@default ''
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get searchText() {
        return this._searchText;
    }
    /**
     * @param {?} searchText
     * @return {?}
     */
    set searchText(searchText) {
        this._searchText = searchText;
        this._setHasSearchText();
    }
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get hasSearchText() {
        return this._hasSearchText;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        // Set value items.
        this._valueItems.splice(0, this._valueItems.length);
        if (this.isMultiple) {
            if (value && value.length) {
                Array.prototype.push.apply(this._valueItems, value);
            }
        }
        else {
            if (!this._isNullOrWhiteSpace(value)) {
                this._valueItems.push(value);
            }
        }
        this._setIonItemHasValue();
        this._setHasPlaceholder();
    }
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isEnabled() {
        return this._isEnabled;
    }
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    set isEnabled(isEnabled) {
        this._isEnabled = !!isEnabled;
        this.enableIonItem(this._isEnabled);
    }
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get shouldBackdropClose() {
        return this._shouldBackdropClose;
    }
    /**
     * @param {?} shouldBackdropClose
     * @return {?}
     */
    set shouldBackdropClose(shouldBackdropClose) {
        this._shouldBackdropClose = !!shouldBackdropClose;
    }
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isOpened() {
        return this._isOpened;
    }
    /**
     * Determines whether Confirm button is visible for single selection.
     * By default Confirm button is visible only for multiple selection.
     * **Note**: It is always true for multiple selection and cannot be changed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get hasConfirmButton() {
        return this._hasConfirmButton;
    }
    /**
     * @param {?} hasConfirmButton
     * @return {?}
     */
    set hasConfirmButton(hasConfirmButton) {
        this._hasConfirmButton = !!hasConfirmButton;
        this._countFooterButtons();
    }
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isOnSearchEnabled() {
        return this._isOnSearchEnabled;
    }
    /**
     * @param {?} isOnSearchEnabled
     * @return {?}
     */
    set isOnSearchEnabled(isOnSearchEnabled) {
        this._isOnSearchEnabled = !!isOnSearchEnabled;
    }
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get canClear() {
        return this._canClear;
    }
    /**
     * @param {?} canClear
     * @return {?}
     */
    set canClear(canClear) {
        this._canClear = !!canClear;
        this._countFooterButtons();
    }
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isMultiple() {
        return this._isMultiple;
    }
    /**
     * @param {?} isMultiple
     * @return {?}
     */
    set isMultiple(isMultiple) {
        this._isMultiple = !!isMultiple;
        this._countFooterButtons();
    }
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
     *
     * \@default []
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get itemsToConfirm() {
        return this._itemsToConfirm;
    }
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get canAddItem() {
        return this._canAddItem;
    }
    /**
     * @param {?} canAddItem
     * @return {?}
     */
    set canAddItem(canAddItem) {
        this._canAddItem = !!canAddItem;
        this._countFooterButtons();
    }
    /**
     * @return {?}
     */
    initFocus() { }
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    enableIonItem(isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.setElementClass('item-input-disabled', !isEnabled);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _click(event) {
        if (!this.isEnabled || event.detail === 0) {
            // Don't continue if the click event came from a form submit.
            return;
        }
        this._label = this._getLabelText();
        event.preventDefault();
        event.stopPropagation();
        this.open().then(() => {
            this.onOpen.emit({
                component: this
            });
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
    /**
     * @return {?}
     */
    _setHasSearchText() {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    }
    /**
     * @return {?}
     */
    _hasOnSearch() {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnSaveItem() {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnAddItem() {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnDeleteItem() {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _emitValueChange() {
        this.propagateOnChange(this.value);
        this._setIonItemValidityClasses();
        this.onChange.emit({
            component: this,
            value: this.value
        });
    }
    /**
     * @return {?}
     */
    _emitSearch() {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    }
    /**
     * @param {?} item
     * @param {?} isSelected
     * @return {?}
     */
    _emitOnSelect(item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _emitOnClear(items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    }
    /**
     * @param {?} isSuccess
     * @return {?}
     */
    _emitOnSearchSuccessOrFail(isSuccess) {
        const /** @type {?} */ eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _formatItem(item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _formatValueItem(item) {
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            let /** @type {?} */ selectedItem = this.items.find(_item => {
                return _item[this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _getItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _getStoredItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    }
    /**
     * @return {?}
     */
    _filterItems() {
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            let /** @type {?} */ groups = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups = this._groups;
            }
            else {
                let /** @type {?} */ filterText = this._searchText.trim().toLowerCase();
                this._groups.forEach(group => {
                    let /** @type {?} */ items = group.items.filter(item => {
                        let /** @type {?} */ itemText = (this.itemTextField ?
                            item[this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText) !== -1;
                    });
                    if (items.length) {
                        groups.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                });
                // No items found.
                if (!groups.length) {
                    groups.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups;
            this._hasFilteredItems = !this._areGroupsEmpty(groups);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _isItemDisabled(item) {
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some(_item => {
            return this._getItemValue(_item) === this._getItemValue(item);
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _isItemSelected(item) {
        return this._selectedItems.find(selectedItem => {
            return this._getItemValue(item) === this._getStoredItemValue(selectedItem);
        }) !== undefined;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _addSelectedItem(item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _deleteSelectedItem(item) {
        let /** @type {?} */ itemToDeleteIndex;
        this._selectedItems.forEach((selectedItem, itemIndex) => {
            if (this._getItemValue(item) ===
                this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    _saveItem(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    _deleteItemClick(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    }
    /**
     * @return {?}
     */
    _addItemClick() {
        this._itemToAdd = null;
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    /**
     * @return {?}
     */
    _close() {
        // Focused input interferes with the animation.
        // Blur it first, wait a bit and then close Modal.
        if (this._modalComponent._searchbarComponent) {
            this._modalComponent._searchbarComponent._fireBlur();
        }
        setTimeout(() => {
            this.close().then(() => {
                this.onClose.emit({
                    component: this
                });
            });
            if (!this._hasOnSearch()) {
                this._searchText = '';
                this._setHasSearchText();
            }
        });
    }
    /**
     * @return {?}
     */
    _clear() {
        const /** @type {?} */ selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
    }
    /**
     * @param {?} infiniteScroll
     * @return {?}
     */
    _getMoreItems(infiniteScroll) {
        // TODO: Try to get infiniteScroll via ViewChild. Maybe it works in a newer Ionic version.
        // For now assign it here.
        this._infiniteScroll = infiniteScroll;
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _setItemsToConfirm(items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
    }
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    _doSelect(selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _select(item) {
        const /** @type {?} */ isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
    }
    /**
     * @return {?}
     */
    _confirm() {
        this.confirm();
        this._close();
    }
    /**
     * @return {?}
     */
    _getLabelText() {
        let /** @type {?} */ label = this.ionItem ? this.ionItem.getNativeElement().querySelector('ion-label') : null;
        return label ? label.textContent : null;
    }
    /**
     * @param {?} groups
     * @return {?}
     */
    _areGroupsEmpty(groups) {
        return groups.length === 0 || groups.every(group => {
            return !group.items || group.items.length === 0;
        });
    }
    /**
     * @return {?}
     */
    _countFooterButtons() {
        let /** @type {?} */ footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _setItems(items) {
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        let /** @type {?} */ groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(item => {
                    let /** @type {?} */ groupValue = this._getPropertyValue(item, this.groupValueField), /** @type {?} */
                    group = groups.find(_group => _group.value === groupValue);
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: this._getPropertyValue(item, this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    }
    /**
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    _getPropertyValue(object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((_object, _property) => {
            return _object ? _object[_property] : null;
        }, object);
    }
    /**
     * @param {?} hasFocus
     * @return {?}
     */
    _setIonItemHasFocus(hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this.ionItem.setElementClass('item-input-has-focus', hasFocus);
    }
    /**
     * @return {?}
     */
    _setIonItemHasValue() {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this.ionItem.setElementClass('item-input-has-value', this.hasValue());
    }
    /**
     * @return {?}
     */
    _setHasPlaceholder() {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    }
    /**
     * @return {?}
     */
    _setIonItemValidityClasses() {
        if (!this.ionItem) {
            return;
        }
        // Use requestAnimationFrame() here as Ionic does.
        // This probably helps make animation smooth.
        // See https://github.com/rintoj/angular2-virtual-scroll/issues/33.
        requestAnimationFrame(() => {
            let /** @type {?} */ classList = this.element.nativeElement.classList;
            this.ionItem.setElementClass('ng-invalid', false);
            this.ionItem.setElementClass('ng-valid', false);
            this.ionItem.setElementClass('ng-touched', false);
            this.ionItem.setElementClass('ng-untouched', false);
            this.ionItem.setElementClass('ng-dirty', false);
            this.ionItem.setElementClass('ng-pristine', false);
            classList.forEach((className) => {
                if (className === 'ng-invalid') {
                    this.ionItem.setElementClass('ng-invalid', true);
                }
                if (className === 'ng-valid') {
                    this.ionItem.setElementClass('ng-valid', true);
                }
                if (className === 'ng-touched') {
                    this.ionItem.setElementClass('ng-touched', true);
                }
                if (className === 'ng-untouched') {
                    this.ionItem.setElementClass('ng-untouched', true);
                }
                if (className === 'ng-dirty') {
                    this.ionItem.setElementClass('ng-dirty', true);
                }
                if (className === 'ng-pristine') {
                    this.ionItem.setElementClass('ng-pristine', true);
                }
            });
        });
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    _toggleAddItemTemplate(isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this._setIonItemValidityClasses();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateOnChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.propagateOnTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isEnabled = !isDisabled;
        // We could have used _setIonItemValidityClasses() to update classes,
        // but shouldn't as it will remove ng-valid class and probably some other
        // ng classes, which will in turn break Ionic item highlighting styles.
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        this.ionForm.register(this);
        if (this.ionItem) {
            this.ionItem.setElementClass('item-input', true);
            this.ionItem.setElementClass('item-ionic-selectable', true);
        }
        this.enableIonItem(this.isEnabled);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.ionForm.deregister(this);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        let /** @type {?} */ itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    }
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to add.
     * @return {?} Promise that resolves when item has been added.
     */
    addItem(item) {
        let /** @type {?} */ self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._addItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to delete.
     * @return {?} Promise that resolves when item has been deleted.
     */
    deleteItem(item) {
        let /** @type {?} */ self = this, /** @type {?} */
        hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(_item => {
                return this._getItemValue(item) !== this._getStoredItemValue(_item);
            });
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                let /** @type {?} */ values = this.value.filter(value => {
                    return value.id !== item.id;
                });
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        let /** @type {?} */ items = this.items.filter(_item => {
            return _item.id !== item.id;
        });
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} A boolean determining whether any item has been selected.
     */
    hasValue() {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    }
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been opened.
     */
    open() {
        let /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            const /** @type {?} */ modalOptions = {
                enableBackdropDismiss: self._shouldBackdropClose
            };
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            self._modal = self._modalController.create(IonicSelectableModalComponent, {
                selectComponent: self
            }, modalOptions);
            self._modal.present().then(() => {
                // Set focus after Modal has opened to avoid flickering of focus highlighting
                // before Modal opening.
                self._setIonItemHasFocus(true);
                resolve();
            });
            self._modal.onWillDismiss(() => {
                self._setIonItemHasFocus(false);
            });
            self._modal.onDidDismiss((data, role) => {
                self._isOpened = false;
                self._itemsToConfirm = [];
                // Closed by clicking on backdrop outside modal.
                if (role === 'backdrop') {
                    self.onClose.emit({
                        component: self
                    });
                }
            });
        });
    }
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been closed.
     */
    close() {
        let /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._setIonItemValidityClasses();
            // Delete old instance of infinite scroll, to avoid "Cannot read property 'enableEvents' of null"
            // error from it when Modal is opened next time.
            self._infiniteScroll = null;
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(() => {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    }
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    clear() {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
        this._setIonItemValidityClasses();
    }
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    confirm() {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    }
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} isSelect Determines whether to select or deselect items.
     * @param {?=} items
     * @return {?}
     */
    toggleItems(isSelect, items) {
        if (isSelect) {
            const /** @type {?} */ hasItems = items && items.length;
            let /** @type {?} */ itemsToToggle = this._groups.reduce((allItems, group) => {
                return allItems.concat(group.items);
            }, []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter(itemToToggle => {
                    return items.find(item => {
                        return this._getItemValue(itemToToggle) === this._getItemValue(item);
                    }) !== undefined;
                });
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach(item => {
                this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    }
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    scrollToTop() {
        let /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(() => {
                resolve();
            });
        });
    }
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    scrollToBottom() {
        let /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(() => {
                resolve();
            });
        });
    }
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    startSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    }
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    endSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-selectable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    }
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    enableInfiniteScroll() {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.enable(true);
    }
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    disableInfiniteScroll() {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.enable(false);
    }
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    endInfiniteScroll() {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.complete();
        this._setItems(this.items);
    }
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} text Text to search items by.
     * @return {?}
     */
    search(text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    }
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    showLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    }
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    hideLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    }
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    showAddItemTemplate() {
        this._toggleAddItemTemplate(true);
    }
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    hideAddItemTemplate() {
        this._toggleAddItemTemplate(false);
    }
}
IonicSelectableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ionic-selectable',
                template: `<div class="ionic-selectable-value">
  <div *ngIf="valueTemplate && _valueItems.length && isMultiple"
    [ngTemplateOutlet]="valueTemplate"
    [ngTemplateOutletContext]="{ value: _valueItems }">
  </div>
  <div class="ionic-selectable-value-item"
    *ngIf="valueTemplate && _valueItems.length && !isMultiple">
    <div [ngTemplateOutlet]="valueTemplate"
      [ngTemplateOutletContext]="{ value: _valueItems[0] }">
    </div>
  </div>
  <span *ngIf="!valueTemplate && _valueItems.length">
    <div class="ionic-selectable-value-item"
      *ngFor="let valueItem of _valueItems">
      {{_formatValueItem(valueItem)}}
    </div>
  </span>
  <div *ngIf="_hasPlaceholder && placeholderTemplate"
    class="ionic-selectable-value-item">
    <div [ngTemplateOutlet]="placeholderTemplate">
    </div>
  </div>
  <div class="ionic-selectable-value-item"
    *ngIf="_hasPlaceholder && !placeholderTemplate">
    {{placeholder}}
  </div>
</div>
<div class="ionic-selectable-icon">
  <div class="ionic-selectable-icon-inner"></div>
</div>
<button aria-haspopup="true" ion-button="item-cover" class="item-cover"
  [disabled]="!isEnabled">
</button>
`,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => IonicSelectableComponent),
                        multi: true
                    }]
            },] },
];
/** @nocollapse */
IonicSelectableComponent.ctorParameters = () => [
    { type: ModalController, },
    { type: Form, },
    { type: Platform, },
    { type: Item, decorators: [{ type: Optional },] },
    { type: IterableDiffers, },
    { type: ElementRef, },
];
IonicSelectableComponent.propDecorators = {
    "_cssClass": [{ type: HostBinding, args: ['class.ionic-selectable',] },],
    "_isIos": [{ type: HostBinding, args: ['class.ionic-selectable-ios',] },],
    "_isMD": [{ type: HostBinding, args: ['class.ionic-selectable-md',] },],
    "_isMultipleCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-is-multiple',] },],
    "_hasValueCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-has-value',] },],
    "_hasPlaceholderCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-has-placeholder',] },],
    "items": [{ type: Input },],
    "itemsChange": [{ type: Output },],
    "isEnabled": [{ type: HostBinding, args: ['class.ionic-selectable-is-enabled',] }, { type: Input, args: ['isEnabled',] },],
    "shouldBackdropClose": [{ type: Input, args: ['shouldBackdropClose',] },],
    "modalCssClass": [{ type: Input },],
    "modalEnterAnimation": [{ type: Input },],
    "modalLeaveAnimation": [{ type: Input },],
    "isConfirmButtonEnabled": [{ type: Input, args: ['isConfirmButtonEnabled',] },],
    "hasConfirmButton": [{ type: Input, args: ['hasConfirmButton',] },],
    "itemValueField": [{ type: Input },],
    "itemTextField": [{ type: Input },],
    "groupValueField": [{ type: Input },],
    "groupTextField": [{ type: Input },],
    "canSearch": [{ type: Input },],
    "isOnSearchEnabled": [{ type: Input, args: ['isOnSearchEnabled',] },],
    "canClear": [{ type: HostBinding, args: ['class.ionic-selectable-can-clear',] }, { type: Input, args: ['canClear',] },],
    "hasInfiniteScroll": [{ type: Input },],
    "hasVirtualScroll": [{ type: Input },],
    "virtualScrollApproxItemHeight": [{ type: Input },],
    "virtualScrollApproxItemWidth": [{ type: Input },],
    "virtualScrollBufferRatio": [{ type: Input },],
    "virtualScrollHeaderFn": [{ type: Input },],
    "searchPlaceholder": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "isMultiple": [{ type: Input, args: ['isMultiple',] },],
    "searchFailText": [{ type: Input },],
    "clearButtonText": [{ type: Input },],
    "addButtonText": [{ type: Input },],
    "confirmButtonText": [{ type: Input },],
    "closeButtonText": [{ type: Input },],
    "focusSearchbar": [{ type: Input },],
    "headerColor": [{ type: Input },],
    "groupColor": [{ type: Input },],
    "onChange": [{ type: Output },],
    "onSearch": [{ type: Output },],
    "onSearchFail": [{ type: Output },],
    "onSearchSuccess": [{ type: Output },],
    "onInfiniteScroll": [{ type: Output },],
    "onOpen": [{ type: Output },],
    "onClose": [{ type: Output },],
    "onSelect": [{ type: Output },],
    "onClear": [{ type: Output },],
    "valueTemplate": [{ type: ContentChild, args: [IonicSelectableValueTemplateDirective, { read: TemplateRef },] },],
    "itemTemplate": [{ type: ContentChild, args: [IonicSelectableItemTemplateDirective, { read: TemplateRef },] },],
    "itemEndTemplate": [{ type: ContentChild, args: [IonicSelectableItemEndTemplateDirective, { read: TemplateRef },] },],
    "titleTemplate": [{ type: ContentChild, args: [IonicSelectableTitleTemplateDirective, { read: TemplateRef },] },],
    "placeholderTemplate": [{ type: ContentChild, args: [IonicSelectablePlaceholderTemplateDirective, { read: TemplateRef },] },],
    "messageTemplate": [{ type: ContentChild, args: [IonicSelectableMessageTemplateDirective, { read: TemplateRef },] },],
    "groupTemplate": [{ type: ContentChild, args: [IonicSelectableGroupTemplateDirective, { read: TemplateRef },] },],
    "groupEndTemplate": [{ type: ContentChild, args: [IonicSelectableGroupEndTemplateDirective, { read: TemplateRef },] },],
    "closeButtonTemplate": [{ type: ContentChild, args: [IonicSelectableCloseButtonTemplateDirective, { read: TemplateRef },] },],
    "searchFailTemplate": [{ type: ContentChild, args: [IonicSelectableSearchFailTemplateDirective, { read: TemplateRef },] },],
    "addItemTemplate": [{ type: ContentChild, args: [IonicSelectableAddItemTemplateDirective, { read: TemplateRef },] },],
    "footerTemplate": [{ type: ContentChild, args: [IonicSelectableFooterTemplateDirective, { read: TemplateRef },] },],
    "headerTemplate": [{ type: ContentChild, args: [IonicSelectableHeaderTemplateDirective, { read: TemplateRef },] },],
    "itemIconTemplate": [{ type: ContentChild, args: [IonicSelectableItemIconTemplateDirective, { read: TemplateRef },] },],
    "searchDebounce": [{ type: Input },],
    "disabledItems": [{ type: Input },],
    "shouldStoreItemValue": [{ type: Input },],
    "canSaveItem": [{ type: Input },],
    "canDeleteItem": [{ type: Input },],
    "canAddItem": [{ type: Input, args: ['canAddItem',] },],
    "onSaveItem": [{ type: Output },],
    "onDeleteItem": [{ type: Output },],
    "onAddItem": [{ type: Output },],
    "_click": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IonicSelectableModalComponent {
    /**
     * @param {?} navParams
     * @param {?} _element
     */
    constructor(navParams, _element) {
        this.navParams = navParams;
        this._element = _element;
        this._cssClass = true;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach(item => {
                    this.selectComponent._selectedItems.push(item);
                });
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    /**
     * @return {?}
     */
    get _canClearCssClass() {
        return this.selectComponent.canClear;
    }
    /**
     * @return {?}
     */
    get _isMultipleCssClass() {
        return this.selectComponent.isMultiple;
    }
    /**
     * @return {?}
     */
    get _isSearchingCssClass() {
        return this.selectComponent._isSearching;
    }
    /**
     * @return {?}
     */
    get _isAddItemTemplateVisibleCssClass() {
        return this.selectComponent._isAddItemTemplateVisible;
    }
    /**
     * @return {?}
     */
    get _isIos() {
        return this.selectComponent._isIos;
    }
    /**
     * @return {?}
     */
    _isMD() {
        return this.selectComponent._isMD;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._header = this._element.nativeElement.querySelector('ion-header');
        if (this._searchbarComponent && this.selectComponent.focusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(() => {
                this._searchbarComponent.setFocus();
            }, 1000);
        }
    }
}
IonicSelectableModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'ionic-selectable-modal',
                template: `<ion-header>
  <ion-navbar *ngIf="!selectComponent.headerTemplate"
    [color]="selectComponent.headerColor ? selectComponent.headerColor : null">
    <ion-title>
      <!-- Use span for titleTemplate to preserve Ionic ellipsis styles. -->
      <span *ngIf="selectComponent.titleTemplate"
        [ngTemplateOutlet]="selectComponent.titleTemplate">
      </span>
      <span *ngIf="!selectComponent.titleTemplate">
        {{selectComponent.label}}
      </span>
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="selectComponent._close()">
        <span *ngIf="selectComponent.closeButtonTemplate"
          [ngTemplateOutlet]="selectComponent.closeButtonTemplate">
        </span>
        <span *ngIf="!selectComponent.closeButtonTemplate" ion-text
          showWhen="ios">
          {{selectComponent.closeButtonText}}
        </span>
        <ion-icon *ngIf="!selectComponent.closeButtonTemplate" name="md-close"
          hideWhen="ios">
        </ion-icon>
      </button>
    </ion-buttons>
  </ion-navbar>
  <div *ngIf="selectComponent.headerTemplate"
    [ngTemplateOutlet]="selectComponent.headerTemplate">
  </div>
  <ion-toolbar
    *ngIf="selectComponent.canSearch || selectComponent.messageTemplate">
    <ion-searchbar *ngIf="selectComponent.canSearch" #searchbarComponent
      [(ngModel)]="selectComponent._searchText"
      (ionInput)="selectComponent._filterItems()"
      [placeholder]="selectComponent.searchPlaceholder"
      [debounce]="selectComponent.searchDebounce">
    </ion-searchbar>
    <div class="ionic-selectable-message"
      *ngIf="selectComponent.messageTemplate">
      <div [ngTemplateOutlet]="selectComponent.messageTemplate">
      </div>
    </div>
  </ion-toolbar>
</ion-header>
<ion-content>
  <div class="ionic-selectable-spinner" *ngIf="selectComponent._isSearching">
    <div class="ionic-selectable-spinner-background"></div>
    <ion-spinner></ion-spinner>
  </div>
  <ion-list no-margin
    *ngIf="!selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems">
    <ion-item-group *ngFor="let group of selectComponent._filteredGroups"
      class="ionic-selectable-group">
      <ion-item-divider *ngIf="selectComponent._hasGroups"
        [color]="selectComponent.groupColor ? selectComponent.groupColor : null">
        <!-- Use span for groupTemplate to preserve Ionic ellipsis styles. -->
        <span *ngIf="selectComponent.groupTemplate"
          [ngTemplateOutlet]="selectComponent.groupTemplate"
          [ngTemplateOutletContext]="{ group: group }">
        </span>
        <span *ngIf="!selectComponent.groupTemplate">
          {{group.text}}
        </span>
        <div *ngIf="selectComponent.groupEndTemplate" item-right>
          <div [ngTemplateOutlet]="selectComponent.groupEndTemplate"
            [ngTemplateOutletContext]="{ group: group }">
          </div>
        </div>
      </ion-item-divider>
      <button ion-item detail-none *ngFor="let item of group.items"
        (click)="selectComponent._select(item)" class="ionic-selectable-item"
        [ngClass]="{
          'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),
          'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)
        }" [disabled]="selectComponent._isItemDisabled(item)">
        <!-- Use span for itemTemplate to preserve Ionic ellipsis styles. -->
        <span *ngIf="selectComponent.itemTemplate"
          [ngTemplateOutlet]="selectComponent.itemTemplate"
          [ngTemplateOutletContext]="{ item: item, isItemSelected: selectComponent._isItemSelected(item) }">
        </span>
        <span *ngIf="!selectComponent.itemTemplate">
          {{selectComponent._formatItem(item)}}
        </span>
        <div *ngIf="selectComponent.itemEndTemplate" item-right>
          <div [ngTemplateOutlet]="selectComponent.itemEndTemplate"
            [ngTemplateOutletContext]="{ item: item, isItemSelected: selectComponent._isItemSelected(item) }">
          </div>
        </div>
        <span *ngIf="selectComponent.itemIconTemplate" item-left
          class="ionic-selectable-item-icon-template"
          [ngTemplateOutlet]="selectComponent.itemIconTemplate"
          [ngTemplateOutletContext]="{ item: item, isItemSelected: selectComponent._isItemSelected(item) }">
        </span>
        <ion-icon *ngIf="!selectComponent.itemIconTemplate"
          [name]="selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'"
          [color]="selectComponent._isItemSelected(item) ? 'primary' : 'daek'"
          item-left>
        </ion-icon>
        <button *ngIf="selectComponent.canSaveItem"
          class="ionic-selectable-item-button" ion-button icon-only item-end
          outline (click)="selectComponent._saveItem($event, item)">
          <ion-icon name="md-create"></ion-icon>
        </button>
        <button *ngIf="selectComponent.canDeleteItem"
          class="ionic-selectable-item-button" ion-button icon-only item-end
          outline (click)="selectComponent._deleteItemClick($event, item)">
          <ion-icon name="md-trash"></ion-icon>
        </button>
      </button>
    </ion-item-group>
  </ion-list>
  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->
  <div *ngIf="!selectComponent._hasFilteredItems">
    <span *ngIf="selectComponent.searchFailTemplate"
      [ngTemplateOutlet]="selectComponent.searchFailTemplate">
    </span>
    <div *ngIf="!selectComponent.searchFailTemplate" margin>
      {{selectComponent.searchFailText}}
    </div>
  </div>
  <ion-infinite-scroll *ngIf="!selectComponent.hasVirtualScroll"
    [enabled]="selectComponent.hasInfiniteScroll"
    (ionInfinite)="selectComponent._getMoreItems($event)">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
  <ion-list no-margin
    *ngIf="selectComponent.hasVirtualScroll"
    [virtualScroll]="selectComponent._filteredGroups[0].items"
    [approxItemHeight]="selectComponent.virtualScrollApproxItemHeight"
    [approxItemWidth]="selectComponent.virtualScrollApproxItemWidth"
    [bufferRatio]="selectComponent.virtualScrollBufferRatio"
    [headerFn]="selectComponent.virtualScrollHeaderFn">
    <ion-item-divider *virtualHeader="let header"
      [color]="selectComponent.groupColor ? selectComponent.groupColor : null">
      {{header}}
    </ion-item-divider>
    <button ion-item detail-none *virtualItem="let item"
      (click)="selectComponent._select(item)" class="ionic-selectable-item"
      [ngClass]="{
        'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),
        'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)
      }" [disabled]="selectComponent._isItemDisabled(item)">
      <!-- Use span for itemTemplate to preserve Ionic ellipsis styles. -->
      <span *ngIf="selectComponent.itemTemplate"
        [ngTemplateOutlet]="selectComponent.itemTemplate"
        [ngTemplateOutletContext]="{ item: item, isItemSelected: selectComponent._isItemSelected(item) }">
      </span>
      <span *ngIf="!selectComponent.itemTemplate">
        {{selectComponent._formatItem(item)}}
      </span>
      <div *ngIf="selectComponent.itemEndTemplate" item-right>
        <div [ngTemplateOutlet]="selectComponent.itemEndTemplate"
          [ngTemplateOutletContext]="{ item: item, isItemSelected: selectComponent._isItemSelected(item) }">
        </div>
      </div>
      <span *ngIf="selectComponent.itemIconTemplate" item-left
        class="ionic-selectable-item-icon-template"
        [ngTemplateOutlet]="selectComponent.itemIconTemplate"
        [ngTemplateOutletContext]="{ item: item, isItemSelected: selectComponent._isItemSelected(item) }">
      </span>
      <ion-icon *ngIf="!selectComponent.itemIconTemplate"
        [name]="selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'"
        [color]="selectComponent._isItemSelected(item) ? 'primary' : 'daek'"
        item-left>
      </ion-icon>
      <button *ngIf="selectComponent.canSaveItem"
        class="ionic-selectable-item-button" ion-button icon-only item-end
        outline (click)="selectComponent._saveItem($event, item)">
        <ion-icon name="md-create"></ion-icon>
      </button>
      <button *ngIf="selectComponent.canDeleteItem"
        class="ionic-selectable-item-button" ion-button icon-only item-end
        outline (click)="selectComponent._deleteItemClick($event, item)">
        <ion-icon name="md-trash"></ion-icon>
      </button>
    </button>
  </ion-list>
</ion-content>
<div class="ionic-selectable-add-item-template"
  *ngIf="selectComponent._isAddItemTemplateVisible"
  [ngStyle]="{ 'top.px': _header.offsetHeight }">
  <span [ngTemplateOutlet]="selectComponent.addItemTemplate"
    [ngTemplateOutletContext]="{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }">
  </span>
</div>
<ion-footer
  *ngIf="selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate"
  [ngStyle]="{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }">
  <ion-toolbar *ngIf="!selectComponent.footerTemplate">
    <ion-row>
      <ion-col *ngIf="selectComponent.canClear">
        <button ion-button full no-margin (click)="selectComponent._clear()"
          [disabled]="!selectComponent._selectedItems.length">
          {{selectComponent.clearButtonText}}
        </button>
      </ion-col>
      <ion-col *ngIf="selectComponent.canAddItem">
        <button ion-button full no-margin
          (click)="selectComponent._addItemClick()">
          {{selectComponent.addButtonText}}
        </button>
      </ion-col>
      <ion-col
        *ngIf="selectComponent.isMultiple || selectComponent.hasConfirmButton">
        <button ion-button full no-margin (click)="selectComponent._confirm()"
          [disabled]="!selectComponent.isConfirmButtonEnabled">
          {{selectComponent.confirmButtonText}}
        </button>
      </ion-col>
    </ion-row>
  </ion-toolbar>
  <div *ngIf="selectComponent.footerTemplate"
    [ngTemplateOutlet]="selectComponent.footerTemplate">
  </div>
</ion-footer>
`
            },] },
];
/** @nocollapse */
IonicSelectableModalComponent.ctorParameters = () => [
    { type: NavParams, },
    { type: ElementRef, },
];
IonicSelectableModalComponent.propDecorators = {
    "_cssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal',] },],
    "_canClearCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal-can-clear',] },],
    "_isMultipleCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-multiple',] },],
    "_isSearchingCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-searching',] },],
    "_isAddItemTemplateVisibleCssClass": [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-add-item-template-visible',] },],
    "_isIos": [{ type: HostBinding, args: ['class.ionic-selectable-modal-ios',] },],
    "_isMD": [{ type: HostBinding, args: ['class.ionic-selectable-modal-md',] },],
    "_searchbarComponent": [{ type: ViewChild, args: ['searchbarComponent',] },],
    "_content": [{ type: ViewChild, args: [Content,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const components = [IonicSelectableComponent, IonicSelectableModalComponent];
const directives = [
    IonicSelectableValueTemplateDirective,
    IonicSelectableItemTemplateDirective,
    IonicSelectableItemEndTemplateDirective,
    IonicSelectableTitleTemplateDirective,
    IonicSelectablePlaceholderTemplateDirective,
    IonicSelectableMessageTemplateDirective,
    IonicSelectableGroupTemplateDirective,
    IonicSelectableGroupEndTemplateDirective,
    IonicSelectableCloseButtonTemplateDirective,
    IonicSelectableSearchFailTemplateDirective,
    IonicSelectableAddItemTemplateDirective,
    IonicSelectableFooterTemplateDirective,
    IonicSelectableHeaderTemplateDirective,
    IonicSelectableItemIconTemplateDirective
];
class IonicSelectableModule {
}
IonicSelectableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    IonicPageModule.forChild(IonicSelectableComponent),
                    IonicPageModule.forChild(IonicSelectableModalComponent)
                ],
                declarations: [
                    ...components,
                    ...directives
                ],
                exports: [
                    ...components,
                    ...directives
                ],
                entryComponents: components
            },] },
];
/** @nocollapse */
IonicSelectableModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { IonicSelectableAddItemTemplateDirective, IonicSelectableCloseButtonTemplateDirective, IonicSelectableFooterTemplateDirective, IonicSelectableGroupEndTemplateDirective, IonicSelectableGroupTemplateDirective, IonicSelectableHeaderTemplateDirective, IonicSelectableItemEndTemplateDirective, IonicSelectableItemIconTemplateDirective, IonicSelectableItemTemplateDirective, IonicSelectableMessageTemplateDirective, IonicSelectableModalComponent, IonicSelectablePlaceholderTemplateDirective, IonicSelectableSearchFailTemplateDirective, IonicSelectableTitleTemplateDirective, IonicSelectableValueTemplateDirective, IonicSelectableComponent, IonicSelectableModule };
//# sourceMappingURL=ionic-selectable.js.map
