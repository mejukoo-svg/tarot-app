-- Neon 데이터베이스용 타로카드 스키마
-- PostgreSQL 호환

-- 타로카드 테이블
CREATE TABLE IF NOT EXISTS tarot_cards (
  id SERIAL PRIMARY KEY,
  card_number INTEGER NOT NULL,
  name_en VARCHAR(255) NOT NULL,
  name_kr VARCHAR(255) NOT NULL,
  arcana_type VARCHAR(10) CHECK (arcana_type IN ('major', 'minor')) NOT NULL,
  suit VARCHAR(20), -- major arcana의 경우 NULL
  meaning_upright TEXT NOT NULL,
  meaning_reversed TEXT NOT NULL,
  keywords TEXT[], -- PostgreSQL array type
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 사용자 리딩 기록 테이블
CREATE TABLE IF NOT EXISTS readings (
  id SERIAL PRIMARY KEY,
  user_id UUID, -- 익명 사용자를 위해 nullable
  session_id VARCHAR(255), -- 세션 기반 식별
  selected_cards JSONB NOT NULL, -- 선택된 카드들의 정보
  question TEXT,
  interpretation TEXT,
  reading_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 즐겨찾기 테이블 (향후 확장용)
CREATE TABLE IF NOT EXISTS favorites (
  id SERIAL PRIMARY KEY,
  user_id UUID,
  reading_id INTEGER REFERENCES readings(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_tarot_cards_number ON tarot_cards(card_number);
CREATE INDEX IF NOT EXISTS idx_tarot_cards_arcana ON tarot_cards(arcana_type);
CREATE INDEX IF NOT EXISTS idx_readings_user_id ON readings(user_id);
CREATE INDEX IF NOT EXISTS idx_readings_session_id ON readings(session_id);
CREATE INDEX IF NOT EXISTS idx_readings_date ON readings(reading_date);

-- 업데이트 시간 자동 갱신 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 트리거 생성
DROP TRIGGER IF EXISTS update_tarot_cards_updated_at ON tarot_cards;
CREATE TRIGGER update_tarot_cards_updated_at
    BEFORE UPDATE ON tarot_cards
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 기본 데이터 확인 (타로카드가 있는지 체크)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM tarot_cards LIMIT 1) THEN
        RAISE NOTICE '타로카드 데이터가 없습니다. 애플리케이션에서 데이터를 초기화해주세요.';
    ELSE
        RAISE NOTICE '타로카드 데이터가 존재합니다. 총 % 장', (SELECT COUNT(*) FROM tarot_cards);
    END IF;
END $$;