import type { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  signup = async (req: Request, res: Response) => {
    const payload = req.body;

    const result = await this.authService.signup(payload);

    res.json(201).json(result);
  };
}
