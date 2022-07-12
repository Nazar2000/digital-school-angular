import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    typeOfInputPassword = true;
    loginForm = new FormGroup({
            email: new FormControl('',
                [
                    Validators.required,
                    Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-zA-Z]{2,4}$")
                ]),
            password: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(8)
                ]),
        }
    );

    constructor(public authService: AuthService, public router: Router) {
    }

    ngOnInit(): void {
    }

    loginFormSubmit(): void {
        if (this.loginForm.valid) {
            this.authService.logIn(this.loginForm.value).subscribe((resp: any) => {
                this.authService.storeTokens(resp.token);
                this.router.navigate(['/dashboard'])
            })
        }
    }
}
