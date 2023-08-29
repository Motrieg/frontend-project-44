#!/usr/bin/env node
import brainGame from '../src/index.js';
import isPrimeGame from '../src/games/brain-prime.js';

brainGame('Answer "yes" if given number is prime. Otherwise answer "no".', isPrimeGame);
