# ruppertdesign.github.io

MacOS Setup:

```
bundle config --local set path 'vendor/bundle'
bundle config --local build.eventmachine --with-openssl-dir=$(brew --prefix openssl)
bundle install
yarn install
```

Site is using [Jekyll](https://jekyllrb.com/) and [Preact](https://preactjs.com/) bundled with [Parcel](https://parceljs.org/).

[www.ruppertdesign.de](https://www.ruppertdesign.de)
