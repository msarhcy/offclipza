const fs = require('fs'), path = require('path');
const { Client } = require('pg');
async function main(){
  const dbUrl = process.env.SUPABASE_DB_URL;
  if(!dbUrl){ console.log('SUPABASE_DB_URL not set â€” skipping migrations.'); return; }
  const client = new Client({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });
  await client.connect();
  const dir = path.join(__dirname, '..', 'supabase', 'migrations');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.sql')).sort();
  for(const f of files){ const sql = fs.readFileSync(path.join(dir,f),'utf8'); console.log('running',f); await client.query(sql); }
  await client.end();
  console.log('migrations done');
}
main().catch(e=>{ console.error(e); process.exit(1) });
