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

brain-progression: #run brain prgression
	node bin/brain-prgression.js

brain-prime: #run brain prime
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint: #run linter
	npx eslint .