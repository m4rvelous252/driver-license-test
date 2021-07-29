import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/services/category/category.service';
import { UiService } from 'src/app/services/Ui/ui.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  style = this.ui.getStyleMode()

  user?: User

  categories: Category[] =[];

  constructor(private ui : UiService, private categoryService : CategoryService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
   this.categoryService.getAllCategory().subscribe((req) => (
      this.categories = req.data,
      this.cdr.detectChanges()
    ))
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;

  }
}
