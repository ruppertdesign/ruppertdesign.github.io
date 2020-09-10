clean:
	rm -rf _site/*

watch_jekyll:
	bundle exec jekyll serve --config _config.yml,_config_test.yml --watch --baseurl=

watch_preact:
	yarn watch

build: clean
	bundle exec jekyll build --config _config.yml
	yarn build
