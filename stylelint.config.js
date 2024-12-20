module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend', 'include', 'mixin'],
      },
    ],
    'scss/at-rule-no-unknown': true,
  },
}
