import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TUI_SANITIZER, TuiSvgModule, } from "@taiga-ui/core";
import { TuiIslandModule } from "@taiga-ui/kit";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TuiRootModule,
    TuiIslandModule,
    TuiSvgModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }, { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
