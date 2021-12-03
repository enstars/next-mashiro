# NexT Mashiro

Modified [NexT](https://github.com/next-theme/hexo-theme-next) theme, optimized for non-dev (Ensemble Stars) translators. The name "Mashiro" comes from [this dude](https://ensemble-stars.jp/characters/mashiro_tomoya/).

## Installation

```sh
$ cd hexo-site
$ git clone https://github.com/watatomo/next-mashiro themes/next
```

Replace your `package.json` file with [this one](https://gist.githubusercontent.com/watatomo/f04adecca7e99f54c471674a6f43512f/raw/8d2ec20eb13f3569623eb4a131517a568b42681a/package.json). Then copy and place these configuration files ([_config.yml](https://gist.githubusercontent.com/watatomo/f04adecca7e99f54c471674a6f43512f/raw/8d2ec20eb13f3569623eb4a131517a568b42681a/_config.yml), [_config.next.yml](https://gist.githubusercontent.com/watatomo/f04adecca7e99f54c471674a6f43512f/raw/8d2ec20eb13f3569623eb4a131517a568b42681a/_config.next.yml)) in your Hexo site's root folder and edit with what you need.

Use `npm install` within the directory to install the required plugins. (very important!)

Translation utilities are provided with [Hexo Mashiro](https://github.com/enstars/hexo-mashiro). For them to be displayed properly, [Mashiro](https://github.com/enstars/mashiro) must be placed under `<head>`. This edit has this installed already, but it must be updated manually when it gets updated (which happens a lot, sorry).
