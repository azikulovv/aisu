import type { Request, Response } from "express";
import type { SignInDto, SignUpDto } from "./auth.interface";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  signin = async (
    req: Request<Record<string, never>, unknown, SignInDto>,
    res: Response,
  ) => {
    const result = await this.authService.signin(req.body);

    res.status(200).json(result);
  };

  signup = async (
    req: Request<Record<string, never>, unknown, SignUpDto>,
    res: Response,
  ) => {
    const result = await this.authService.signup(req.body);

    res.status(201).json(result);
  };
}
