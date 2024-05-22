// Return the "prefix-classname" if there's a prefix
export const returnClass = (classPrefix: string, className: string) =>
  classPrefix ? `${classPrefix + '-' + className}` : className;
