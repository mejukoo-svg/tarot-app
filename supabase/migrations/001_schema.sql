-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 카드 정보 테이블
CREATE TABLE tarot_cards (
    id SERIAL PRIMARY KEY,
    card_number INTEGER UNIQUE,
    name_kr VARCHAR(100),
    name_en VARCHAR(100),
    arcana_type VARCHAR(20) CHECK (arcana_type IN ('major', 'minor')),
    suit VARCHAR(20),
    image_url TEXT,
    meaning_upright TEXT,
    meaning_reversed TEXT,
    keywords TEXT[]
);

-- 리딩 기록 테이블  
CREATE TABLE readings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users,
    cards_selected JSONB,
    reading_date TIMESTAMP DEFAULT NOW(),
    question TEXT,
    interpretation TEXT
);

-- 사용자 즐겨찾기
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users,
    reading_id UUID REFERENCES readings(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- RLS 정책 설정
ALTER TABLE readings ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

-- 읽기 정책 (모든 사용자)
CREATE POLICY "Allow read access to tarot_cards for all users" ON tarot_cards
    FOR SELECT USING (true);

-- 자신의 리딩만 읽기/쓰기 가능
CREATE POLICY "Users can view own readings" ON readings
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own readings" ON readings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 자신의 즐겨찾기만 읽기/쓰기 가능
CREATE POLICY "Users can view own favorites" ON favorites
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own favorites" ON favorites
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own favorites" ON favorites
    FOR DELETE USING (auth.uid() = user_id);