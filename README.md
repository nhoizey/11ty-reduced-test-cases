# Reduced Test Cases for Eleventy issues

## Template/layout evaluated even if `permalink` set to `false`

When `permalink` is set to `false`:

- either directly in the Front Matter
- or via `eleventyComputed.js` for files from the `drafts/` folder

The template/layout is still evaluated, as we see with these three page titles in the logs:

```bash
$ npm run build

> 11ty-reduced-test-cases@1.0.0 build
> eleventy

-> This is the title of a GHOST page that IS NOT generated <-
-> This is the title of the NORMAL page that IS generated <-
-> This is the title of the DRAFT that IS NOT generated <-
Writing _site/index.html from ./src/index.md.
Wrote 1 file in 0.11 seconds (v0.11.1)
```
