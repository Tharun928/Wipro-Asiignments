import { Component, signal } from '@angular/core';
import { SongsList } from "./features/songs-list/songs-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SongsList],
  template: `<app-songs-list />`
  
})
export class App {
  protected readonly title = signal('music-playlist');
}
