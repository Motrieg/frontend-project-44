#!/usr/bin/env node
import brainGame from '../src/index.js';
import gcdGame from '../src/games/brain-gcd.js';

brainGame('Find the greatest common divisor of given numbers.', gcdGame);
