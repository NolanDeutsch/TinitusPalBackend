import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import config from 'common/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthUser } from '@supabase/supabase-js';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwtSecrete,
    });
  }

  async validate(user: AuthUser) {
    return user;
  }
}
