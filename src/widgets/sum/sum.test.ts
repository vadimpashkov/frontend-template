import { describe, it, expect } from '@jest/globals';
import { sum } from './sum';

describe('Sum', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
