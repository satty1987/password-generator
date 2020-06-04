# Password Generator 

 Generate random password of a specified length using simple character sequences.


Getting it
----------

### For use with deno

```ts
import { passwordGenerator } from "https://deno.land/x/password_generator/mod.ts";
```

## Usage

```ts
passwordGenerator(pattern, length, options);
```

* `pattern` **{String}**: (required) The pattern to use for random strings
* `length` **{Number}**: (optional) The length of the string to generate
* `options` **{Object}**: (optional) See available [options](#options)

### Pattern

The pattern to use for Password Generator

Patterns can contain any combination of the below characters, specified in any order.

**Sample:**

To generate a 10-character random string using all available characters:

```ts
passwordGenerator('*', 10); // '&66E$qoB_d'

passwordGenerator('Aa0!', 10); // 'e0Ynv5F7jy'
```

* `a`: Lowercase alpha characters (`abcdefghijklmnopqrstuvwxyz'`)
* `A`: Uppercase alpha characters (`ABCDEFGHIJKLMNOPQRSTUVWXYZ'`)
* `0`: Numeric characters (`0123456789'`)
* `!`: Special characters (`~!@#$%^&()_+-={}[];\',.`)
* `*`: All characters (all of the above combined)
* `?`: Custom characters (pass a string of custom characters to the options)

### Length

The length of the string to generate

**Examples:**

* `passwordGenerator('A', 5)` will generate a 5-character, uppercase, alphabetical, random string, e.g. `KDJWJ`.
* `passwordGenerator('0', 2)` will generate a 2-digit random number
* `passwordGenerator('0', 3)` will generate a 3-digit random number
* `passwordGenerator('0', 12)` will generate a 12-digit random number
* `passwordGenerator('A0', 16)` will generate a 16-character, alpha-numeric random string

If `length` is left undefined, the length of the pattern in the first parameter will be used. For example:

* `passwordGenerator('00')` will generate a 2-digit random number
* `passwordGenerator('000')` will generate a 3-digit random number
* `passwordGenerator('0000')` will generate a 4-digit random number...
* `passwordGenerator('AAAAA')` will generate a 5-character, uppercase alphabetical random string...


## Options

These are options that can be passed as the third argument.

#### chars

Type: `String`

Default: `undefined`

Define a custom string to be password Generator .

**Example:**

* `passwordGenerator('?', 20, {chars: 'tonystark'})` will generate a 20-character random string from the letters contained in `tonystark`.
* `passwordGenerator('?', {chars: 'tonystark'})` will generate a 9-character random string from the letters contained in `tonystark`.

#### exclude

Type: `String|Array`

Default: `undefined`

Specify a string or array of characters can are excluded from the possible characters used to generate the random string.

**Example:**

* `passwordGenerator('*', 20, { exclude: '0oOiIlL1' })` will generate a 20-character random string using all of possible characters except for `0oOiIlL1`.

## Usage Examples

* `passwordGenerator('A', 4)` (_whitespace insenstive_) would result in random 4-digit uppercase letters, like, `ZAKH`, `UJSL`... etc.
* `passwordGenerator('AAAA')` is equivalent to `passwordGenerator('A', 4)`
* `passwordGenerator('AAA0')` and `passwordGenerator('AA00')` and `passwordGenerator('A0A0')` are equivalent to `passwordGenerator('A0', 4)`
* `passwordGenerator('aa')`: results in double-digit, random, lower-case letters (`abcdefghijklmnopqrstuvwxyz`)
* `passwordGenerator('AAA')`: results in triple-digit, random, upper-case letters (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)
* `passwordGenerator('0', 6)`: results in six-digit, random numbers (`0123456789`)
* `passwordGenerator('!', 5)`: results in single-digit random, _valid_ non-letter characters (`~!@#$%^&()_+-={}[]
* `passwordGenerator('A!a0', 9)`: results in nine-digit, random characters (any of the above)

_The order in which the characters are defined is insignificant._
