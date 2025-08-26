import { Component, computed, signal  } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SONGS, Song } from '../../data/songs';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-songs-list',
   standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule],
  templateUrl: './songs-list.html',
  styleUrl: './songs-list.scss'
})
export class SongsList {
  readonly songs = signal<Song[]>(SONGS);

  // filters (signals)
  readonly selectedArtist = signal<string | null>(null);
  readonly selectedAlbum  = signal<string | null>(null);

  // unique lists for dropdowns
  readonly artists = computed(() =>
    Array.from(new Set(this.songs().map(s => s.artist))).sort()
  );
  readonly albums = computed(() =>
    Array.from(new Set(this.songs().map(s => s.album))).sort()
  );

  // filtered list
  readonly filteredSongs = computed(() =>
    this.songs().filter(s =>
      (!this.selectedArtist() || s.artist === this.selectedArtist()) &&
      (!this.selectedAlbum()  || s.album  === this.selectedAlbum())
    )
  );

  clearFilters() {
    this.selectedArtist.set(null);
    this.selectedAlbum.set(null);
  }

  starsFor(rating: number) {
    // returns [1,2,3,4,5] with filled up to rounded rating
    const rounded = Math.round(rating);
    return Array.from({length: 5}, (_, i) => i < rounded);
  }

  isTopRated(r: number) {
    return r >= 4.5; // highlight threshold
  }

}
