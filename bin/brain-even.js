#!/usr/bin/env node
import brainGame from '../src/index.js';
import isEvenGame from '../src/games/brain-even.js';

brainGame('Answer "yes" if the number is even, otherwise answer "no".', isEvenGame);
