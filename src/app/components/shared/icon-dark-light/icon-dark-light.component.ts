import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-dark-light',
  templateUrl: './icon-dark-light.component.html',
  styleUrls: ['./icon-dark-light.component.scss']
})
export class IconDarkLightComponent {

  toggle: boolean = false;

  ngOnInit(){
    let variable = document.getElementsByTagName('html')

    if (localStorage.getItem('_theme_') == "dark"){
      variable.item(0)?.classList.add('dark');
      this.toggle = true;
    }
    else if(localStorage.getItem('_theme_') == "dark"){
      variable.item(0)?.classList.remove('dark');
      this.toggle = false;
    }
  }

  changeTheme(){
    let variable = document.getElementsByTagName('html')

    if (localStorage.getItem('_theme_') == "dark"){
      variable.item(0)?.classList.remove('dark');
      localStorage.setItem('_theme_', 'dark');
      this.toggle = false;
    }
    else{
      variable.item(0)?.classList.add('dark');
      localStorage.setItem('_theme_', 'dark')
      this.toggle = true;
    }
  }
}
