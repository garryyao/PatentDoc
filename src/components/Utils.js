export function textFromNode(node) {
  return (node && node['#text']) || ''
}

export function safeJoin(str1, str2) {
  return function joinWithSep(sep=",") {
    return str1 && str2 ? [str1, str2].join(sep) : str1 || str2
  }
}