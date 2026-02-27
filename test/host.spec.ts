import { describe, test, expect } from '@jest/globals';
import { getHost } from '../utils';

describe('Host', () => {
    test('Get Host', () => {
        expect(getHost()).toBeTruthy();
    });
});
