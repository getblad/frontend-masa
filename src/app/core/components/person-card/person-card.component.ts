import { Component, EventEmitter, Input, Output } from '@angular/core';

enum Mode{
    ReadOnly,
    Edit
}

const Edit = "Edit";
const Save = "Save";

@Component({
  selector: 'mf-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.less'],
})
export class PersonCardComponent {
    @Input() personName: string | undefined;
    @Input() personId: string | undefined;

    @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public buttonTitle: string = Edit;
    
    
    private _mode: Mode = Mode.ReadOnly;
    constructor() {
        this.setButtonTitle();
    }

    private setButtonTitle() {
        this.buttonTitle = this._mode === Mode.ReadOnly ? Edit : Save;
    }

    public onToggleModeClick(): void{
        this._mode = this._mode === Mode.ReadOnly ? Mode.Edit : Mode.ReadOnly;
        this.setButtonTitle();
        this.onModeChange.emit(this._mode === Mode.Edit);
    }
}
