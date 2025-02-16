import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Res() resp, @Body() loginDTO: { email: string, password: string }) {
    const user = await this.authService.validateUser(loginDTO.email, loginDTO.password);
    if (!user) {
      return resp.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Credenciales inválidas',
      });
    }
    const token = await this.authService.login(user);
    return resp.status(HttpStatus.OK).json({
      resultado: 'Inicio de sesión exitoso',
      idUser: token.idUser,
      token: token.access_token
    });
  }
}