import { Component } from '@angular/core';

interface Person{
    name: string;
    id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'frontend-masa';

    public myProperty: string = 'Hooray!!!!';
    public htmlProperty: string = '<i>La-la!!</i>';
    public onClickMeClick(): void {
        this.myProperty = 'Other DAat 2';
    }
    public usName: string = 'Vlad';
    public usId: string = '12';

    public Greetings: string = '';
    public person: Person = {
        name: "Larisa",
        id:"23"
    }

    public cardMessage: string = "";

    public greetingsOnCLick(): void {
        this.Greetings = 'Other DAat 2';
    }

    public onCardModeChanged(isEdit: boolean): void{
        this.cardMessage=isEdit?"Please, fill":"Data saved"
    }
}

