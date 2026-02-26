import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "./app";
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./Tasks/tasks.module";



@NgModule({
    declarations: [App, HeaderComponent, User,],
    bootstrap: [App],
    imports: [ RouterOutlet, BrowserModule, SharedModule, TasksModule]
})

export class AppModule {

}