export const genres = [
  { _id: "1", name: "კლასიკა" },
  { _id: "2", name: "თანამედროვე" },
  { _id: "3", name: "სამეცნიერო" }
];

export function getGenres() {
  return genres.filter(g => g);
}
