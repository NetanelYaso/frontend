import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from '../../models/taskmodel';
import { List } from '../../models/listModel';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {


  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {   }

  ngOnInit() { }

  onTaskClick(task: Task) {
    this.taskService.complete(task).subscribe(() => {
      console.log("Completed successully!");
      task.completed = !task.completed;
    })
  }
}