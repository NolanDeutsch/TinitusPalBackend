import { AuthUser as SuperBaseAuthUser } from '@supabase/supabase-js';

export type AuthUser = SuperBaseAuthUser & {
  sub: string;
};
