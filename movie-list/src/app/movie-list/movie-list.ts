import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MOVIES } from '../data/movie';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss'
})
export class MovieList {
  movies:Movie[]=MOVIES;
  filtered: Movie[] = [...this.movies];


  genres: string[] = Array.from(new Set(this.movies.map(m => m.genre))).sort();
  selectedGenre = 'All';

  stars = [1, 2, 3, 4, 5];
movie: any;

  get averageRating(): number {
    if (!this.filtered.length) return 0;
    const sum = this.filtered.reduce((a, m) => a + m.rating, 0);
    return +((sum / this.filtered.length).toFixed(2));
  }

  onGenreChange(genre: string) {
    this.selectedGenre = genre;
    this.filtered = genre === 'All'
      ? this.movies
      : this.movies.filter(m => m.genre === genre);
  }

  trackById(_: number, m: Movie) { return m.id; }

  starIcon(rating: number, i: number): string {
    if (i <= Math.floor(rating)) return 'star';
    if (i - 0.5 === rating) return 'star_half';
    return 'star_border';
  }

  isTopRated(r: number) { return r >= 4.5; }
  onImageError(event: any) {
  event.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
}
}
