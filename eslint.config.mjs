import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import ts from 'typescript-eslint'
import loguxTsConfig from '@logux/eslint-config/ts'
import { fixupConfigRules } from '@eslint/compat'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default fixupConfigRules([
  ...loguxTsConfig,
  ...ts.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [],
    files: ['**/*.ts?(x)'],
  },
  {
    rules: {
      'import/extensions': 'off',
      'prefer-let/prefer-let': 'off',
      'prefer-const': 'error',
    },
  },
])
