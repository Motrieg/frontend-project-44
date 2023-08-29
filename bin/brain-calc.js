#!/usr/bin/env node
import brainGame from '../src/index.js';
import calculationGame from '../src/games/brain-calc.js';

brainGame('What is the result of the expression?', calculationGame);
