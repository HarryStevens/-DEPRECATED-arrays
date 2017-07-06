This project is deprecated. Please use [jsz](https://github.com/harrystevens/jsz) instead.

# arrays.js

arrays.js is a Javascript library for manipulating arrays. Javascript has many [built-in methods for manipulating arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). The functions in this library are meant to supplement those.

To use this library, download `arrays.js` or `arrays.min.js` from the `src` directory and include it in your HTML file as `<script src="path/to/arrays.js"></script>` or `<script src="path/to/arrays.min.js"></script>`.

## API Reference
* [Math](#math)
* [Queries](#queries)
* [Transformations](#transformations)
* [Other](#other)

### <a name="math" href="#math">Math</a>

Functions for doing math with arrays of numbers.

<a name="average" href="#average">#</a> arrays.<b>average</b>(<i>array</i>)

Returns the average of an array of numbers.

<a name="extent" href="#extent">#</a> arrays.<b>extent</b>(<i>array</i>)

Returns the minimum and maximum values of an array of numbers as the array [min, max].

<a name="max" href="#max">#</a> arrays.<b>max</b>(<i>array</i>)

Returns the maximum value of an array of numbers.

<a name="median" href="#median">#</a> arrays.<b>median</b>(<i>array</i>)

Returns the median of an array of numbers.

<a name="min" href="#min">#</a> arrays.<b>min</b>(<i>array</i>)

Returns the minimum value of an array of numbers.

<a name="sum" href="#sum">#</a> arrays.<b>sum</b>(<i>array</i>)

Returns the sum of an array of numbers.


### <a name="queries" href="#queries">Queries</a>

Functions for testing arrays for certain properties. Return booleans.

<a name="is" href="#is">#</a> arrays.<b>is</b>(<i>array</i>)

Tests whether an element is an array. Returns *true* or *false*.


### <a name="transformations" href="#transformations">Transformations</a>

Functions for transforming arrays.

<a name="shuffle" href="#shuffle">#</a> arrays.<b>shuffle</b>(<i>array</i>)

Shuffles an array.

<a name="sortNumbers" href="#sortNumbers">#</a> arrays.<b>sortNumbers</b>(<i>array</i>)

Sorts an array of numbers.


### <a name="other" href="#other">Other</a>

Miscellaneous functions.

<a name="random" href="#random">#</a> arrays.<b>random</b>(<i>array</i>)

Returns a random item from an array.


