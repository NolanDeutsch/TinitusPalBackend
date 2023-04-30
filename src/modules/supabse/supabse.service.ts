import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class SuperbaseService {
  private superBaseClient: SupabaseClient;

  constructor(@Inject(REQUEST) private readonly request: Request) {}

  getClient() {
    if (this.superBaseClient) {
      return this.superBaseClient;
    }

    this.superBaseClient = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
      global: { headers: { Authorization: this.request.headers.authorization } },
    });

    return this.superBaseClient;
  }
}
