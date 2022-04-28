 install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
	
test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8