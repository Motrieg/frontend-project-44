#!/usr/bin/env node
import brainGame from '../src/index.js';
import progressionGame from '../src/games/brain-progression.js';

brainGame('What number is missing in the progression?', progressionGame);
