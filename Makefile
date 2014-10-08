# expecting following env-variables:
# BASE_DOCUMENT_ROOT=/var/www/yoursite/html
# WEB_HOST=user@host

DOCUMENT_ROOT=$(BASE_DOCUMENT_ROOT)/ruppertdesign
SITE=site.tar.gz

DEPLOY=function deploy { \
  sudo rm -rf $(DOCUMENT_ROOT)/*; \
  cd $(DOCUMENT_ROOT); \
  sudo tar -xzf ~/$(SITE); \
  sudo chown -R www-data:www-data *; \
  rm ~/$(SITE); }


clean:
	rm -f $(SITE)
	rm -rf _site/*
	
debug:
	jekyll serve --watch --baseurl=
	
build:
	jekyll build
	dot_clean _site
	find _site -name .DS_Store -delete
	find _site -name ._* -delete
	
deploy_test: clean build
	gnutar -czf $(SITE) -C _site .
	scp $(SITE) $(WEB_HOST):~
	ssh -t $(WEB_HOST) "$(DEPLOY); deploy "
	rm $(SITE)
