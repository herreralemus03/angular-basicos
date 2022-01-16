import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';

<<<<<<< HEAD
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
=======
>>>>>>> parent of 2d67ccc (primer commit)


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
=======
    BrowserModule
>>>>>>> parent of 2d67ccc (primer commit)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
