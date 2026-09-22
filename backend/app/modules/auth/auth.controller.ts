import type { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  signin = async (req: Request, res: Response) => {
    const payload = req.body;

    const result = await this.authService.signin(payload);

    res.status(200).json(result);
  };

  signup = async (req: Request, res: Response) => {
    const payload = req.body;

    const result = await this.authService.signup(payload);

    res.status(201).json(result);
  };
}
