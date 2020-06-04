
import {variableType, isNumber} from "./helper.ts";

interface KeyValuePair {
    [key: string]: string
}
const allowFields: KeyValuePair = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    special: '~!@#$%^&()_+-={}[];\',.',
};
allowFields.all = allowFields.lower + allowFields.upper + allowFields.number + allowFields.special

/**
 * Generate random Password of a specified `length`,
 * based on the given `pattern`.
 *
 * @param {String} `pattern` it is to use for generating the random string.
 * @param {String} `length`  it is use to length of the string to generate.
 * @param {String} `options`
 * @return {String}
 * @api public
 */

function passwordGenerator(pattern:any, length?:any, options?:any) {
    if (typeof pattern === 'undefined') {
        throw new Error('Password expects a string or number as a parameter');
    }

    let custom = false;
    if (arguments.length === 1) {
        if (typeof pattern === 'string') {
            length = pattern.length;

        } else if (isNumber(pattern)) {
            options = {};
            length = pattern;
            pattern = '*';
        }
    }

    if (variableType(length) === 'object' && length.hasOwnProperty('chars')) {
        options = length;
        pattern = options.chars;
        length = pattern.length;
        custom = true;
    }

    let mask = '';
    let res = '';
    let option = options || {};


    // fields to be used
    if (pattern.indexOf('?') !== -1) mask += option.chars;
    if (pattern.indexOf('a') !== -1) mask += allowFields.lower;
    if (pattern.indexOf('A') !== -1) mask += allowFields.upper;
    if (pattern.indexOf('0') !== -1) mask += allowFields.number;
    if (pattern.indexOf('!') !== -1) mask += allowFields.special;
    if (pattern.indexOf('*') !== -1) mask += allowFields.all;
    if (custom) mask += pattern;

    // fields to exclude
    if (option.exclude) {
        let exclude = variableType(option.exclude) === 'string' ? option.exclude : option.exclude.join('');
        exclude = exclude.replace(new RegExp('[\\]]+', 'g'), '');
        mask = mask.replace(new RegExp('[' + exclude + ']+', 'g'), '');

        if (option.exclude.indexOf(']') !== -1) mask = mask.replace(new RegExp('[\\]]+', 'g'), '');
    }

    while (length--) {
        const random =  Math.random() ;
        res += mask.charAt(parseInt( ""+random * mask.length, 10));
    }
    return res;
};

export {passwordGenerator}