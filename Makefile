clean:
	rm -rf _site/*

serve_jekyll:
	bundle exec jekyll serve --watch --baseurl=

watch_preact:
	yarn watch

build_test: clean
	bundle exec jekyll build --config _config.yml,_config_test.yml
	yarn build
	dot_clean _site
	find _site -name .DS_Store -delete
	find _site -name ._* -delete
	gnutar -czf ruppertdesign.tar.gz -C _site .
