import { __spread } from 'tslib';
import { Directive, Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, IterableDiffers, Optional, Output, TemplateRef, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Form, Item, ModalController, Platform, Content, NavParams, IonicPageModule } from 'ionic-angular';
import 'rxjs';
import { CommonModule } from '@angular/common';

var IonicSelectableAddItemTemplateDirective = /** @class */ (function () {
    function IonicSelectableAddItemTemplateDirective() {
    }
    return IonicSelectableAddItemTemplateDirective;
}());
IonicSelectableAddItemTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableAddItemTemplate]',
            },] },
];
IonicSelectableAddItemTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableCloseButtonTemplateDirective = /** @class */ (function () {
    function IonicSelectableCloseButtonTemplateDirective() {
    }
    return IonicSelectableCloseButtonTemplateDirective;
}());
IonicSelectableCloseButtonTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableCloseButtonTemplate]',
            },] },
];
IonicSelectableCloseButtonTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableFooterTemplateDirective = /** @class */ (function () {
    function IonicSelectableFooterTemplateDirective() {
    }
    return IonicSelectableFooterTemplateDirective;
}());
IonicSelectableFooterTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableFooterTemplate]',
            },] },
];
IonicSelectableFooterTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableGroupEndTemplateDirective = /** @class */ (function () {
    function IonicSelectableGroupEndTemplateDirective() {
    }
    return IonicSelectableGroupEndTemplateDirective;
}());
IonicSelectableGroupEndTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableGroupEndTemplate]',
            },] },
];
IonicSelectableGroupEndTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableGroupTemplateDirective = /** @class */ (function () {
    function IonicSelectableGroupTemplateDirective() {
    }
    return IonicSelectableGroupTemplateDirective;
}());
IonicSelectableGroupTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableGroupTemplate]',
            },] },
];
IonicSelectableGroupTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableHeaderTemplateDirective = /** @class */ (function () {
    function IonicSelectableHeaderTemplateDirective() {
    }
    return IonicSelectableHeaderTemplateDirective;
}());
IonicSelectableHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableHeaderTemplate]',
            },] },
];
IonicSelectableHeaderTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableItemEndTemplateDirective = /** @class */ (function () {
    function IonicSelectableItemEndTemplateDirective() {
    }
    return IonicSelectableItemEndTemplateDirective;
}());
IonicSelectableItemEndTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableItemEndTemplate]',
            },] },
];
IonicSelectableItemEndTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableItemIconTemplateDirective = /** @class */ (function () {
    function IonicSelectableItemIconTemplateDirective() {
    }
    return IonicSelectableItemIconTemplateDirective;
}());
IonicSelectableItemIconTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableItemIconTemplate]',
            },] },
];
IonicSelectableItemIconTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableItemTemplateDirective = /** @class */ (function () {
    function IonicSelectableItemTemplateDirective() {
    }
    return IonicSelectableItemTemplateDirective;
}());
IonicSelectableItemTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableItemTemplate]',
            },] },
];
IonicSelectableItemTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableMessageTemplateDirective = /** @class */ (function () {
    function IonicSelectableMessageTemplateDirective() {
    }
    return IonicSelectableMessageTemplateDirective;
}());
IonicSelectableMessageTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableMessageTemplate]',
            },] },
];
IonicSelectableMessageTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectablePlaceholderTemplateDirective = /** @class */ (function () {
    function IonicSelectablePlaceholderTemplateDirective() {
    }
    return IonicSelectablePlaceholderTemplateDirective;
}());
IonicSelectablePlaceholderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectablePlaceholderTemplate]',
            },] },
];
IonicSelectablePlaceholderTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableSearchFailTemplateDirective = /** @class */ (function () {
    function IonicSelectableSearchFailTemplateDirective() {
    }
    return IonicSelectableSearchFailTemplateDirective;
}());
IonicSelectableSearchFailTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableSearchFailTemplate]',
            },] },
];
IonicSelectableSearchFailTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableTitleTemplateDirective = /** @class */ (function () {
    function IonicSelectableTitleTemplateDirective() {
    }
    return IonicSelectableTitleTemplateDirective;
}());
IonicSelectableTitleTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableTitleTemplate]',
            },] },
];
IonicSelectableTitleTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableValueTemplateDirective = /** @class */ (function () {
    function IonicSelectableValueTemplateDirective() {
    }
    return IonicSelectableValueTemplateDirective;
}());
IonicSelectableValueTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionicSelectableValueTemplate]',
            },] },
];
IonicSelectableValueTemplateDirective.ctorParameters = function () { return []; };
var IonicSelectableComponent = /** @class */ (function () {
    function IonicSelectableComponent(_modalController, ionForm, _platform, ionItem, _iterableDiffers, element) {
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
        this.items = [];
        this.itemsChange = new EventEmitter();
        this.modalCssClass = null;
        this.modalEnterAnimation = null;
        this.modalLeaveAnimation = null;
        this.isConfirmButtonEnabled = true;
        this.itemValueField = null;
        this.itemTextField = null;
        this.groupValueField = null;
        this.groupTextField = null;
        this.canSearch = false;
        this.hasInfiniteScroll = false;
        this.hasVirtualScroll = false;
        this.virtualScrollApproxItemHeight = '40px';
        this.virtualScrollApproxItemWidth = '100%';
        this.virtualScrollBufferRatio = 3;
        this.virtualScrollHeaderFn = function () { return null; };
        this.searchPlaceholder = 'Search';
        this.placeholder = null;
        this.searchFailText = 'No items found.';
        this.clearButtonText = 'Clear';
        this.addButtonText = 'Add';
        this.confirmButtonText = 'OK';
        this.closeButtonText = 'Cancel';
        this.focusSearchbar = false;
        this.headerColor = null;
        this.groupColor = null;
        this.onChange = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onSearchFail = new EventEmitter();
        this.onSearchSuccess = new EventEmitter();
        this.onInfiniteScroll = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onClear = new EventEmitter();
        this.searchDebounce = 250;
        this.disabledItems = [];
        this.shouldStoreItemValue = false;
        this.canSaveItem = false;
        this.canDeleteItem = false;
        this.onSaveItem = new EventEmitter();
        this.onDeleteItem = new EventEmitter();
        this.onAddItem = new EventEmitter();
        this.propagateOnChange = function (_) { };
        this.propagateOnTouched = function () { };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    Object.defineProperty(IonicSelectableComponent.prototype, "_isMultipleCssClass", {
        get: function () {
            return this.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasValueCssClass", {
        get: function () {
            return this.hasValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasPlaceholderCssClass", {
        get: function () {
            return this._hasPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_shouldStoreItemValue", {
        get: function () {
            return this.shouldStoreItemValue && this._hasObjects;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "searchText", {
        get: function () {
            return this._searchText;
        },
        set: function (searchText) {
            this._searchText = searchText;
            this._setHasSearchText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isSearching", {
        get: function () {
            return this._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "hasSearchText", {
        get: function () {
            return this._hasSearchText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (isEnabled) {
            this._isEnabled = !!isEnabled;
            this.enableIonItem(this._isEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "shouldBackdropClose", {
        get: function () {
            return this._shouldBackdropClose;
        },
        set: function (shouldBackdropClose) {
            this._shouldBackdropClose = !!shouldBackdropClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isOpened", {
        get: function () {
            return this._isOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "hasConfirmButton", {
        get: function () {
            return this._hasConfirmButton;
        },
        set: function (hasConfirmButton) {
            this._hasConfirmButton = !!hasConfirmButton;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isOnSearchEnabled", {
        get: function () {
            return this._isOnSearchEnabled;
        },
        set: function (isOnSearchEnabled) {
            this._isOnSearchEnabled = !!isOnSearchEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "canClear", {
        get: function () {
            return this._canClear;
        },
        set: function (canClear) {
            this._canClear = !!canClear;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isMultiple", {
        get: function () {
            return this._isMultiple;
        },
        set: function (isMultiple) {
            this._isMultiple = !!isMultiple;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "itemsToConfirm", {
        get: function () {
            return this._itemsToConfirm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "canAddItem", {
        get: function () {
            return this._canAddItem;
        },
        set: function (canAddItem) {
            this._canAddItem = !!canAddItem;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    IonicSelectableComponent.prototype.initFocus = function () { };
    IonicSelectableComponent.prototype.enableIonItem = function (isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.setElementClass('item-input-disabled', !isEnabled);
    };
    IonicSelectableComponent.prototype._click = function (event) {
        var _this = this;
        if (!this.isEnabled || event.detail === 0) {
            return;
        }
        this._label = this._getLabelText();
        event.preventDefault();
        event.stopPropagation();
        this.open().then(function () {
            _this.onOpen.emit({
                component: _this
            });
        });
    };
    IonicSelectableComponent.prototype._isNullOrWhiteSpace = function (value) {
        if (value === null || value === undefined) {
            return true;
        }
        return value.toString().replace(/\s/g, '').length < 1;
    };
    IonicSelectableComponent.prototype._setHasSearchText = function () {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    };
    IonicSelectableComponent.prototype._hasOnSearch = function () {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    };
    IonicSelectableComponent.prototype._hasOnSaveItem = function () {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    };
    IonicSelectableComponent.prototype._hasOnAddItem = function () {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    };
    IonicSelectableComponent.prototype._hasOnDeleteItem = function () {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    };
    IonicSelectableComponent.prototype._emitValueChange = function () {
        this.propagateOnChange(this.value);
        this._setIonItemValidityClasses();
        this.onChange.emit({
            component: this,
            value: this.value
        });
    };
    IonicSelectableComponent.prototype._emitSearch = function () {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    };
    IonicSelectableComponent.prototype._emitOnSelect = function (item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    };
    IonicSelectableComponent.prototype._emitOnClear = function (items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    };
    IonicSelectableComponent.prototype._emitOnSearchSuccessOrFail = function (isSuccess) {
        var eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    };
    IonicSelectableComponent.prototype._formatItem = function (item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    };
    IonicSelectableComponent.prototype._formatValueItem = function (item) {
        var _this = this;
        if (this._shouldStoreItemValue) {
            var selectedItem = this.items.find(function (_item) {
                return _item[_this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    };
    IonicSelectableComponent.prototype._getItemValue = function (item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    };
    IonicSelectableComponent.prototype._getStoredItemValue = function (item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    };
    IonicSelectableComponent.prototype._filterItems = function () {
        var _this = this;
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            this._emitSearch();
        }
        else {
            var groups_1 = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups_1 = this._groups;
            }
            else {
                var filterText_1 = this._searchText.trim().toLowerCase();
                this._groups.forEach(function (group) {
                    var items = group.items.filter(function (item) {
                        var itemText = (_this.itemTextField ?
                            item[_this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText_1) !== -1;
                    });
                    if (items.length) {
                        groups_1.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                });
                if (!groups_1.length) {
                    groups_1.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups_1;
            this._hasFilteredItems = !this._areGroupsEmpty(groups_1);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    };
    IonicSelectableComponent.prototype._isItemDisabled = function (item) {
        var _this = this;
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some(function (_item) {
            return _this._getItemValue(_item) === _this._getItemValue(item);
        });
    };
    IonicSelectableComponent.prototype._isItemSelected = function (item) {
        var _this = this;
        return this._selectedItems.find(function (selectedItem) {
            return _this._getItemValue(item) === _this._getStoredItemValue(selectedItem);
        }) !== undefined;
    };
    IonicSelectableComponent.prototype._addSelectedItem = function (item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    };
    IonicSelectableComponent.prototype._deleteSelectedItem = function (item) {
        var _this = this;
        var itemToDeleteIndex;
        this._selectedItems.forEach(function (selectedItem, itemIndex) {
            if (_this._getItemValue(item) ===
                _this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    };
    IonicSelectableComponent.prototype._saveItem = function (event, item) {
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
    };
    IonicSelectableComponent.prototype._deleteItemClick = function (event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    };
    IonicSelectableComponent.prototype._addItemClick = function () {
        this._itemToAdd = null;
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    };
    IonicSelectableComponent.prototype._close = function () {
        var _this = this;
        if (this._modalComponent._searchbarComponent) {
            this._modalComponent._searchbarComponent._fireBlur();
        }
        setTimeout(function () {
            _this.close().then(function () {
                _this.onClose.emit({
                    component: _this
                });
            });
            if (!_this._hasOnSearch()) {
                _this._searchText = '';
                _this._setHasSearchText();
            }
        });
    };
    IonicSelectableComponent.prototype._clear = function () {
        var _this = this;
        var selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then(function () {
            _this.onClose.emit({
                component: _this
            });
        });
    };
    IonicSelectableComponent.prototype._getMoreItems = function (infiniteScroll) {
        this._infiniteScroll = infiniteScroll;
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    };
    IonicSelectableComponent.prototype._setItemsToConfirm = function (items) {
        this._itemsToConfirm = [].concat(items);
    };
    IonicSelectableComponent.prototype._doSelect = function (selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    };
    IonicSelectableComponent.prototype._select = function (item) {
        var isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
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
    };
    IonicSelectableComponent.prototype._confirm = function () {
        this.confirm();
        this._close();
    };
    IonicSelectableComponent.prototype._getLabelText = function () {
        var label = this.ionItem ? this.ionItem.getNativeElement().querySelector('ion-label') : null;
        return label ? label.textContent : null;
    };
    IonicSelectableComponent.prototype._areGroupsEmpty = function (groups) {
        return groups.length === 0 || groups.every(function (group) {
            return !group.items || group.items.length === 0;
        });
    };
    IonicSelectableComponent.prototype._countFooterButtons = function () {
        var footerButtonsCount = 0;
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
    };
    IonicSelectableComponent.prototype._setItems = function (items) {
        var _this = this;
        var groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(function (item) {
                    var groupValue = _this._getPropertyValue(item, _this.groupValueField), group = groups.find(function (_group) { return _group.value === groupValue; });
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: _this._getPropertyValue(item, _this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    };
    IonicSelectableComponent.prototype._getPropertyValue = function (object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce(function (_object, _property) {
            return _object ? _object[_property] : null;
        }, object);
    };
    IonicSelectableComponent.prototype._setIonItemHasFocus = function (hasFocus) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.setElementClass('item-input-has-focus', hasFocus);
    };
    IonicSelectableComponent.prototype._setIonItemHasValue = function () {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.setElementClass('item-input-has-value', this.hasValue());
    };
    IonicSelectableComponent.prototype._setHasPlaceholder = function () {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    };
    IonicSelectableComponent.prototype._setIonItemValidityClasses = function () {
        var _this = this;
        if (!this.ionItem) {
            return;
        }
        requestAnimationFrame(function () {
            var classList = _this.element.nativeElement.classList;
            _this.ionItem.setElementClass('ng-invalid', false);
            _this.ionItem.setElementClass('ng-valid', false);
            _this.ionItem.setElementClass('ng-touched', false);
            _this.ionItem.setElementClass('ng-untouched', false);
            _this.ionItem.setElementClass('ng-dirty', false);
            _this.ionItem.setElementClass('ng-pristine', false);
            classList.forEach(function (className) {
                if (className === 'ng-invalid') {
                    _this.ionItem.setElementClass('ng-invalid', true);
                }
                if (className === 'ng-valid') {
                    _this.ionItem.setElementClass('ng-valid', true);
                }
                if (className === 'ng-touched') {
                    _this.ionItem.setElementClass('ng-touched', true);
                }
                if (className === 'ng-untouched') {
                    _this.ionItem.setElementClass('ng-untouched', true);
                }
                if (className === 'ng-dirty') {
                    _this.ionItem.setElementClass('ng-dirty', true);
                }
                if (className === 'ng-pristine') {
                    _this.ionItem.setElementClass('ng-pristine', true);
                }
            });
        });
    };
    IonicSelectableComponent.prototype._toggleAddItemTemplate = function (isVisible) {
        if (!this.addItemTemplate) {
            return;
        }
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    };
    IonicSelectableComponent.prototype.writeValue = function (value) {
        this.value = value;
        this._setIonItemValidityClasses();
    };
    IonicSelectableComponent.prototype.registerOnChange = function (fn) {
        this.propagateOnChange = fn;
    };
    IonicSelectableComponent.prototype.registerOnTouched = function (fn) {
        this.propagateOnTouched = fn;
    };
    IonicSelectableComponent.prototype.setDisabledState = function (isDisabled) {
        this.isEnabled = !isDisabled;
    };
    IonicSelectableComponent.prototype.ngOnInit = function () {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        this.ionForm.register(this);
        if (this.ionItem) {
            this.ionItem.setElementClass('item-input', true);
            this.ionItem.setElementClass('item-ionic-selectable', true);
        }
        this.enableIonItem(this.isEnabled);
    };
    IonicSelectableComponent.prototype.ngOnDestroy = function () {
        this.ionForm.deregister(this);
    };
    IonicSelectableComponent.prototype.ngDoCheck = function () {
        var itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    };
    IonicSelectableComponent.prototype.addItem = function (item) {
        var self = this;
        this.items.unshift(item);
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(function () {
                self._addItemObservable.unsubscribe();
                resolve();
            }, function () {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    };
    IonicSelectableComponent.prototype.deleteItem = function (item) {
        var _this = this;
        var self = this, hasValueChanged = false;
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(function (_item) {
                return _this._getItemValue(item) !== _this._getStoredItemValue(_item);
            });
        }
        if (this.value) {
            if (this.isMultiple) {
                var values = this.value.filter(function (value) {
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
        var items = this.items.filter(function (_item) {
            return _item.id !== item.id;
        });
        this.itemsChange.emit(items);
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(function () {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }, function () {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    };
    IonicSelectableComponent.prototype.hasValue = function () {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    };
    IonicSelectableComponent.prototype.open = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            var modalOptions = {
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
            self._modal.present().then(function () {
                self._setIonItemHasFocus(true);
                resolve();
            });
            self._modal.onWillDismiss(function () {
                self._setIonItemHasFocus(false);
            });
            self._modal.onDidDismiss(function (data, role) {
                self._isOpened = false;
                self._itemsToConfirm = [];
                if (role === 'backdrop') {
                    self.onClose.emit({
                        component: self
                    });
                }
            });
        });
    };
    IonicSelectableComponent.prototype.close = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._setIonItemValidityClasses();
            self._infiniteScroll = null;
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(function () {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    };
    IonicSelectableComponent.prototype.clear = function () {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
        this._setIonItemValidityClasses();
    };
    IonicSelectableComponent.prototype.confirm = function () {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    };
    IonicSelectableComponent.prototype.toggleItems = function (isSelect, items) {
        var _this = this;
        if (isSelect) {
            var hasItems = items && items.length;
            var itemsToToggle = this._groups.reduce(function (allItems, group) {
                return allItems.concat(group.items);
            }, []);
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter(function (itemToToggle) {
                    return items.find(function (item) {
                        return _this._getItemValue(itemToToggle) === _this._getItemValue(item);
                    }) !== undefined;
                });
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach(function (item) {
                _this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    };
    IonicSelectableComponent.prototype.scrollToTop = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(function () {
                resolve();
            });
        });
    };
    IonicSelectableComponent.prototype.scrollToBottom = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(function () {
                resolve();
            });
        });
    };
    IonicSelectableComponent.prototype.startSearch = function () {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    };
    IonicSelectableComponent.prototype.endSearch = function () {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    };
    IonicSelectableComponent.prototype.enableInfiniteScroll = function () {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.enable(true);
    };
    IonicSelectableComponent.prototype.disableInfiniteScroll = function () {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.enable(false);
    };
    IonicSelectableComponent.prototype.endInfiniteScroll = function () {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.complete();
        this._setItems(this.items);
    };
    IonicSelectableComponent.prototype.search = function (text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    };
    IonicSelectableComponent.prototype.showLoading = function () {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    };
    IonicSelectableComponent.prototype.hideLoading = function () {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    };
    IonicSelectableComponent.prototype.showAddItemTemplate = function () {
        this._toggleAddItemTemplate(true);
    };
    IonicSelectableComponent.prototype.hideAddItemTemplate = function () {
        this._toggleAddItemTemplate(false);
    };
    return IonicSelectableComponent;
}());
IonicSelectableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ionic-selectable',
                template: "<div class=\"ionic-selectable-value\">\n  <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n    [ngTemplateOutlet]=\"valueTemplate\"\n    [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n  </div>\n  <div class=\"ionic-selectable-value-item\"\n    *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n    <div [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n    </div>\n  </div>\n  <span *ngIf=\"!valueTemplate && _valueItems.length\">\n    <div class=\"ionic-selectable-value-item\"\n      *ngFor=\"let valueItem of _valueItems\">\n      {{_formatValueItem(valueItem)}}\n    </div>\n  </span>\n  <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n    class=\"ionic-selectable-value-item\">\n    <div [ngTemplateOutlet]=\"placeholderTemplate\">\n    </div>\n  </div>\n  <div class=\"ionic-selectable-value-item\"\n    *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n    {{placeholder}}\n  </div>\n</div>\n<div class=\"ionic-selectable-icon\">\n  <div class=\"ionic-selectable-icon-inner\"></div>\n</div>\n<button aria-haspopup=\"true\" ion-button=\"item-cover\" class=\"item-cover\"\n  [disabled]=\"!isEnabled\">\n</button>\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return IonicSelectableComponent; }),
                        multi: true
                    }]
            },] },
];
IonicSelectableComponent.ctorParameters = function () { return [
    { type: ModalController, },
    { type: Form, },
    { type: Platform, },
    { type: Item, decorators: [{ type: Optional },] },
    { type: IterableDiffers, },
    { type: ElementRef, },
]; };
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
var IonicSelectableModalComponent = /** @class */ (function () {
    function IonicSelectableModalComponent(navParams, _element) {
        var _this = this;
        this.navParams = navParams;
        this._element = _element;
        this._cssClass = true;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach(function (item) {
                    _this.selectComponent._selectedItems.push(item);
                });
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_canClearCssClass", {
        get: function () {
            return this.selectComponent.canClear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isMultipleCssClass", {
        get: function () {
            return this.selectComponent.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isSearchingCssClass", {
        get: function () {
            return this.selectComponent._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isAddItemTemplateVisibleCssClass", {
        get: function () {
            return this.selectComponent._isAddItemTemplateVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isIos", {
        get: function () {
            return this.selectComponent._isIos;
        },
        enumerable: true,
        configurable: true
    });
    IonicSelectableModalComponent.prototype._isMD = function () {
        return this.selectComponent._isMD;
    };
    IonicSelectableModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._header = this._element.nativeElement.querySelector('ion-header');
        if (this._searchbarComponent && this.selectComponent.focusSearchbar) {
            setTimeout(function () {
                _this._searchbarComponent.setFocus();
            }, 1000);
        }
    };
    return IonicSelectableModalComponent;
}());
IonicSelectableModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'ionic-selectable-modal',
                template: "<ion-header>\n  <ion-navbar *ngIf=\"!selectComponent.headerTemplate\"\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n    <ion-title>\n      <!-- Use span for titleTemplate to preserve Ionic ellipsis styles. -->\n      <span *ngIf=\"selectComponent.titleTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n      </span>\n      <span *ngIf=\"!selectComponent.titleTemplate\">\n        {{selectComponent.label}}\n      </span>\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"selectComponent._close()\">\n        <span *ngIf=\"selectComponent.closeButtonTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\n        </span>\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\" ion-text\n          showWhen=\"ios\">\n          {{selectComponent.closeButtonText}}\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.closeButtonTemplate\" name=\"md-close\"\n          hideWhen=\"ios\">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div *ngIf=\"selectComponent.headerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\n  </div>\n  <ion-toolbar\n    *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent\n      [(ngModel)]=\"selectComponent._searchText\"\n      (ionInput)=\"selectComponent._filterItems()\"\n      [placeholder]=\"selectComponent.searchPlaceholder\"\n      [debounce]=\"selectComponent.searchDebounce\">\n    </ion-searchbar>\n    <div class=\"ionic-selectable-message\"\n      *ngIf=\"selectComponent.messageTemplate\">\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ionic-selectable-spinner\" *ngIf=\"selectComponent._isSearching\">\n    <div class=\"ionic-selectable-spinner-background\"></div>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-list no-margin\n    *ngIf=\"!selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\"\n      class=\"ionic-selectable-group\">\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n        <!-- Use span for groupTemplate to preserve Ionic ellipsis styles. -->\n        <span *ngIf=\"selectComponent.groupTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\n          [ngTemplateOutletContext]=\"{ group: group }\">\n        </span>\n        <span *ngIf=\"!selectComponent.groupTemplate\">\n          {{group.text}}\n        </span>\n        <div *ngIf=\"selectComponent.groupEndTemplate\" item-right>\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\"\n            [ngTemplateOutletContext]=\"{ group: group }\">\n          </div>\n        </div>\n      </ion-item-divider>\n      <button ion-item detail-none *ngFor=\"let item of group.items\"\n        (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\n        [ngClass]=\"{\n          'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Use span for itemTemplate to preserve Ionic ellipsis styles. -->\n        <span *ngIf=\"selectComponent.itemTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <span *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </span>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" item-right>\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\" item-left\n          class=\"ionic-selectable-item-icon-template\"\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : 'daek'\"\n          item-left>\n        </ion-icon>\n        <button *ngIf=\"selectComponent.canSaveItem\"\n          class=\"ionic-selectable-item-button\" ion-button icon-only item-end\n          outline (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon name=\"md-create\"></ion-icon>\n        </button>\n        <button *ngIf=\"selectComponent.canDeleteItem\"\n          class=\"ionic-selectable-item-button\" ion-button icon-only item-end\n          outline (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon name=\"md-trash\"></ion-icon>\n        </button>\n      </button>\n    </ion-item-group>\n  </ion-list>\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\n    <span *ngIf=\"selectComponent.searchFailTemplate\"\n      [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\n    </span>\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" margin>\n      {{selectComponent.searchFailText}}\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf=\"!selectComponent.hasVirtualScroll\"\n    [enabled]=\"selectComponent.hasInfiniteScroll\"\n    (ionInfinite)=\"selectComponent._getMoreItems($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-list no-margin\n    *ngIf=\"selectComponent.hasVirtualScroll\"\n    [virtualScroll]=\"selectComponent._filteredGroups[0].items\"\n    [approxItemHeight]=\"selectComponent.virtualScrollApproxItemHeight\"\n    [approxItemWidth]=\"selectComponent.virtualScrollApproxItemWidth\"\n    [bufferRatio]=\"selectComponent.virtualScrollBufferRatio\"\n    [headerFn]=\"selectComponent.virtualScrollHeaderFn\">\n    <ion-item-divider *virtualHeader=\"let header\"\n      [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n      {{header}}\n    </ion-item-divider>\n    <button ion-item detail-none *virtualItem=\"let item\"\n      (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\n      [ngClass]=\"{\n        'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n        'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n      }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n      <!-- Use span for itemTemplate to preserve Ionic ellipsis styles. -->\n      <span *ngIf=\"selectComponent.itemTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n      </span>\n      <span *ngIf=\"!selectComponent.itemTemplate\">\n        {{selectComponent._formatItem(item)}}\n      </span>\n      <div *ngIf=\"selectComponent.itemEndTemplate\" item-right>\n        <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </div>\n      </div>\n      <span *ngIf=\"selectComponent.itemIconTemplate\" item-left\n        class=\"ionic-selectable-item-icon-template\"\n        [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n      </span>\n      <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n        [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n        [color]=\"selectComponent._isItemSelected(item) ? 'primary' : 'daek'\"\n        item-left>\n      </ion-icon>\n      <button *ngIf=\"selectComponent.canSaveItem\"\n        class=\"ionic-selectable-item-button\" ion-button icon-only item-end\n        outline (click)=\"selectComponent._saveItem($event, item)\">\n        <ion-icon name=\"md-create\"></ion-icon>\n      </button>\n      <button *ngIf=\"selectComponent.canDeleteItem\"\n        class=\"ionic-selectable-item-button\" ion-button icon-only item-end\n        outline (click)=\"selectComponent._deleteItemClick($event, item)\">\n        <ion-icon name=\"md-trash\"></ion-icon>\n      </button>\n    </button>\n  </ion-list>\n</ion-content>\n<div class=\"ionic-selectable-add-item-template\"\n  *ngIf=\"selectComponent._isAddItemTemplateVisible\"\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\n  <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\n    [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\n  </span>\n</div>\n<ion-footer\n  *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\n    <ion-row>\n      <ion-col *ngIf=\"selectComponent.canClear\">\n        <button ion-button full no-margin (click)=\"selectComponent._clear()\"\n          [disabled]=\"!selectComponent._selectedItems.length\">\n          {{selectComponent.clearButtonText}}\n        </button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\n        <button ion-button full no-margin\n          (click)=\"selectComponent._addItemClick()\">\n          {{selectComponent.addButtonText}}\n        </button>\n      </ion-col>\n      <ion-col\n        *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\n        <button ion-button full no-margin (click)=\"selectComponent._confirm()\"\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\n          {{selectComponent.confirmButtonText}}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.footerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\n  </div>\n</ion-footer>\n"
            },] },
];
IonicSelectableModalComponent.ctorParameters = function () { return [
    { type: NavParams, },
    { type: ElementRef, },
]; };
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
var components = [IonicSelectableComponent, IonicSelectableModalComponent];
var directives = [
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
var IonicSelectableModule = /** @class */ (function () {
    function IonicSelectableModule() {
    }
    return IonicSelectableModule;
}());
IonicSelectableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    IonicPageModule.forChild(IonicSelectableComponent),
                    IonicPageModule.forChild(IonicSelectableModalComponent)
                ],
                declarations: __spread(components, directives),
                exports: __spread(components, directives),
                entryComponents: components
            },] },
];
IonicSelectableModule.ctorParameters = function () { return []; };

export { IonicSelectableAddItemTemplateDirective, IonicSelectableCloseButtonTemplateDirective, IonicSelectableFooterTemplateDirective, IonicSelectableGroupEndTemplateDirective, IonicSelectableGroupTemplateDirective, IonicSelectableHeaderTemplateDirective, IonicSelectableItemEndTemplateDirective, IonicSelectableItemIconTemplateDirective, IonicSelectableItemTemplateDirective, IonicSelectableMessageTemplateDirective, IonicSelectableModalComponent, IonicSelectablePlaceholderTemplateDirective, IonicSelectableSearchFailTemplateDirective, IonicSelectableTitleTemplateDirective, IonicSelectableValueTemplateDirective, IonicSelectableComponent, IonicSelectableModule };
//# sourceMappingURL=ionic-selectable.js.map
