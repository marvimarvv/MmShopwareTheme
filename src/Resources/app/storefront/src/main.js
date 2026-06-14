// =============================================================================
// main.js — MmB2bTheme JavaScript entry point
// Shopware uses a plugin registration system, not a framework component system.
// Import and register custom JS plugins here.
// =============================================================================

import MmSidebarPlugin from './js/mm-sidebar.plugin';
import MmListingViewPlugin from './js/mm-listing-view.plugin';
import MmHeaderPlugin from './js/mm-header.plugin';

const PluginManager = window.PluginManager;

// Register plugins — second arg is the CSS selector they attach to
PluginManager.register('MmSidebar', MmSidebarPlugin, '[data-mm-sidebar]');
PluginManager.register('MmListingView', MmListingViewPlugin, '[data-mm-listing-view]');
PluginManager.register('MmHeader', MmHeaderPlugin, '[data-mm-header]');
