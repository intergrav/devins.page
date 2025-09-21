---
title: "site changes and other updates"
description: "some small changes to devins.page, and other stuff"
pubDate: 2025-09-20
categories: ["meta"]
---

i made a couple changes to the website:

- using [system colors](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color) again, since i didn't like the color scheme i came up with.
- ~~removed [giscus](https://giscus.app) comments since they were never really used and just adds bloat to the page. maybe in the future i'll make a simpler comments system.~~ i've added it back, but you have to click the "load giscus" button at the bottom of the page.
- redesigned the header to be a lot more simple, moved external links to the footer.
- use serif fonts for headings, cursive font for site title, just because i think it looks more stylish.
- removed [clientrouter](https://docs.astro.build/en/guides/view-transitions) which gets rid of site transitions, i felt like it didn't really fit well and some browsers couldn't handle it properly.
- added back link underlines for accessibility

besides that, im planning on maybe working on a few new projects in the coming months.

## litedocs

i was working on a documentation theme for [Astro](https://astro.build), similar to [Starlight](https://starlight.astro.build). the main difference is that it will be _far, far_ more lightweight and minimal (like this current site). i haven't come up with a final name yet but i'll probably just call it "litedocs" or something. once that's done, i may redesign the [SkywardMC site](https://skywardmc.org) to use that, so i can test it and make sure it works properly. it'll include the necessary stuff such as site-wide search with the [pagefind api](https://pagefind.app), a customizable sidebar for nav and external links, and internationalization.

while working on this, i had to make a lot of changes to [slight.css](https://slightcss.devins.page) to make it work better. so, that may get a new major version aswell. it mainly includes some cleanup and new variables to work with.

if/when this project is released, i'll make a post about it here. maybe i'll also work on similar projects, like a blog theme. slight.css, this project, and other stuff like that will probably be in under it's own organization.
