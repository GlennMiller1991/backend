import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signing')
  signing() {
    return this.authService.signing();
  }
}
