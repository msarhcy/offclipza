CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE IF NOT EXISTS profiles ( id uuid PRIMARY KEY, username text UNIQUE NOT NULL, role text DEFAULT 'user', created_at timestamptz DEFAULT now());
CREATE TABLE IF NOT EXISTS posts ( id uuid PRIMARY KEY DEFAULT gen_random_uuid(), author_id uuid REFERENCES profiles(id), content text, created_at timestamptz DEFAULT now());
