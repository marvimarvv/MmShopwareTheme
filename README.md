# MmB2bTheme — Shopware 6.7 B2B Theme

Professional B2B and Industrial Wholesale theme for Shopware 6.7.

## Requirements
- Shopware 6.7.x
- PHP 8.2+
- Node.js 18+

## Installation (local dev)

```bash
# Copy to your Shopware instance
cp -r MmB2bTheme /path/to/shopware/custom/plugins/

cd /path/to/shopware

# Register and activate
bin/console plugin:refresh
bin/console plugin:install --activate MmB2bTheme

# Assign to sales channel
bin/console theme:change

# Compile
bin/console theme:compile
bin/console cache:clear
```

## Development workflow

```bash
# Watch mode (recompiles on SCSS/JS changes)
./bin/watch-storefront.sh

# After changing theme.json
bin/console theme:refresh
bin/console cache:clear

# After changing PHP files
bin/console cache:clear
```

## File structure

```
src/
├── MmB2bTheme.php                    ← Plugin bootstrap
└── Resources/
    ├── theme.json                    ← Central config (colors, fonts, settings)
    ├── snippet/
    │   ├── storefront.en-GB.json    ← Theme manager labels (English)
    │   └── storefront.de-DE.json    ← Theme manager labels (German)
    ├── views/storefront/             ← Twig template overrides (add as needed)
    └── app/storefront/
        └── src/
            ├── main.js              ← JS entry point
            ├── js/                  ← JS plugin classes
            └── scss/
                ├── overrides.scss   ← Bootstrap/SW variable overrides (before @Storefront)
                ├── base.scss        ← Custom styles (after @Storefront)
                ├── abstracts/       ← Variables, mixins
                ├── layout/          ← Header, nav, sidebar
                ├── components/      ← Product listing, cards, detail, etc.
                └── utilities/       ← Typography, spacing helpers
```

## Theme config fields (theme.json)

| Field | Type | Purpose |
|---|---|---|
| `mm-color-primary` | color | Main brand color (header, buttons) |
| `mm-color-accent` | color | CTA / highlight color |
| `mm-font-family-base` | fontFamily | Body font stack |
| `mm-header-phone` | text | Phone number in header bar |
| `mm-listing-default-view` | select | list or grid |
| `mm-listing-show-sku` | switch | Show article numbers |
| `mm-listing-show-stock` | switch | Show stock status |
| `mm-sidebar-enabled` | switch | Enable sidebar category nav |

## Key decisions
- Default listing view: **list** (table rows, B2B convention)
- Default color scheme: dark navy primary (#1a2e44), orange accent (#e65c00)
- Font: Inter / system-ui stack (no external font loading by default)
- Sidebar navigation enabled by default
- EAA/WCAG 2.1 AA compliance required throughout
