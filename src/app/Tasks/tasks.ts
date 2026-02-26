import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {

  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isAddingTask = false;
  
  constructor(private tasksService: TasksService){
    this.tasksService = tasksService
  }

  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.userId)
  }


  onStartAddTask(){
    this.isAddingTask = true
  }

  onCloseAddTask(){
    this.isAddingTask = false
  }

}
