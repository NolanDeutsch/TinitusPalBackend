import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthUser } from '@supabase/supabase-js';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SUPABASE_JWT_SECRETE,
    });
  }

  async validate(user: AuthUser) {
    return user;
  }
}
