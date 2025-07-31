export interface Content {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: string;
  duration: string;
  genres: string[];
  description: string;
}

export const movieCategories = [
  {
    name: "Popular Movies",
    items: [
      {
        id: "1",
        title: "The Dark Knight",
        image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG-13",
        duration: "2h 32m",
        genres: ["Action", "Crime", "Drama"],
        description: "Batman faces the Joker in this epic crime saga."
      },
      {
        id: "2",
        title: "Inception",
        image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG-13",
        duration: "2h 28m",
        genres: ["Sci-Fi", "Action", "Thriller"],
        description: "A thief enters people's dreams to steal secrets."
      },
      {
        id: "3",
        title: "Interstellar",
        image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG-13",
        duration: "2h 49m",
        genres: ["Sci-Fi", "Drama", "Adventure"],
        description: "A team explores space to save humanity."
      },
      {
        id: "4",
        title: "The Matrix",
        image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "2h 16m",
        genres: ["Sci-Fi", "Action"],
        description: "A computer hacker learns about the true nature of reality."
      },
      {
        id: "5",
        title: "Pulp Fiction",
        image: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "2h 34m",
        genres: ["Crime", "Drama"],
        description: "Multiple storylines weave together in this crime classic."
      },
      {
        id: "6",
        title: "Fight Club",
        image: "https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "2h 19m",
        genres: ["Drama", "Thriller"],
        description: "An insomniac office worker forms an underground fight club."
      }
    ]
  },
  {
    name: "Action Movies",
    items: [
      {
        id: "7",
        title: "Mad Max: Fury Road",
        image: "https://images.pexels.com/photos/3137381/pexels-photo-3137381.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "2h 0m",
        genres: ["Action", "Adventure", "Sci-Fi"],
        description: "A post-apocalyptic action extravaganza."
      },
      {
        id: "8",
        title: "John Wick",
        image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "1h 41m",
        genres: ["Action", "Crime", "Thriller"],
        description: "A retired hitman seeks vengeance."
      },
      {
        id: "9",
        title: "Die Hard",
        image: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "2h 12m",
        genres: ["Action", "Thriller"],
        description: "A cop battles terrorists in a skyscraper."
      },
      {
        id: "10",
        title: "The Raid",
        image: "https://images.pexels.com/photos/1035682/pexels-photo-1035682.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "1h 41m",
        genres: ["Action", "Crime", "Thriller"],
        description: "Elite squad raids a criminal hideout."
      },
      {
        id: "11",
        title: "Mission: Impossible",
        image: "https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG-13",
        duration: "1h 50m",
        genres: ["Action", "Adventure", "Thriller"],
        description: "Secret agent takes on impossible missions."
      },
      {
        id: "12",
        title: "Speed",
        image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "1h 56m",
        genres: ["Action", "Thriller"],
        description: "A bus can't slow down or it will explode."
      }
    ]
  },
  {
    name: "Sci-Fi Movies",
    items: [
      {
        id: "13",
        title: "Blade Runner 2049",
        image: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "2h 44m",
        genres: ["Sci-Fi", "Drama", "Thriller"],
        description: "A blade runner uncovers a secret that threatens society."
      },
      {
        id: "14",
        title: "Dune",
        image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG-13",
        duration: "2h 35m",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        description: "A noble family becomes embroiled in a war for a desert planet."
      },
      {
        id: "15",
        title: "Ex Machina",
        image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "1h 48m",
        genres: ["Sci-Fi", "Drama", "Thriller"],
        description: "A programmer tests an AI with human consciousness."
      },
      {
        id: "16",
        title: "Arrival",
        image: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG-13",
        duration: "1h 56m",
        genres: ["Sci-Fi", "Drama"],
        description: "A linguist communicates with alien visitors."
      },
      {
        id: "17",
        title: "Her",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "R",
        duration: "2h 6m",
        genres: ["Sci-Fi", "Romance", "Drama"],
        description: "A man develops a relationship with an AI operating system."
      },
      {
        id: "18",
        title: "Minority Report",
        image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG-13",
        duration: "2h 25m",
        genres: ["Sci-Fi", "Action", "Thriller"],
        description: "In the future, crime is prevented before it happens."
      }
    ]
  }
];

export const tvShowCategories = [
  {
    name: "Popular TV Shows",
    items: [
      {
        id: "tv1",
        title: "Stranger Things",
        image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-14",
        duration: "4 Seasons",
        genres: ["Sci-Fi", "Drama", "Horror"],
        description: "Kids in Hawkins face supernatural forces."
      },
      {
        id: "tv2",
        title: "The Crown",
        image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "6 Seasons",
        genres: ["Drama", "Biography", "History"],
        description: "The reign of Queen Elizabeth II."
      },
      {
        id: "tv3",
        title: "Breaking Bad",
        image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "5 Seasons",
        genres: ["Crime", "Drama", "Thriller"],
        description: "A chemistry teacher turns to cooking meth."
      },
      {
        id: "tv4",
        title: "The Office",
        image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-14",
        duration: "9 Seasons",
        genres: ["Comedy", "Drama"],
        description: "Mockumentary about office workers."
      },
      {
        id: "tv5",
        title: "Game of Thrones",
        image: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "8 Seasons",
        genres: ["Fantasy", "Drama", "Adventure"],
        description: "Noble families vie for the Iron Throne."
      },
      {
        id: "tv6",
        title: "Friends",
        image: "https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-PG",
        duration: "10 Seasons",
        genres: ["Comedy", "Romance"],
        description: "Six friends navigate life in New York City."
      }
    ]
  },
  {
    name: "Netflix Originals",
    items: [
      {
        id: "tv7",
        title: "House of Cards",
        image: "https://images.pexels.com/photos/3137381/pexels-photo-3137381.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "6 Seasons",
        genres: ["Drama", "Thriller"],
        description: "A ruthless politician's rise to power."
      },
      {
        id: "tv8",
        title: "Orange Is the New Black",
        image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "7 Seasons",
        genres: ["Comedy", "Drama", "Crime"],
        description: "Women's stories in federal prison."
      },
      {
        id: "tv9",
        title: "The Witcher",
        image: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "3 Seasons",
        genres: ["Fantasy", "Adventure", "Drama"],
        description: "A monster hunter navigates a world of magic."
      },
      {
        id: "tv10",
        title: "Dark",
        image: "https://images.pexels.com/photos/1035682/pexels-photo-1035682.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "3 Seasons",
        genres: ["Sci-Fi", "Thriller", "Drama"],
        description: "Time travel mysteries in a German town."
      },
      {
        id: "tv11",
        title: "Ozark",
        image: "https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "4 Seasons",
        genres: ["Crime", "Drama", "Thriller"],
        description: "A family launders money for a Mexican cartel."
      },
      {
        id: "tv12",
        title: "Narcos",
        image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "3 Seasons",
        genres: ["Crime", "Drama", "Biography"],
        description: "The rise and fall of Pablo Escobar."
      }
    ]
  }
];

export const documentaryCategories = [
  {
    name: "Crime Documentaries",
    items: [
      {
        id: "doc1",
        title: "Making a Murderer",
        image: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "Limited Series",
        genres: ["Crime", "Documentary"],
        description: "A man's 18-year fight to prove his innocence."
      },
      {
        id: "doc2",
        title: "The Keepers",
        image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "Limited Series",
        genres: ["Crime", "Documentary", "Mystery"],
        description: "Investigation into a nun's unsolved murder."
      },
      {
        id: "doc3",
        title: "Wild Wild Country",
        image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "Limited Series",
        genres: ["Documentary", "Biography"],
        description: "The story of a controversial Indian guru in Oregon."
      },
      {
        id: "doc4",
        title: "Don't F**k with Cats",
        image: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "Limited Series",
        genres: ["Crime", "Documentary"],
        description: "Internet sleuths hunt down a killer."
      },
      {
        id: "doc5",
        title: "The Staircase",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "Limited Series",
        genres: ["Crime", "Documentary"],
        description: "A novelist accused of murdering his wife."
      },
      {
        id: "doc6",
        title: "Tiger King",
        image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "TV-MA",
        duration: "2 Seasons",
        genres: ["Crime", "Documentary", "Biography"],
        description: "The wild world of big cat breeding."
      }
    ]
  }
];

export const kidsCategories = [
  {
    name: "Kids Movies",
    items: [
      {
        id: "kids1",
        title: "Moana",
        image: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG",
        duration: "1h 47m",
        genres: ["Animation", "Adventure", "Family"],
        description: "A Polynesian teenager sails across the Pacific."
      },
      {
        id: "kids2",
        title: "Frozen",
        image: "https://images.pexels.com/photos/1035682/pexels-photo-1035682.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG",
        duration: "1h 42m",
        genres: ["Animation", "Adventure", "Family"],
        description: "Two sisters and the power of love."
      },
      {
        id: "kids3",
        title: "Toy Story",
        image: "https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "G",
        duration: "1h 21m",
        genres: ["Animation", "Adventure", "Family"],
        description: "Toys come to life when humans aren't around."
      },
      {
        id: "kids4",
        title: "Finding Nemo",
        image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "G",
        duration: "1h 40m",
        genres: ["Animation", "Adventure", "Family"],
        description: "A clownfish searches for his missing son."
      },
      {
        id: "kids5",
        title: "The Incredibles",
        image: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG",
        duration: "2h 5m",
        genres: ["Animation", "Adventure", "Family"],
        description: "A family of superheroes living in hiding."
      },
      {
        id: "kids6",
        title: "Coco",
        image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        year: "2024",
        rating: "PG",
        duration: "1h 45m",
        genres: ["Animation", "Adventure", "Family"],
        description: "A boy's journey to the Land of the Dead."
      }
    ]
  }
];

export const trendingContent = [
  ...movieCategories[0].items.slice(0, 3),
  ...tvShowCategories[0].items.slice(0, 3),
  ...documentaryCategories[0].items.slice(0, 2),
  ...kidsCategories[0].items.slice(0, 2)
];

export const allContent = [
  ...movieCategories.flatMap(category => category.items),
  ...tvShowCategories.flatMap(category => category.items),
  ...documentaryCategories.flatMap(category => category.items),
  ...kidsCategories.flatMap(category => category.items)
];