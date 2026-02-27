import { describe, test, expect } from '@jest/globals';
import { getVersion } from '../utils';

describe('Version', () => {
    test('Get version', () => {
        expect(getVersion()).toBeTruthy();
    });
});
