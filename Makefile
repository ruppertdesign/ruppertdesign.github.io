clean:
	rm -rf _site/*

watch_jekyll:
	bundle exec jekyll serve --watch --baseurl=

watch_preact:
	yarn watch

build: clean
	bundle exec jekyll build --config _config.yml
	yarn build
