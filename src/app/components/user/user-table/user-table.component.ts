import { Component } from '@angular/core';
import { IResorces } from 'src/app/models/resources';
import { IUser } from 'src/app/models/user';
import { ResourcesService } from 'src/app/services/resources.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent {

  users: IUser[] = [];
  resources: IResorces[] = [];

  constructor(
    private userService: UserService,
    private resourcesService: ResourcesService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.userService.getUsers().subscribe(users => {
      this.users = users.data;
    });

    this.resourcesService.getResources().subscribe(response => {
      this.resources = response.data;
    });
  }

  protected deleteUser(id: number): void {
    if (confirm('Уверен что хочешь удалить пользователя?')) {
      this.userService.deleteUser(id).subscribe(() => {
        //Если допускается доп запрос, то можно актуальные данные тут с сервера получать
        this.users = this.users.filter(user => user.id !== id);
        alert('Пользователь удалён');
      });
    }
  }
}
