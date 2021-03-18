# Reduced Test Cases for Eleventy issues

## Template/layout evaluated even if `permalink` set to `false` in `eleventyComputed.js`

`eleventyComputed.js` contains this:

```javascript
module.exports = {
  permalink: (data) => false
};
```

So no HTML page is generated, as mentioned in the logs:

```bash
Wrote 0 files in 0.08 seconds (v0.11.1)
```

However, the layout is evaluated, as we see with the page title in the full logs:

```bash
$ npm run build

> 11ty-reduced-test-cases@1.0.0 build
> eleventy

-> This is the title of the page that is not generated <-
Wrote 0 files in 0.08 seconds (v0.11.1)
```

