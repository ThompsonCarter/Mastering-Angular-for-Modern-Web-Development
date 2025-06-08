export class TaskListComponent {
  tasks = signal<Task[]>([/* initial tasks */]);

  drop(event: CdkDragDrop<Task[]>) {
    this.tasks.mutate(list => {
      moveItemInArray(list, event.previousIndex, event.currentIndex);
    });
  }
}