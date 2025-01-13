import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: `<h1>Welcome!</h1>
    <p>Elysia version: {{ res.value() }}</p>
    <router-outlet />`,
})
export class AppComponent {
  #http = inject(HttpClient);

  protected res = rxResource({
    loader: () =>
      this.#http
        .get<{ version: string }>('elysia-version')
        .pipe(map(v => v.version)),
  });
}
