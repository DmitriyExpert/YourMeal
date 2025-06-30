export default {
  extends: [
    'stylelint-config-standard-scss', // Заменил на stylelint-config-standard-scss
    'stylelint-config-recommended-scss',
  ],
  rules: {
    // Базовые правила CSS (часть stylelint-config-standard)
    'color-no-invalid-hex': true,
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'media-feature-name-no-unknown': true,
    'comment-no-empty': true,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-invalid-position-at-import-rule': true,
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'never',
    'import-notation': 'url',
    'shorthand-property-no-redundant-values': true,
    'declaration-no-important': true,
    'declaration-block-single-line-max-declarations': 1,
    'no-unknown-animations': true,
    'selector-type-case': 'lower',
    'rule-empty-line-before': 'always',
    'at-rule-empty-line-before': 'always',
    'selector-class-pattern': null,

    // Правила, специфичные для SCSS
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment'],
        ignore: ['after-dollar-variable'],
      },
    ],
    'scss/dollar-variable-pattern': null, // Можно настроить паттерн для именования переменных
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,

    // Отключаем проверку имен глобальных функций
    'scss/no-global-function-names': null, // Отключаем проверку имен глобальных функций
  },
};
