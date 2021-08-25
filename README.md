# NexT Mashiro

Modified [NexT](https://github.com/next-theme/hexo-theme-next) theme, optimized for non-dev (Ensemble Stars) translators. The name "Mashiro" comes from [this dude](https://ensemble-stars.jp/characters/mashiro_tomoya/).

## Installation

```sh
$ cd hexo-site
$ git clone https://github.com/watatomo/next-mashiro themes/next
```

Configuration files: [_config.yml](https://github.com/watatomo/tl/blob/raw/_config.yml), [_config.next.yml](https://github.com/watatomo/tl/blob/raw/_config.next.yml)

Replace your `package.json` file with [this one](https://github.com/watatomo/tl/blob/raw/package.json).

Use `npm install` within the directory to install the required plugins.

## Features

**Mashirout:** A chat-like layout for dialogue. Still a work in progress and is only usable with *Ensemble Stars* characters.

### Usage

```md
{% bubble [CHARACTER] %}
    [dialogue text]
{% endbubble %}
```
### Issues

- Doesn't account for extra attributes `hidden` and `unknown`
  - Plan to use it like `{% bubble [CHARACTER], [ATTRIBUTE] %}`
- Doesn't use Markdown*-it* which means footnotes don't work
- Doesn't account for `spell` and `thought` styles
  - Could be worked around by using `<span>`, but that's also being used for sentences that have an em dash/special character ending (so it won't break at that character)

## To-do

- [ ] Dark theme toggle
- [ ] Fix fonts
- [x] Renovate TL layout
- [x] Transfer files
- [x] Make more variables
- [ ] Make config easier for non-coders

## References

- Styling: `css/_variables/base.styl`, `css/_colors.styl`
- [Bubble css and variables](https://github.com/watatomo/css)
  - [Images](https://github.com/watatomo/img)
