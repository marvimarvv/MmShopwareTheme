// =============================================================================
// mm-listing-view.plugin.js
// Toggles between list and grid view, persists preference in localStorage
// =============================================================================
import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class MmListingViewPlugin extends Plugin {

    static options = {
        listViewClass: 'mm-listing--list',
        gridViewClass: 'mm-listing--grid',
        storageKey: 'mm-listing-view',
        defaultView: 'list',
    };

    init() {
        this._listing = this.el;
        this._applyStoredView();
        this._registerEvents();
    }

    _applyStoredView() {
        const stored = localStorage.getItem(this.options.storageKey);
        const view = stored || this.options.defaultView;
        this._setView(view);
    }

    _setView(view) {
        this._listing.classList.remove(
            this.options.listViewClass,
            this.options.gridViewClass
        );
        this._listing.classList.add(
            view === 'list' ? this.options.listViewClass : this.options.gridViewClass
        );
    }

    _registerEvents() {
        // TODO: wire up list/grid toggle buttons
    }
}
