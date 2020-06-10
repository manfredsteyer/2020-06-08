import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private oAuthService: OAuthService) {}

  get userName() {
    const claims = this.oAuthService.getIdentityClaims() as any;
    return claims?.given_name;
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.logOut();
  }
}
