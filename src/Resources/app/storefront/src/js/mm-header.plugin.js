// =============================================================================
// mm-header.plugin.js
// Sticky header behavior and mobile menu toggle
// =============================================================================
import Plugin from 'src/plugin-system/plugin.class';

export default class MmHeaderPlugin extends Plugin {

    static options = {
        stickyClass: 'mm-header--sticky',
        stickyOffset: 80,
    };

    init() {
        this._registerEvents();
    }

    _registerEvents() {
        window.addEventListener('scroll', this._onScroll.bind(this), { passive: true });
    }

    _onScroll() {
        if (window.scrollY > this.options.stickyOffset) {
            this.el.classList.add(this.options.stickyClass);
        } else {
            this.el.classList.remove(this.options.stickyClass);
        }
    }
}
