install: #this should install dependencies
	npm ci

brain-games: #run the game
	node bin/brain-games.js

publish:
	npm publish --dry-run
