
import { Component, OnInit } from '@angular/core';
import { movies_series } from 'src/interfaces/movies_series';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchMS = '';
  constructor() { }


  ngOnInit(): void {
  }

  Movies_Series : movies_series[] = [

    {
      id:1,
      name: "Black Widow",
      description:"Hola",
      image: 'https://www.themoviedb.org/t/p/original/ytnhzdwtj0YfC5NVWrrPRGSGZb7.jpg',
      rating: 6.8,
      category: "movie",
    },

    {
      id:2,
      name: "Uncharted",
      description:"A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
      image: 'https://www.themoviedb.org/t/p/original/nMO3QWa6liTwNWhVICkjzaYfPoH.jpg',
      rating: 7.3,
      category: "movie",
    },

    {
      id:3,
      name: "The Matrix Resurrections",
      description:"Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
      image: 'https://www.themoviedb.org/t/p/original/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
      rating: 6.8,
      category: "movie",
    },

    {
      id:4,
      name: "Nightmare Alley",
      description:"An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
      image: 'https://www.themoviedb.org/t/p/original/680klE0dIreQQOyWKFgNnCAJtws.jpg',
      rating: 7.2,
      category: "movie",
    },

    {
      id:5,
      name: "Moonfall ",
      description:"A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
      image: 'https://www.themoviedb.org/t/p/original/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg',
      rating: 5.9,
      category: "movie",
    },

    {
      id:6,
      name: "Euphoria",
      description:"A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.",
      image: 'https://www.themoviedb.org/t/p/original/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg',
      rating: 8.4,
      category: "serie",
    },

    {
      id:7,
      name: "WandaVision",
      description:"Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
      image: 'https://www.themoviedb.org/t/p/original/frobUz2X5Pc8OiVZU8Oo5K3NKMM.jpg',
      rating: 8.4,
      category: "serie",
    },

    {
      id:8,
      name: "Loki",
      description:"After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.",
      image: 'https://www.themoviedb.org/t/p/original/rX1wQMTKFqF0gvZyS0DDQqgnQPB.jpg',
      rating: 8.2,
      category: "serie",
    },

    {
      id:9,
      name: "Peaky Blinders",
      description:"As Britain recovers from the despair of the Great War, people survive as best they can, and criminal gangs run rampant in an economically shaken nation.",
      image: 'https://www.themoviedb.org/t/p/original/5mQlikvrHD0IGi1p35FEzLBErMp.jpg',
      rating: 8.6,
      category: "serie",
    },

    {
      id:10,
      name: "The Simpson",
      description:"American animated comedy created by Matt Groening for the Fox company. The series is a satirical parody of the style of the American middle class embodied by a family with the same name, made up of Homer, Marge, Bart, Lisa, and Maggie Simpson. The plot takes place in the fictional city of Springfield and parodies American culture, society, television, and many other aspects of the human condition.",
      image: 'https://www.themoviedb.org/t/p/original/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg',
      rating: 7.9,
      category: "serie",
    },

    {
      id:11,
      name: "S.W.A.T.",
      description:"The series follows Daniel 'Hondo' Harrelson, a SWAT Lieutenant who is torn between allegiance to the streets and duty to his fellow officers, when he is assigned by aggressive and confident 10-team leader David SWAT, Jeff Mumford, to lead a highly trained police unit, which will be tasked with stopping crimes in Los Angeles.",
      image: 'https://www.themoviedb.org/t/p/original/tFYMNXnUGI2EAV6BWHS7MyR8dX0.jpg',
      rating: 8.1,
      category: "serie",
    },

    {
      id:12,
      name: "Encanto",
      description:"'Encanto' tells the tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family’s last hope.",
      image: 'https://www.themoviedb.org/t/p/original/d0ezQ1Jz0lpNsX1skEmIvqRL7mN.jpg',
      rating: 7.8,
      category: "movie",
    },

    {
      id:13,
      name: "Fast & Furious 9",
      description:"Dom Toretto leads a quiet life with Letty and their son, little Brian, but they know that danger is always lurking. This time, that threat will force Dom to confront the sins of his past if he wants to save the ones he loves most. The team reunites to stop a worldwide plot, led by one of the most dangerous assassins and best driver they have faced; a man who is also Dom's missing brother, Jakob. Ninth installment of the famous franchise.",
      image: 'https://www.themoviedb.org/t/p/original/rI2F6jZ6a7K0bODSJStywn3eHLm.jpg',
      rating: 7.3,
      category: "movie",
    },
  ]



}
