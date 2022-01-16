# Browser blend-mode issues

Demo for cross-browser issues with [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) and [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend) [blend modes](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode).


# CodePen

- [SVG feBlend](https://codepen.io/siberex/pen/rNGdYGe)

- [CSS: mix-blend-mode](https://codepen.io/siberex/pen/gOGexLV)


# JS feature detection

```js
function isMixBlendModeSupported() {
  var result = false;
  try {
    // Narrow filter down to exclude browsers without CSS @supports API:
    result = window.CSS.supports('mix-blend-mode', 'difference');

    // Exclude Chrome-based browsers when P3 gamut is supported (Mac OS retina, for example),
    // because colors are rendered wrong, when filter product should be rgb(0, 255, 255),
    // it is rendered as rgb(0, 207, 223).
    // Ref.: https://github.com/siberex/blend-mode-issues
    if (typeof window['chrome'] !== 'undefined'
          && window.matchMedia("(color-gamut: p3)").matches) {
      result = false;
    }
  } catch(e) {}
  return result;
}

// Ref.: https://github.com/Modernizr/Modernizr/pull/531
function isSvgFilterSupported() {
  var result = false;
  try {
    result = typeof SVGFEBlendElement !== undefined &&
      SVGFEBlendElement.SVG_FEBLEND_MODE_DIFFERENCE !== undefined;
  } catch(e) {}
  return result;
}
```


# Screenshots

## SVG feBlend

Mac OS Chrome 96 ![Mac OS Chrome 96](./svg-feBlend/screenshots/MacOS.Chrome%2096.png "Mac OS Chrome 96")

Mac OS FireFox 95 ![Mac OS FireFox 95](./svg-feBlend/screenshots/MacOS.FireFox%2095.png "Mac OS FireFox 95")

MacOS.Safari 15.2 ![MacOS.Safari 15.2](./svg-feBlend/screenshots/MacOS.Safari%2015.2.jpg "MacOS.Safari 15.2")

Windows Chrome 96 ![Windows Chrome 96](./svg-feBlend/screenshots/Win.Chrome%2096.png "Windows Chrome 96")

Windows IE 11 (the most correct one) ![Windows IE 11](./svg-feBlend/screenshots/Windows.IE%2011.png "Windows IE 11")


## mix-blend-mode

Mac OS Chrome 96 ![Mac OS Chrome 96](./mix-blend-mode/screenshots/MacOS.Chrome%2096.png "Mac OS Chrome 96")

Mac OS Safari 15.2 P3 colors ![Mac OS Safari 15.2 P3 colors](./mix-blend-mode/screenshots/MacOS.Safari%2015.2.png "Mac OS Safari 15.2 P3 colors")

Mac OS Firefox 95 ![Mac OS Firefox 95](./mix-blend-mode/screenshots/MacOS.Firefox%2095.png "Mac OS Firefox 95")

Windows Chrome 96 ![Windows Chrome 96](./mix-blend-mode/screenshots/Windows.Chrome%2096.png "Windows Chrome 96")
