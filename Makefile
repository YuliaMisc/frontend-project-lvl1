 install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc: 
	node bin/brain-calc.js

brain-gcd: 
	bin/brain-gcd.js

brain-progression:
	bin/ brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
	
test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8