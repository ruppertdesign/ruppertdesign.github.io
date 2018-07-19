clean:
	rm -rf _site/*

watch_js:
	yarn webpack --mode development --watch
	
watch_jekyll:
	bundle exec jekyll serve --watch --baseurl=	

build_js:
	yarn webpack --mode production

build_test: clean
	bundle exec jekyll build --config _config.yml,_config_test.yml
	dot_clean _site
	find _site -name .DS_Store -delete
	find _site -name ._* -delete
	gnutar -czf ruppertdesign.tar.gz -C _site .
