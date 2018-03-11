# modoki

Get 'modoki' value immidiately

[![npm: modoki](https://img.shields.io/npm/v/modoki.svg)](https://www.npmjs.com/package/modoki)
[![CircleCI](https://circleci.com/gh/nju33/modoki.svg?style=svg&circle-token=c6172cf7a5b8e1e0907621a6a44ef2686780b545)](https://circleci.com/gh/nju33/modoki)
[![Coverage Status](https://coveralls.io/repos/github/nju33/modoki/badge.svg?branch=master)](https://coveralls.io/github/nju33/modoki?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![license: mit](https://img.shields.io/packagist/l/doctrine/orm.svg)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

## install

```bash
yarn add [-D] modoki
```

## API

```ts
import {
	namae,
	denwabango
	yubinbango,
} from 'modoki';

namae() // 佐藤 大翔
denwabango() // 253-4107-23618 (\d{3,5}-\d{3,5}-\d{3,5})
yubinbango() // 195-1972 (\d{3}-\d{4})
```
