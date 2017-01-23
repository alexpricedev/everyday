import { Either } from 'ramda-fantasy';

/**
 * Package up a possible `null` value into a
 * `Right` or `Left` container. Using `!=` over `!==`
 * allows us to catch the `undefined` case too.
 * @param {*} x - A value which might be null or undefined
 * @return {Either} leftOrRight - A `Right` of the value or an empty `Left`
 */
const fromNullable = x =>
  x != null ? Either.Right(x) : Either.Left(null); // eslint-disable-line


/**
 * Package up a possible exceptions into a `Right` or
 * `Left` container.
 * @param {Function} f - A function which might throw an exception
 * @return {Either} leftOrRight - A `Right` of the return value or a
 * `Left` of the exception
 */
const tryCatch = f => {
  try {
    return Either.Right(f());
  } catch (e) {
    return Either.Left(e);
  }
};

export {
  fromNullable,
  tryCatch,
};
