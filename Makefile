install: #this should install dependencies
	npm ci

brain-games: #run the game
	node games/brain-games.js

brain-even: #run brain even
	node games/brain-even.js

brain-calc: #run brain calc
	node games/brain-calc.js

publish:
	npm publish --dry-run

lint: #run linter
	npx eslint .