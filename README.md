# Reduced Test Cases for Eleventy issues

## Template/layout evaluated even if `permalink` set to `false`

`eleventyComputed.js` sets the `permalink` to `false` for Markdown files from the `drafts/` folder.

However, the layout is evaluated, as we see with both page titles in the logs:

```bash
$ npm run build

> 11ty-reduced-test-cases@1.0.0 build
> eleventy

-> This is the title of the page that is generated <-
-> This is the title of the draft that is not generated <-
Writing _site/index.html from ./src/index.md.
Wrote 1 file in 0.15 seconds (v0.11.1)
```
