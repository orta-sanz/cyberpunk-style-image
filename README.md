# Cyberpunk Style Image

[![Build Status](https://travis-ci.org/orta-sanz/cyberpunk-style-image.svg?branch=master)](https://travis-ci.org/orta-sanz/cyberpunk-style-image)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<center>
    ![imagen](https://raw.githubusercontent.com/orta-sanz/cyberpunk-style-image/master/example/img/gitimage.png)
</center>

This simple plugin was an exercise to practice the clip-path property. With `:hover` the image will alter some opacity and we apply a nice-looking hue-rotate effect.

## Installation

```
yarn add cyberpunk-style-image

npm install cyberpunk-style-image --save
```

# How to use it

Here's an example:

```html
<!-- index.html -->

<div class="future-image-cover" data-img="image_url.png"></div>
```

```javascript
// script.js

import cyberImage from 'cyberpunk-style-image';

cyberImage(document.getElementById('test'), './img/photo.jpg');
```

### ToDo
- [ ] Responsive image
- [ ] Improve `:hover` effect
