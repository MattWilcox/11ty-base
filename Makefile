TAG?=18-alpine

docker:
	docker build \
		. \
		-t 11tybase/node:${TAG} \
		--build-arg TAG=${TAG} \
		--no-cache
npm:
	docker container run \
		--name 11ty \
		--rm \
		-t \
		-p 8080:8080 \
		-p 3001:3001 \
		-v `pwd`:/app \
		11tybase/node:${TAG} \
		$(filter-out $@,$(MAKECMDGOALS))
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
