import {Component, OnInit} from "@angular/core";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {
  LoginComponent,
  RegisterComponent,
  RegistrationConfirmationComponent,
  ResendCodeComponent,
  ForgotPasswordStep1Component,
  ForgotPassword2Component
} from "./public/auth.component";
import {AwsUtil} from "./service/aws.service";

declare let AWS:any;
declare let AWSCognito:any;

@Component({
  selector: 'awscognito-angular2-app',
  template: '<p>Hello and welcome!"</p>'
})
export class AboutComponent {

}

@Component({
  selector: 'awscognito-angular2-app',
  templateUrl: '/app/template/public/landinghome.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HomeLandingComponent {
  constructor() {

  }
}

@Component({
  selector: 'awscognito-angular2-app',
  templateUrl: '/app/template/home.html',
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/', component: HomeLandingComponent},
  {path: '/about', component: AboutComponent},
  {path: '/login', component: LoginComponent},
  {path: '/register', component: RegisterComponent},
  {path: '/confirmRegistration/:username', component: RegistrationConfirmationComponent},
  {path: '/resendCode', component: ResendCodeComponent},
  {path: '/forgotPassword2/:email', component: ForgotPassword2Component},
  {path: '/forgotPassword', component: ForgotPasswordStep1Component}
])
export class HomeComponent implements OnInit {
  constructor(private router:Router) {
    console.log("HomeComponent constructor");
  }

  ngOnInit() {

  }
}


