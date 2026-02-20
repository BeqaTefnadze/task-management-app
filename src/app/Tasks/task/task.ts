import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TasksType } from './task.model'


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {

  @Input({required: true}) task!: TasksType
  @Output() complete = new EventEmitter();

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
