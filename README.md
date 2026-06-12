# The Jewel of India — Concept Website Refresh

This is a GitHub Pages-ready static website concept for The Jewel of India.

## Publish on GitHub Pages

1. Create a public repository, such as `jewel-of-india`.
2. Upload the files from this package to the root of the repository.
3. Do **not** add a `CNAME` file unless you intentionally want to connect a custom domain.
4. In GitHub, go to **Settings → Pages**.
5. Set **Source** to `Deploy from a branch`.
6. Select `main` and `/ (root)`.
7. Save and wait for the deployment to finish.

For an organization named `Business-Refresh`, the demo URL should be:

`https://business-refresh.github.io/jewel-of-india/`

## Update menu items and prices

Edit `menu-data.js`.

Each dish uses this format:

```js
["Dish Name", "18.95", "Short description."]
```

The visible website menu and printable PDF menu both load from that same file.

## Confirm before presenting as a final restaurant website

This concept was built from publicly visible information on the restaurant's existing website. Confirm all menu items, prices, spelling, addresses, phone numbers, hours, and service details directly with the restaurant before treating the site as final.

## Image notes

The concept currently uses remotely hosted Unsplash images for demonstration. Replace them with restaurant-approved food photography before using the site as a production website.


Latest layout update
- Moved the mascot artwork to the upper right of the welcome section
- Reworked the welcome section to match the earlier layout more closely
- Replaced stacked symbols with left-aligned feature icons to reduce vertical space
- Adjusted the mobile layout so the mascot centers above the text on small screens


Pattern correction
- Restored the original gold floral ornament design
- Kept each ornament positioned to the left of its feature title
- Left the mascot placement and compact mobile layout unchanged


Gallery update
- Added a Gallery link in the navigation
- Added a featured food-photo band below the hero with layered card shadows
- Added a photo gallery section with six food images and captions
- Styled the image cards with a soft lifted shadow so they feel richer on the first screen


Gallery cleanup
- Removed the featured image strip below the hero
- Kept the gallery lower on the page
- Removed image captions so photos are not labeled incorrectly
- Reworked the gallery into a cleaner visual mosaic with six food images
- Added a subtle hover zoom and soft card shadow


Gallery expansion
- Added nine supplied restaurant photos to the gallery
- Replaced the temporary stock gallery images with the provided images
- Mixed food, drinks, catering, dining-room, and family photos into a tasteful mosaic
- Added a subtle vignette overlay to selected images for a warmer presentation


Gallery mix update
- Restored the six stock food photos that were used in the earlier draft
- Kept all nine supplied restaurant photos
- Mixed both sets into a single gallery with fifteen images
- Kept captions off the gallery cards
- Kept the vignette treatment subtle


Performance update
- Converted local gallery images to compressed WebP files
- Converted transparent brand artwork to WebP
- Added lazy loading and asynchronous decoding to gallery images
- Kept the header logo prioritized so the brand appears quickly
