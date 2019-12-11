export default function classes(...name: (string | undefined)[]) {
  return name.filter(Boolean).join(' ');
}