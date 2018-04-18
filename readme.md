# adikteev-eslint-config <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![npm badge][npm-badge-png]][package-url]

The shared eslint configuration used at Adikteev.

## Install dependencies
Ensure packages are installed with correct version numbers by running:
```sh
(
  export PKG=eslint-config-adikteev;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs yarn add "$PKG"
)
```

Which produces and runs a command like:

```sh
yarn add eslint-config-adikteev babel-eslint@>=*.** eslint@>=*.** eslint-config-airbnb@>=*.** [...]
```

## Use the shareable config
To know of to use this shareable config in your project, please refer to the corresponding [_eslint_ documentation](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config).


[npm-version-svg]: http://versionbadg.es/Adikteev/adikteev-eslint-config.svg
[npm-badge-png]: https://nodei.co/npm/eslint-config-adikteev.png?downloads=true&stars=true
[package-url]: https://www.npmjs.com/package/eslint-config-adikteev
