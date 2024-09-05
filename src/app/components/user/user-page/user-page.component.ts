import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.sass']
})
export class UserPageComponent {

  userForm: FormGroup;
  userId = +this.route.snapshot.paramMap.get('id')!;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.userForm = this.fb.group({
      id: [0],
      email: [''],
      first_name: [''],
      last_name: [''],
      avatar: [''],
    });
  }

  ngOnInit(): void {
    this.getUser(this.userId);
  }

  private getUser(userId: number) {
    this.userService.getUserById(userId).subscribe(response => {

      const userData = response.data;

      this.userForm.setValue({
        id: userData.id,
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
        avatar: userData.avatar,
      });
    });
  }

  protected updateUser(): void {
    this.userService.updateUser(this.userForm.value.id, this.userForm.value).subscribe(() => {
      alert('Пользователь обнавлён!');
    });
  }
}
