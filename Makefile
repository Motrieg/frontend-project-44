install: #this should install dependencies
	npm ci

brain-games: #run the game
	node bin/brain-games.js

brain-even: #run brain even
	node bin/brain-even.js

brain-calc: #run brain calc
	node bin/brain-calc.js

brain-gcd: #run brain gcd
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint: #run linter
	npx eslint .