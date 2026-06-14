// =============================================================================
// mm-sidebar.plugin.js
// Handles collapsible sidebar navigation for category tree
// =============================================================================
import Plugin from 'src/plugin-system/plugin.class';

export default class MmSidebarPlugin extends Plugin {

    static options = {
        activeClass: 'is-active',
        openClass: 'is-open',
    };

    init() {
        this._registerEvents();
    }

    _registerEvents() {
        // TODO: implement sidebar toggle for mobile
        // TODO: implement collapsible sub-categories
    }
}
