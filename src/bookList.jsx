

const bookList = [
  
  {
  poster: 'https://telex.ge/images/detailed/10/hari-poteri-da-philosophiuri-qva-1.jpg',
  title: "ჰარი პოტერი და ფილოსოფიური ქვა",
  author: 'ჯოან როულინგი',
  genre: { _id: "1", name: "კლასიკა" },
  discription: "ყველასათვის ნაცნობი ამბის დასაწყისი",
  price: '14,50 ლ',
  id: 1,
	},

	{
  poster: "https://telex.ge/images/detailed/2/dv.png",
  title: "ჰარი პოტერი და საიდუმლო ოთახი",
  author: 'ჯოან როულინგი',
  genre: { _id: "1", name: "კლასიკა" },
  discription: "კლასიკად ქცეული ლიტერატურული ნაწარმოების მეორე ნაწილი",
  price: '11,90 ლ',
  id: 2,
	},

	{
  poster: "https://telex.ge/images/detailed/2/saidumlo_otaaxi.png",
  title: "ჰარი პოტერი და საიდუმლო ოთახი (ილუსტრირებული)",
  author: 'ჯოან როულინგი',
  genre: { _id: "1", name: "კლასიკა" },
  discription: "კლასიკად ქცეული ლიტერატურული ნაწარმოების მეორე ნაწილის ილუსტრირებული, განსაკუთრებული გამოცემა, საუკეთესო ილუსტრაციით",
  price: '17.90 ლ',
  id: 3,
	},
	{
  poster: "https://telex.ge/images/detailed/6/okeane-quchis-bolos.jpg",
  title: "ოკეანე ქუჩის ბოლოს",
  author: 'ნილ გეიმანი',
  genre: { _id: "2", name: "თანამედროვე" },
  discription: "საინტერესო, დადებითი წიგნი, საინტერესო სახელით",
  price: '10,10 ლ', 
  id: 4,
	},
     {
  poster: "https://images-na.ssl-images-amazon.com/images/I/711TxX8cdlL.jpg",
  title: "რომეო და ჯულიეტა",
  author: 'უილიამ შექსპირი',
  genre: { _id: "1", name: "კლასიკა" },
  discription: "ბიბლია რომანტიკოსებისათვის",
  price: '22,20 ლ', 
  id: 5,
  },
  {
  poster: "https://i.pinimg.com/564x/b5/6b/c2/b56bc2add952cc629967d00b98479069.jpg",
  title: "ბუზების მბრძანებელი",
  author: 'უილიამ გოლდინგი',
  genre: { _id: "1", name: "კლასიკა" },
  discription: "მეოცე საუკუნის, მოდერნიზმის კლასიკა",
  price: '15,20 ლ', 
  id: 6,
  },
  {
  poster: "https://images-na.ssl-images-amazon.com/images/I/71D3ShqLRJL.jpg",
  title: "ფუნგის საიდუმლო ცხოვრება",
  author: 'ალია უაიტლი',
  genre: { _id: "3", name: "სამეცნიერო" },
  discription: "ეს წიგნი ჩაგვახედებს ტყის შესწავლის ბიოლოგიის ახალ საიდუმლოებებში, რომლებიც ახალი თვალით დაგვანახებენ სამყაროს ",
  price: '11,10 ლ', 
  id: 7,
  },
   {
  poster: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609673026i/56527560._UY2056_SS2056_.jpg",
  title: "მოსიარულე სასახლე",
  author: 'დიანა უეინ ჯონსი',
  genre: { _id: "1", name: "კლასიკა" },
  discription: "ყველა დროის ერთ-ერთი საუკეთესო ნაწარმოების ადაპტაცია აქვს ამ წიგნს, ალბათ წიგნიც სათანადოდ გამორჩეულია",
  price: '33,90 ლ', 
  id: 8,
  },
   {
  poster: "https://i.pinimg.com/236x/f0/28/a6/f028a6799b43f8b8bffd211af9278cbb.jpg",
  title: "ჰამლეტი",
  author: 'უილიამ შექსპირი',
  genre: { _id: "1", name: "კლასიკა" },
  discription: "ეს წიგნი აღწერაში არ საჭიროებს",
  price: '19,50 ლ', 
  id: 9,
  },

];

export function getBookList() {
  return bookList;
}