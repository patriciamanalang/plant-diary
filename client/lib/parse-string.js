export default function parseString(string) {
  if (string.includes('%20')) {
    const newString = string.replaceAll('%20', ' ');
    return newString;
  } else {
    return string;
  }
}
