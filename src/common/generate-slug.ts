function escapeDiacritics(name: string): string {
  return name
    .replace(/ą/g, 'a')
    .replace(/Ą/g, 'A')
    .replace(/ć/g, 'c')
    .replace(/Ć/g, 'C')
    .replace(/ę/g, 'e')
    .replace(/Ę/g, 'E')
    .replace(/ł/g, 'l')
    .replace(/Ł/g, 'L')
    .replace(/ń/g, 'n')
    .replace(/Ń/g, 'N')
    .replace(/ó/g, 'o')
    .replace(/Ó/g, 'O')
    .replace(/ś/g, 's')
    .replace(/Ś/g, 'S')
    .replace(/ż/g, 'z')
    .replace(/Ż/g, 'Z')
    .replace(/ź/g, 'z')
    .replace(/Ź/g, 'Z');
}

export function generateSlug(name: string): string {
  let wordsCount: number;
  if (name.split(' ')[3] === 'i') wordsCount = 5;
  else wordsCount = 4;

  let slug = name
    .replace(/[^a-zA-Z 0-9]/g, '')
    .split(' ')
    .splice(0, wordsCount)
    .join('-')
    .toLowerCase();

  slug = escapeDiacritics(slug);
  if (slug.substring(slug.length - 1) === '-')
    slug = slug.substring(0, slug.length - 1);

  return slug;
}
