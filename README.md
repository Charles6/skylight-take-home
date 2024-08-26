# Charles's notes for take home

## Three main tasks 
  - Create a new cart button - https://github.com/Charles6/skylight-take-home/blob/main/app/components/CharlesAddToCartButton.tsx
  - Add a shop pay button to the product form component - https://github.com/Charles6/skylight-take-home/blob/main/app/components/ProductForm.tsx#L54
  - Add sort for collections page - https://github.com/Charles6/skylight-take-home/blob/main/app/routes/collections.%24handle.tsx#L148

## Nice to have
  -Add "All Products" page - https://github.com/Charles6/skylight-take-home/blob/main/app/components/Header.tsx#L177
  - No infinate scroll added

## Additional notes

I have also added a new selection menu which should be realitively useful for different uses, as it only needs a list of strings, an action to return that string, and a state for what item is selected.
https://github.com/Charles6/skylight-take-home/blob/main/app/components/SelectMenu.tsx

New styling was also added through a new css file. This includes most of the new styling for the buttons, and the select menu.
https://github.com/Charles6/skylight-take-home/blob/main/app/styles/shopStyle.css

# Hydrogen template: Skeleton

Hydrogen is Shopify’s stack for headless commerce. Hydrogen is designed to dovetail with [Remix](https://remix.run/), Shopify’s full stack web framework. This template contains a **minimal setup** of components, queries and tooling to get started with Hydrogen.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Vite
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 18.0.0 or higher

```bash
npm create @shopify/hydrogen@latest
```

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```

## Setup for using Customer Account API (`/account` section)

Follow step 1 and 2 of <https://shopify.dev/docs/custom-storefronts/building-with-the-customer-account-api/hydrogen#step-1-set-up-a-public-domain-for-local-development>
