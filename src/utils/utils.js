export function getFormattedIngredients(ingredients) {
  if (ingredients) {
    return "Ingredients ".concat(Object.keys(ingredients || "").join(", "));
  }
  return "";
}

export function limitStringCharacters(string, isMobile, limit = 150) {
  limit = isMobile ? limit : 70;
  return string ? string.substring(0, limit) + "..." : "";
}
