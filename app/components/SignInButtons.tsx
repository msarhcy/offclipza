'use client';
import { supabase } from '../../lib/supabaseClient';
export default function SignInButtons(){
  async function s(p:any){ await supabase.auth.signInWithOAuth({provider:p}) }
  return (<div style={{display:'flex',gap:8}}><button onClick={()=>s('google')}>Google</button><button onClick={()=>s('apple')}>Apple</button><button onClick={()=>s('twitter')}>X</button></div>);
}
