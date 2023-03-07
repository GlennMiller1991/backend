import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signing() {
    return { message: 'i am signing' };
  }

  signup() {
    return { message: 'I am signup' };
  }
}
