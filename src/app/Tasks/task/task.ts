import { Component, Input, inject } from '@angular/core';
import { type TasksType } from './task.model'
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {

  @Input({required: true}) task!: TasksType;
  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.completeTask(this.task.id);
    
  }
}
