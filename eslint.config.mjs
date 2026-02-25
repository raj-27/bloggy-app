import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default tseslint.config(
    // STEP 1: Sabse pehle Global Ignores (Must be a separate object)
    {
        ignores: ['dist/**', 'node_modules/**', '**/dist/*', 'coverage'],
    },
    // STEP 2: Recommended configs
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    // STEP 3: Custom Rules (Jaise console errors fix karne ke liye)
    {
        files: ['**/*.ts'], // Sirf TS files par rules lagao
        rules: {
            'no-console': 'off', // Agar aapko console allow karna hai toh 'off' kar do
            'no-undef': 'off', // TS projects mein 'no-undef' ki zaroorat nahi hoti (TS khud handle karta hai)
        },
    },
);
