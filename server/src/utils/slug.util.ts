// @ts-ignore: allow implicit any because this package is not typed
import anyBase from "any-base";
// @ts-ignore: allow implicit any because this package is not typed
import pad from "advanced-pad";

/* Configurations */
// The slugs will be generated based on the value of this number
let counter = 0;
const maxSlugNumber = 11881375;
// The number of characters in each slug
const slugWidth = 5;
// The characters to use in the slug
const baseCharacters = "abcdefghijklmnopqrstuvwxyz";

// converts number to slug (without padding)
const decToAlphaConverter = anyBase(anyBase.DEC, baseCharacters);

export function generateSlug(): string {
  return generateSlugWithNum(counter++);
}

export function generateSlugWithNum(num: Number): string {
  if (num > maxSlugNumber) {
    throw new Error("Slug number is too large");
  }

  const slug = decToAlphaConverter(String(num));
  const slugPadded = pad.padLeft(slug, slugWidth, baseCharacters[0]);

  return slugPadded;
}
