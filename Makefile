clean:
  rm -rf _site/*

debug:
  jekyll serve --watch --baseurl=

build_test: clean
  jekyll build --config _config.yml,_config_test.yml
  dot_clean _site
  find _site -name .DS_Store -delete
  find _site -name ._* -delete
  gnutar -czf ruppertdesign.tar.gz -C _site .
