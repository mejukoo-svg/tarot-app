// 78장 타로카드 데이터 (한글 해석 포함)
export const tarotCardsData = [
  // 메이저 아르카나 (22장)
  {
    card_number: 0,
    name_kr: "광대",
    name_en: "The Fool",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/00-fool.jpg",
    meaning_upright: "새로운 시작, 순수함, 자유로운 정신을 의미합니다. 미지의 세계로 나아갈 용기와 호기심을 가지고 있으며, 무한한 가능성을 품고 있습니다. 때로는 순진하고 경험이 부족할 수 있지만, 그것이 오히려 새로운 기회를 만들어냅니다. 직관을 믿고 모험을 시작할 때입니다.",
    meaning_reversed: "경솔함, 무모함, 준비 부족을 나타냅니다. 충분한 계획 없이 행동하거나 위험을 간과하는 상황입니다. 현실성이 부족하거나 책임감이 결여된 상태를 의미하기도 합니다. 더 신중하게 접근하고 충분히 준비한 후 행동하는 것이 필요합니다.",
    keywords: ["새로운 시작", "모험", "순수", "자유", "가능성"]
  },
  {
    card_number: 1,
    name_kr: "마법사",
    name_en: "The Magician",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/01-magician.jpg",
    meaning_upright: "의지력, 창조력, 실행력을 상징합니다. 목표를 달성하기 위한 모든 도구와 능력을 갖추고 있으며, 강한 의지로 현실을 변화시킬 수 있는 힘을 가지고 있습니다. 집중력과 자신감으로 원하는 것을 성취할 수 있는 시기입니다. 하늘과 땅을 연결하는 매개체 역할을 합니다.",
    meaning_reversed: "의지력 부족, 조작, 거짓을 의미합니다. 능력은 있지만 잘못된 방향으로 사용하거나 다른 사람을 속이려는 시도를 나타냅니다. 목표가 불분명하거나 집중력이 분산된 상태일 수 있습니다. 자신의 진정한 의도를 되돌아볼 필요가 있습니다.",
    keywords: ["의지력", "창조", "실행", "집중", "변화"]
  },
  {
    card_number: 2,
    name_kr: "여사제",
    name_en: "The High Priestess",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/02-high-priestess.jpg",
    meaning_upright: "직관, 내면의 지혜, 신비로운 지식을 상징합니다. 겉으로 드러나지 않은 진실을 꿰뚫어보는 능력과 깊은 내적 통찰력을 가지고 있습니다. 조용히 관찰하고 명상하며 내면의 소리에 귀를 기울일 때입니다. 여성적 에너지와 수용성을 나타냅니다.",
    meaning_reversed: "직관 무시, 내면과의 단절, 비밀의 폭로를 의미합니다. 논리에만 치우쳐 직감을 무시하거나 내면의 목소리를 듣지 못하는 상태입니다. 숨겨져 있던 진실이 드러나거나 감정을 제대로 처리하지 못하는 상황일 수 있습니다.",
    keywords: ["직관", "신비", "내면", "지혜", "수용"]
  },
  {
    card_number: 3,
    name_kr: "여황제",
    name_en: "The Empress",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/03-empress.jpg",
    meaning_upright: "풍요, 창조력, 모성애, 자연과의 조화를 상징합니다. 새로운 생명을 탄생시키고 키워나가는 능력을 가지고 있으며, 사랑과 보살핌으로 주변을 감쌉니다. 예술적 재능이나 창작 활동이 활발한 시기입니다. 감정적 만족과 물질적 풍요로움을 동시에 누릴 수 있습니다.",
    meaning_reversed: "창조력 저하, 과잉보호, 의존을 의미합니다. 너무 많은 보살핌으로 인한 억압이나 독립성 부족을 나타낼 수 있습니다. 창의적 에너지가 막히거나 물질적 욕심에만 치우친 상태일 수 있습니다. 균형 잡힌 관점이 필요합니다.",
    keywords: ["풍요", "창조", "모성", "자연", "사랑"]
  },
  {
    card_number: 4,
    name_kr: "황제",
    name_en: "The Emperor",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/04-emperor.jpg",
    meaning_upright: "권위, 안정성, 리더십, 체계적인 접근을 상징합니다. 강한 의지와 결단력으로 목표를 달성하며, 질서와 규칙을 통해 안정된 기반을 구축합니다. 책임감이 강하고 타인을 이끌어가는 능력을 가지고 있습니다. 아버지적 보호와 지도력을 나타냅니다.",
    meaning_reversed: "권력 남용, 독재적 성향, 경직성을 의미합니다. 지나친 통제욕이나 융통성 부족으로 인한 갈등이 발생할 수 있습니다. 권위를 잃거나 책임을 회피하려는 모습을 보일 수도 있습니다. 보다 유연한 접근이 필요한 시기입니다.",
    keywords: ["권위", "안정", "리더십", "질서", "책임"]
  },
  {
    card_number: 5,
    name_kr: "교황",
    name_en: "The Hierophant",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/05-hierophant.jpg",
    meaning_upright: "전통, 교육, 영적 지도, 관습을 상징합니다. 기존의 가치관과 전통적인 방식을 따르며, 멘토나 스승으로부터 지혜를 얻는 시기입니다. 제도권 내에서의 성공과 사회적 인정을 받을 수 있습니다. 종교적이거나 철학적인 깨달음을 통한 성장을 의미합니다.",
    meaning_reversed: "반항, 독단적 사고, 전통 거부를 의미합니다. 기존의 시스템이나 권위에 대한 반발심을 가지고 있거나 자신만의 길을 개척하려는 강한 의지를 보입니다. 때로는 고집이 세거나 새로운 관점을 받아들이기 어려워할 수 있습니다.",
    keywords: ["전통", "교육", "영성", "지도", "관습"]
  },
  {
    card_number: 6,
    name_kr: "연인",
    name_en: "The Lovers",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/06-lovers.jpg",
    meaning_upright: "사랑, 조화, 선택, 결합을 상징합니다. 진정한 사랑과 깊은 유대감을 경험하며, 중요한 인생의 선택을 앞두고 있습니다. 두 가지 다른 요소가 완벽하게 조화를 이루며, 상호 보완적인 관계를 맺습니다. 결혼이나 파트너십과 관련된 좋은 소식이 있을 수 있습니다.",
    meaning_reversed: "갈등, 불화, 잘못된 선택을 의미합니다. 관계에서의 불균형이나 가치관의 충돌로 인한 어려움을 겪을 수 있습니다. 중요한 결정을 내려야 하는 상황에서 혼란을 느끼거나 잘못된 선택을 할 위험이 있습니다. 자신의 진심을 되돌아볼 필요가 있습니다.",
    keywords: ["사랑", "조화", "선택", "결합", "유대"]
  },
  {
    card_number: 7,
    name_kr: "전차",
    name_en: "The Chariot",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/07-chariot.jpg",
    meaning_upright: "승리, 의지력, 자제력, 방향성을 상징합니다. 강한 정신력과 집중력으로 목표를 향해 전진하며, 상반된 힘들을 통제하여 원하는 결과를 얻어냅니다. 여행이나 이동과 관련된 길운이 있으며, 자신감과 추진력이 최고조에 달한 상태입니다.",
    meaning_reversed: "방향감각 상실, 통제력 부족, 실패를 의미합니다. 목표가 불분명하거나 여러 방향으로 힘이 분산되어 진전이 없는 상태입니다. 감정적 기복이 심하거나 계획이 차질을 빚을 수 있습니다. 다시 한번 목표를 정리하고 집중할 필요가 있습니다.",
    keywords: ["승리", "의지", "자제", "방향", "전진"]
  },
  {
    card_number: 8,
    name_kr: "힘",
    name_en: "Strength",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/08-strength.jpg",
    meaning_upright: "내면의 힘, 용기, 인내, 자제력을 상징합니다. 물리적인 힘이 아닌 정신적, 도덕적 힘으로 어려움을 극복합니다. 부드러움과 강인함을 동시에 가지고 있으며, 사랑과 연민으로 타인을 감화시킬 수 있습니다. 자신의 본능과 감정을 잘 통제하며 조화를 이룹니다.",
    meaning_reversed: "의지박약, 자신감 부족, 폭력성을 의미합니다. 내면의 힘을 제대로 발휘하지 못하거나 감정에 휩쓸려 올바른 판단을 하지 못하는 상태입니다. 때로는 지나친 공격성이나 억압으로 인한 문제가 발생할 수 있습니다. 자신을 더욱 믿고 인내심을 기를 필요가 있습니다.",
    keywords: ["내면의 힘", "용기", "인내", "자제", "조화"]
  },
  {
    card_number: 9,
    name_kr: "은둔자",
    name_en: "The Hermit",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/09-hermit.jpg",
    meaning_upright: "내성, 성찰, 지혜 추구, 영적 탐구를 상징합니다. 혼자만의 시간을 가지며 깊이 있는 사색과 명상을 통해 진리를 찾아갑니다. 경험을 통해 얻은 지혜로 다른 이들을 인도할 수 있는 능력을 가지고 있습니다. 내면의 목소리에 귀 기울이며 자신만의 길을 찾아가는 시기입니다.",
    meaning_reversed: "고립, 외로움, 지혜 거부를 의미합니다. 필요 이상으로 자신을 고립시키거나 다른 사람들과의 교류를 피하려는 경향을 보입니다. 좋은 조언을 거부하거나 경험에서 배우려 하지 않는 완고함을 나타낼 수도 있습니다. 균형 잡힌 사회적 관계가 필요합니다.",
    keywords: ["내성", "성찰", "지혜", "영성", "인도"]
  },
  {
    card_number: 10,
    name_kr: "운명의 바퀴",
    name_en: "Wheel of Fortune",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/10-wheel-of-fortune.jpg",
    meaning_upright: "운명, 변화, 행운, 순환을 상징합니다. 인생의 전환점을 맞이하며 예상치 못한 기회나 행운이 찾아올 수 있습니다. 모든 것은 순환하며 변화하는 것이 자연의 법칙임을 알려줍니다. 운명적인 만남이나 사건이 일어날 가능성이 높으며, 긍정적인 변화가 기대됩니다.",
    meaning_reversed: "불운, 역행, 정체를 의미합니다. 계획이 예상과 다르게 진행되거나 예기치 못한 어려움에 직면할 수 있습니다. 변화에 저항하거나 운명을 받아들이지 못하는 상태를 나타냅니다. 인내심을 가지고 현재의 어려움을 극복해야 할 시기입니다.",
    keywords: ["운명", "변화", "행운", "순환", "전환점"]
  },
  {
    card_number: 11,
    name_kr: "정의",
    name_en: "Justice",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/11-justice.jpg",
    meaning_upright: "공정함, 균형, 진실, 법적 문제 해결을 상징합니다. 모든 행동에는 그에 상응하는 결과가 따르며, 공정한 판단과 객관적인 시각을 유지합니다. 도덕적 원칙을 지키며 올바른 선택을 하는 시기입니다. 법적 분쟁이나 계약 문제가 유리하게 해결될 가능성이 높습니다.",
    meaning_reversed: "불공정, 편견, 판단력 부족을 의미합니다. 객관적인 판단을 하지 못하거나 공정성이 결여된 상황에 처할 수 있습니다. 법적 문제나 윤리적 딜레마에 직면하여 어려움을 겪을 수 있습니다. 자신의 행동과 결정에 대해 책임을 져야 할 때입니다.",
    keywords: ["공정", "균형", "진실", "법", "책임"]
  },
  {
    card_number: 12,
    name_kr: "매달린 사람",
    name_en: "The Hanged Man",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/12-hanged-man.jpg",
    meaning_upright: "희생, 인내, 새로운 관점, 정신적 성장을 상징합니다. 일시적인 정체나 지연을 통해 더 깊은 깨달음을 얻게 됩니다. 자발적인 희생이나 양보를 통해 더 큰 가치를 실현할 수 있습니다. 다른 각도에서 상황을 바라보며 새로운 해결책을 찾는 시기입니다.",
    meaning_reversed: "무의미한 희생, 자기 연민, 저항을 의미합니다. 변화를 거부하거나 현재 상황을 받아들이지 못하는 완고함을 보입니다. 자신만의 고통에 빠져 발전의 기회를 놓치거나 불필요한 희생을 강요당할 수 있습니다. 보다 능동적인 자세가 필요합니다.",
    keywords: ["희생", "인내", "새관점", "성장", "깨달음"]
  },
  {
    card_number: 13,
    name_kr: "죽음",
    name_en: "Death",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/13-death.jpg",
    meaning_upright: "변화, 재생, 끝과 시작, 해방을 상징합니다. 물리적인 죽음이 아닌 낡은 것의 소멸과 새로운 것의 탄생을 의미합니다. 큰 변화나 전환을 통해 완전히 새로운 단계로 나아갈 수 있습니다. 과거에 얽매이지 말고 미래를 향해 전진할 때입니다.",
    meaning_reversed: "변화 거부, 정체, 부활 실패를 의미합니다. 필요한 변화를 받아들이지 못하거나 과거에 집착하여 발전을 저해하는 상태입니다. 기존의 방식에만 의존하여 새로운 기회를 놓칠 수 있습니다. 변화에 대한 두려움을 극복해야 할 시기입니다.",
    keywords: ["변화", "재생", "전환", "해방", "새시작"]
  },
  {
    card_number: 14,
    name_kr: "절제",
    name_en: "Temperance",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/14-temperance.jpg",
    meaning_upright: "조화, 절제, 균형, 치유를 상징합니다. 서로 다른 요소들을 적절히 혼합하여 완벽한 조화를 만들어냅니다. 인내심과 자제력으로 점진적인 발전을 이루며, 극단을 피하고 중용의 길을 걷습니다. 갈등 상황에서 중재자 역할을 하며 평화로운 해결책을 찾습니다.",
    meaning_reversed: "불균형, 과도함, 조급함을 의미합니다. 극단적인 행동이나 성급한 판단으로 인해 조화가 깨질 수 있습니다. 자제력을 잃거나 중요한 균형점을 놓쳐서 문제가 발생할 수 있습니다. 더욱 신중하고 절제된 접근이 필요한 시기입니다.",
    keywords: ["조화", "절제", "균형", "치유", "중용"]
  },
  {
    card_number: 15,
    name_kr: "악마",
    name_en: "The Devil",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/15-devil.jpg",
    meaning_upright: "유혹, 속박, 물질주의, 욕망을 상징합니다. 물질적 욕구나 본능적 충동에 사로잡혀 자유를 제약받는 상태입니다. 중독이나 나쁜 습관, 독성 관계에 얽매여 있을 수 있습니다. 그러나 이 모든 속박은 스스로 만든 것이며, 의지만 있다면 언제든 벗어날 수 있습니다.",
    meaning_reversed: "해방, 각성, 속박으로부터의 탈출을 의미합니다. 기존의 제약이나 나쁜 습관에서 벗어나 진정한 자유를 찾아가는 시기입니다. 자신을 옭아매던 것들의 실체를 깨닫고 새로운 가능성을 발견할 수 있습니다. 정신적 성숙과 영적 각성이 일어날 수 있습니다.",
    keywords: ["유혹", "속박", "욕망", "중독", "해방"]
  },
  {
    card_number: 16,
    name_kr: "탑",
    name_en: "The Tower",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/16-tower.jpg",
    meaning_upright: "급변, 충격, 해체, 깨달음을 상징합니다. 갑작스러운 변화나 예상치 못한 사건으로 인해 기존의 구조나 믿음이 무너집니다. 처음에는 충격적이고 고통스러울 수 있지만, 이를 통해 진실을 깨닫고 새로운 기반을 마련할 기회를 얻습니다. 거짓된 것들이 제거되는 정화의 과정입니다.",
    meaning_reversed: "파괴 회피, 내적 변화, 점진적 깨달음을 의미합니다. 외적인 충격 대신 내면의 깨달음을 통해 변화가 일어날 수 있습니다. 급작스러운 변화를 피하고 싶어 하지만, 결국 필요한 변화는 일어나게 됩니다. 변화에 대한 저항이 오히려 더 큰 고통을 가져올 수 있습니다.",
    keywords: ["급변", "충격", "해체", "깨달음", "정화"]
  },
  {
    card_number: 17,
    name_kr: "별",
    name_en: "The Star",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/17-star.jpg",
    meaning_upright: "희망, 영감, 치유, 평화를 상징합니다. 어려운 시기를 지나 새로운 희망과 가능성을 발견합니다. 영적 각성과 내적 평화를 경험하며, 미래에 대한 긍정적인 전망을 가지게 됩니다. 직관력이 높아지고 창의적 영감을 받을 수 있습니다. 치유와 재생의 에너지가 강합니다.",
    meaning_reversed: "절망, 환상, 목표 상실을 의미합니다. 희망을 잃거나 미래에 대한 비관적인 전망을 가지고 있습니다. 꿈과 현실 사이에서 혼란을 느끼거나 비현실적인 기대를 품고 있을 수 있습니다. 자신감 회복과 현실적인 목표 설정이 필요한 시기입니다.",
    keywords: ["희망", "영감", "치유", "평화", "직관"]
  },
  {
    card_number: 18,
    name_kr: "달",
    name_en: "The Moon",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/18-moon.jpg",
    meaning_upright: "환상, 불안, 직감, 무의식을 상징합니다. 현실과 환상의 경계가 모호해지며, 불확실성과 혼란 속에서 진실을 찾아야 합니다. 무의식의 메시지나 꿈, 직감에 주의를 기울여야 할 때입니다. 감정의 기복이 심하거나 두려움과 불안에 휩쓸릴 수 있습니다.",
    meaning_reversed: "진실 발견, 환상 해소, 명확성 획득을 의미합니다. 그동안 감추어져 있던 진실이 드러나거나 혼란스러웠던 상황이 명료해집니다. 자기기만에서 벗어나 현실을 정확히 파악할 수 있게 됩니다. 내면의 두려움을 극복하고 안정을 찾아가는 시기입니다.",
    keywords: ["환상", "불안", "직감", "무의식", "혼란"]
  },
  {
    card_number: 19,
    name_kr: "태양",
    name_en: "The Sun",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/19-sun.jpg",
    meaning_upright: "기쁨, 성공, 활력, 긍정성을 상징합니다. 모든 일이 순조롭게 진행되며 밝은 에너지로 가득 찬 상태입니다. 자신감과 열정이 넘치며, 주변 사람들에게도 긍정적인 영향을 미칩니다. 성취감과 만족감을 느끼며, 인생의 황금기를 맞이할 수 있습니다. 건강과 행복이 함께합니다.",
    meaning_reversed: "과도한 자신감, 허영, 지연을 의미합니다. 성공에 도취되어 겸손함을 잃거나 과시욕에 빠질 수 있습니다. 기대했던 결과가 늦어지거나 기쁨이 오래가지 못할 수 있습니다. 내면의 그림자를 돌아보고 균형을 찾아야 할 시기입니다.",
    keywords: ["기쁨", "성공", "활력", "긍정", "자신감"]
  },
  {
    card_number: 20,
    name_kr: "심판",
    name_en: "Judgement",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/20-judgement.jpg",
    meaning_upright: "재생, 각성, 용서, 새로운 인생을 상징합니다. 과거를 돌아보고 평가하며, 실수를 용서하고 새로운 시작을 할 준비가 되었습니다. 영적 각성이나 중요한 깨달음을 통해 완전히 새로운 차원으로 상승할 수 있습니다. 과거의 죄책감에서 벗어나 진정한 자유를 얻습니다.",
    meaning_reversed: "자기 비판, 후회, 용서 거부를 의미합니다. 과거의 실수나 잘못에 대한 죄책감에 사로잡혀 앞으로 나아가지 못하는 상태입니다. 다른 사람이나 자신을 용서하지 못하거나, 필요한 변화를 받아들이기를 거부할 수 있습니다. 관용과 용서의 마음이 필요합니다.",
    keywords: ["재생", "각성", "용서", "평가", "새인생"]
  },
  {
    card_number: 21,
    name_kr: "세계",
    name_en: "The World",
    arcana_type: "major",
    suit: null,
    image_url: "/images/cards/21-world.jpg",
    meaning_upright: "완성, 성취, 통합, 만족을 상징합니다. 긴 여정의 끝에 도달하여 목표를 성공적으로 달성했습니다. 모든 것이 조화롭게 통합되어 완전함을 이룬 상태입니다. 전 세계적인 성공이나 국제적인 인정을 받을 수 있습니다. 한 단계가 마무리되고 새로운 시작을 준비하는 시기입니다.",
    meaning_reversed: "미완성, 지연, 목적 상실을 의미합니다. 목표 달성이 늦어지거나 완전한 성취감을 느끼지 못하는 상태입니다. 마지막 단계에서 놓친 부분이 있거나 추가적인 노력이 필요할 수 있습니다. 조금 더 인내하고 노력한다면 원하는 결과를 얻을 수 있습니다.",
    keywords: ["완성", "성취", "통합", "만족", "조화"]
  },

  // 마이너 아르카나 - 완드 (지팡이) 수트 (14장)
  {
    card_number: 22,
    name_kr: "완드 에이스",
    name_en: "Ace of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/22-ace-of-wands.jpg",
    meaning_upright: "새로운 시작, 창조적 에너지, 영감, 열정을 상징합니다. 새로운 프로젝트나 아이디어가 떠오르며, 이를 실현할 수 있는 강한 의지와 에너지를 가지고 있습니다. 창작 활동이나 사업 시작에 매우 유리한 시기입니다.",
    meaning_reversed: "창조력 부족, 지연, 좌절을 의미합니다. 좋은 아이디어가 있지만 실행력이 부족하거나 외부 장애물로 인해 진행이 어려울 수 있습니다. 동기 부여가 필요한 시기입니다.",
    keywords: ["새시작", "창조", "영감", "열정", "에너지"]
  },
  {
    card_number: 23,
    name_kr: "완드 2",
    name_en: "Two of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/23-two-of-wands.jpg",
    meaning_upright: "미래 계획, 개인적 권력, 진전을 상징합니다. 장기적인 목표를 세우고 미래를 위한 준비를 하는 시기입니다. 리더십을 발휘하며 자신만의 길을 개척해 나갑니다.",
    meaning_reversed: "계획 부족, 개인적 목표 상실, 협력 부족을 의미합니다. 방향성을 잃고 우유부단한 상태이거나 다른 사람과의 협력에 어려움을 겪을 수 있습니다.",
    keywords: ["계획", "권력", "진전", "미래", "준비"]
  },
  {
    card_number: 24,
    name_kr: "완드 3",
    name_en: "Three of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/24-three-of-wands.jpg",
    meaning_upright: "확장, 전망, 해외 기회, 성장을 상징합니다. 계획한 일들이 순조롭게 진행되며 더 넓은 영역으로 확장할 수 있는 기회가 찾아옵니다. 국제적인 협력이나 해외 진출이 유리합니다.",
    meaning_reversed: "지연, 좌절, 기회 상실을 의미합니다. 예상했던 결과가 늦어지거나 계획에 차질이 생길 수 있습니다. 시야를 넓히고 새로운 접근 방법을 시도해야 합니다.",
    keywords: ["확장", "전망", "해외", "성장", "기회"]
  },
  {
    card_number: 25,
    name_kr: "완드 4",
    name_en: "Four of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/25-four-of-wands.jpg",
    meaning_upright: "축하, 조화, 가정의 행복, 안정을 상징합니다. 중요한 성취나 이정표를 달성하여 축하받을 일이 생깁니다. 가족이나 친구들과의 화목한 관계를 누리며, 집이나 직장에서 안정감을 느낍니다.",
    meaning_reversed: "불화, 지연된 성공, 가정 문제를 의미합니다. 기대했던 축하나 인정을 받지 못하거나 가족 간의 갈등이 발생할 수 있습니다. 조화를 위한 노력이 필요합니다.",
    keywords: ["축하", "조화", "가정", "행복", "안정"]
  },
  {
    card_number: 26,
    name_kr: "완드 5",
    name_en: "Five of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/26-five-of-wands.jpg",
    meaning_upright: "경쟁, 갈등, 도전, 의견 차이를 상징합니다. 여러 사람과의 경쟁 상황에 놓이거나 팀 내에서 의견 충돌이 발생할 수 있습니다. 건설적인 경쟁을 통해 실력을 향상시킬 수 있는 기회이기도 합니다.",
    meaning_reversed: "갈등 해소, 협력, 내적 갈등을 의미합니다. 외부 갈등이 해결되거나 내면의 혼란을 극복할 수 있습니다. 경쟁보다는 협력을 통한 성과가 기대됩니다.",
    keywords: ["경쟁", "갈등", "도전", "의견차이", "충돌"]
  },
  {
    card_number: 27,
    name_kr: "완드 6",
    name_en: "Six of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/27-six-of-wands.jpg",
    meaning_upright: "승리, 인정, 성취, 자부심을 상징합니다. 노력의 결실을 맺어 사회적 인정을 받고 성공을 경험합니다. 리더십이 발휘되며 다른 사람들의 지지와 응원을 받게 됩니다.",
    meaning_reversed: "실패, 지연, 자만을 의미합니다. 예상했던 성공이 늦어지거나 과도한 자신감으로 인해 실수할 수 있습니다. 겸손한 자세가 필요합니다.",
    keywords: ["승리", "인정", "성취", "자부심", "리더십"]
  },
  {
    card_number: 28,
    name_kr: "완드 7",
    name_en: "Seven of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/28-seven-of-wands.jpg",
    meaning_upright: "방어, 용기, 도전 맞서기, 인내를 상징합니다. 어려운 상황에서도 굴복하지 않고 자신의 입장을 지켜나갑니다. 경쟁자들과의 치열한 경쟁에서 우위를 점하기 위해 노력해야 합니다.",
    meaning_reversed: "항복, 포기, 압도당함을 의미합니다. 과도한 압박에 못 이겨 포기하거나 자신의 신념을 굽힐 수 있습니다. 전략적 후퇴가 필요할 수도 있습니다.",
    keywords: ["방어", "용기", "도전", "인내", "경쟁"]
  },
  {
    card_number: 29,
    name_kr: "완드 8",
    name_en: "Eight of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/29-eight-of-wands.jpg",
    meaning_upright: "속도, 진전, 소식, 움직임을 상징합니다. 일이 빠르게 진행되며 갑작스러운 변화나 좋은 소식을 받을 수 있습니다. 여행이나 커뮤니케이션과 관련된 활동이 활발해집니다.",
    meaning_reversed: "지연, 좌절, 내적 불일치를 의미합니다. 기대했던 소식이 늦어지거나 계획이 차질을 빚을 수 있습니다. 조급해하지 말고 기다림의 시간을 가져야 합니다.",
    keywords: ["속도", "진전", "소식", "움직임", "변화"]
  },
  {
    card_number: 30,
    name_kr: "완드 9",
    name_en: "Nine of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/30-nine-of-wands.jpg",
    meaning_upright: "인내, 회복력, 마지막 추진, 경계를 상징합니다. 오랜 투쟁 끝에 지쳐있지만 포기하지 않고 마지막까지 버텨냅니다. 목표 달성이 가까워졌으니 조금만 더 힘을 내면 성공할 수 있습니다.",
    meaning_reversed: "포기, 편집증, 고립을 의미합니다. 지나친 의심이나 방어적 태도로 인해 고립될 수 있습니다. 다른 사람의 도움을 받아들이고 휴식을 취할 필요가 있습니다.",
    keywords: ["인내", "회복력", "마지막추진", "경계", "버티기"]
  },
  {
    card_number: 31,
    name_kr: "완드 10",
    name_en: "Ten of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/31-ten-of-wands.jpg",
    meaning_upright: "부담, 책임, 과로, 완성 직전을 상징합니다. 많은 책임을 지고 있어 힘들지만, 목표 달성이 임박했습니다. 과도한 업무량이나 스트레스로 지쳐있을 수 있으니 적절한 휴식이 필요합니다.",
    meaning_reversed: "부담 덜기, 위임, 번아웃을 의미합니다. 더 이상 혼자 모든 것을 감당할 수 없는 상황입니다. 다른 사람에게 도움을 요청하거나 일을 나누어 처리해야 합니다.",
    keywords: ["부담", "책임", "과로", "완성직전", "스트레스"]
  },
  {
    card_number: 32,
    name_kr: "완드 잭",
    name_en: "Page of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/32-page-of-wands.jpg",
    meaning_upright: "열정, 모험심, 메신저, 학습을 상징합니다. 새로운 것을 배우고 탐험하려는 강한 의욕을 가지고 있습니다. 좋은 소식을 전하는 메신저 역할을 하거나 창의적인 프로젝트를 시작할 수 있습니다.",
    meaning_reversed: "무모함, 불성숙, 나쁜 소식을 의미합니다. 충분히 생각하지 않고 성급하게 행동하거나 기대했던 소식이 좋지 않을 수 있습니다. 더 신중한 접근이 필요합니다.",
    keywords: ["열정", "모험심", "메신저", "학습", "의욕"]
  },
  {
    card_number: 33,
    name_kr: "완드 나이트",
    name_en: "Knight of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/33-knight-of-wands.jpg",
    meaning_upright: "행동력, 충동성, 모험, 에너지를 상징합니다. 즉석에서 결정을 내리고 빠르게 행동에 옮깁니다. 모험을 즐기며 새로운 도전을 두려워하지 않습니다. 때로는 성급할 수 있지만 추진력이 강합니다.",
    meaning_reversed: "무모함, 성급함, 좌절을 의미합니다. 계획 없이 행동하여 실패하거나 중요한 세부사항을 놓칠 수 있습니다. 조금 더 신중하게 접근해야 할 필요가 있습니다.",
    keywords: ["행동력", "충동성", "모험", "에너지", "추진력"]
  },
  {
    card_number: 34,
    name_kr: "완드 퀸",
    name_en: "Queen of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/34-queen-of-wands.jpg",
    meaning_upright: "자신감, 독립성, 활기, 따뜻함을 상징합니다. 강한 개성과 리더십을 가지고 있으며, 다른 사람들에게 영감을 줍니다. 사교적이고 매력적이며, 자신이 하는 일에 대한 확신을 가지고 있습니다.",
    meaning_reversed: "질투, 이기심, 복수심을 의미합니다. 자신감이 오만함으로 변하거나 다른 사람을 시기하여 관계가 악화될 수 있습니다. 더 관대하고 배려심 있는 태도가 필요합니다.",
    keywords: ["자신감", "독립성", "활기", "따뜻함", "리더십"]
  },
  {
    card_number: 35,
    name_kr: "완드 킹",
    name_en: "King of Wands",
    arcana_type: "minor",
    suit: "wands",
    image_url: "/images/cards/35-king-of-wands.jpg",
    meaning_upright: "리더십, 비전, 명예, 성취를 상징합니다. 강력한 카리스마와 리더십으로 사람들을 이끌어갑니다. 큰 그림을 보며 장기적인 계획을 세우고 실행할 수 있는 능력을 가지고 있습니다.",
    meaning_reversed: "독재, 오만, 무책임을 의미합니다. 권력을 남용하거나 다른 사람의 의견을 무시할 수 있습니다. 더 겸손하고 협력적인 리더십이 필요한 시기입니다.",
    keywords: ["리더십", "비전", "명예", "성취", "카리스마"]
  },

  // 마이너 아르카나 - 컵 수트 (14장)
  {
    card_number: 36,
    name_kr: "컵 에이스",
    name_en: "Ace of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/36-ace-of-cups.jpg",
    meaning_upright: "새로운 사랑, 감정적 시작, 영적 충만함을 상징합니다. 사랑, 우정, 가족 관계에서 새로운 시작이나 깊은 감정적 연결을 경험합니다. 마음이 사랑으로 가득 차고 타인에 대한 연민과 이해가 깊어집니다.",
    meaning_reversed: "감정 억압, 사랑의 상실, 영적 공허감을 의미합니다. 감정을 제대로 표현하지 못하거나 사랑받지 못한다는 느낌을 받을 수 있습니다. 내면의 치유가 필요한 시기입니다.",
    keywords: ["새사랑", "감정시작", "영적충만", "연결", "사랑"]
  },
  {
    card_number: 37,
    name_kr: "컵 2",
    name_en: "Two of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/37-two-of-cups.jpg",
    meaning_upright: "파트너십, 상호 매력, 조화, 연합을 상징합니다. 로맨틱한 관계나 깊은 우정, 비즈니스 파트너십에서 완벽한 조화와 상호 이해를 경험합니다. 서로를 보완하며 함께 성장해 나갑니다.",
    meaning_reversed: "불화, 이별, 불균형을 의미합니다. 관계에서 갈등이 생기거나 한쪽으로 치우친 관계가 될 수 있습니다. 의사소통의 부족이나 가치관의 차이로 인한 문제가 발생할 수 있습니다.",
    keywords: ["파트너십", "상호매력", "조화", "연합", "이해"]
  },
  {
    card_number: 38,
    name_kr: "컵 3",
    name_en: "Three of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/38-three-of-cups.jpg",
    meaning_upright: "우정, 축하, 사교, 공동체를 상징합니다. 친구들과의 즐거운 시간을 보내며 축하할 일이 생깁니다. 사회적 활동이 활발해지고 새로운 인맥을 만들 수 있습니다. 팀워크와 협력을 통한 성공을 경험합니다.",
    meaning_reversed: "고립, 질투, 사교 문제를 의미합니다. 친구들과의 관계에서 소외감을 느끼거나 그룹 내에서 갈등이 발생할 수 있습니다. 과도한 사교활동으로 인한 피로감을 느낄 수도 있습니다.",
    keywords: ["우정", "축하", "사교", "공동체", "즐거움"]
  },
  {
    card_number: 39,
    name_kr: "컵 4",
    name_en: "Four of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/39-four-of-cups.jpg",
    meaning_upright: "무관심, 명상, 재평가, 지루함을 상징합니다. 현재 상황에 만족하지 못하고 새로운 기회를 찾고 있습니다. 내면을 돌아보며 진정으로 원하는 것이 무엇인지 성찰하는 시기입니다.",
    meaning_reversed: "새로운 동기, 행동, 기회 수용을 의미합니다. 소극적인 태도에서 벗어나 적극적으로 행동하기 시작합니다. 새로운 기회나 제안을 받아들일 준비가 되었습니다.",
    keywords: ["무관심", "명상", "재평가", "지루함", "성찰"]
  },
  {
    card_number: 40,
    name_kr: "컵 5",
    name_en: "Five of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/40-five-of-cups.jpg",
    meaning_upright: "후회, 상실, 슬픔, 실망을 상징합니다. 중요한 것을 잃거나 기대했던 것이 무너져서 깊은 슬픔에 빠져있습니다. 하지만 모든 것을 잃은 것은 아니므로 남은 것에 감사하고 새로운 시작을 준비해야 합니다.",
    meaning_reversed: "회복, 용서, 앞으로 나아감을 의미합니다. 과거의 상처나 실패에서 벗어나 새로운 희망을 품게 됩니다. 상황이 점차 호전되고 감정적 치유가 시작됩니다.",
    keywords: ["후회", "상실", "슬픔", "실망", "치유"]
  },
  {
    card_number: 41,
    name_kr: "컵 6",
    name_en: "Six of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/41-six-of-cups.jpg",
    meaning_upright: "향수, 어린 시절, 순수함, 재회를 상징합니다. 과거의 좋은 기억들이 떠오르며 옛 친구나 지인과의 재회가 있을 수 있습니다. 순수한 마음과 무조건적인 사랑을 경험하며 내적 평화를 찾습니다.",
    meaning_reversed: "과거 집착, 미성숙, 현실 도피를 의미합니다. 과거에만 머물러 있어서 현재와 미래를 제대로 보지 못할 수 있습니다. 성장과 변화를 받아들이기 어려워하는 상태입니다.",
    keywords: ["향수", "어린시절", "순수함", "재회", "과거"]
  },
  {
    card_number: 42,
    name_kr: "컵 7",
    name_en: "Seven of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/42-seven-of-cups.jpg",
    meaning_upright: "환상, 선택의 혼란, 공상, 유혹을 상징합니다. 너무 많은 선택지 앞에서 혼란스러워하며 현실과 환상을 구분하기 어려워합니다. 명확한 목표 설정과 현실적인 판단이 필요한 시기입니다.",
    meaning_reversed: "명확성, 결정, 현실 직시를 의미합니다. 혼란스러웠던 상황이 정리되고 올바른 선택을 할 수 있게 됩니다. 환상에서 벗어나 현실적인 계획을 세울 수 있습니다.",
    keywords: ["환상", "선택혼란", "공상", "유혹", "결정"]
  },
  {
    card_number: 43,
    name_kr: "컵 8",
    name_en: "Eight of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/43-eight-of-cups.jpg",
    meaning_upright: "포기, 떠남, 영적 탐구, 새로운 길을 상징합니다. 현재 상황에 더 이상 만족하지 못하여 새로운 길을 찾아 떠나야 할 때입니다. 물질적 성공보다는 영적 성장과 내적 만족을 추구합니다.",
    meaning_reversed: "머뭇거림, 두려움, 변화 거부를 의미합니다. 떠나야 할 때임을 알면서도 두려움이나 안주하려는 마음 때문에 결정을 내리지 못합니다. 용기를 내어 변화를 받아들여야 합니다.",
    keywords: ["포기", "떠남", "영적탐구", "새길", "변화"]
  },
  {
    card_number: 44,
    name_kr: "컵 9",
    name_en: "Nine of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/44-nine-of-cups.jpg",
    meaning_upright: "만족, 성취, 소원 성취, 행복을 상징합니다. '소원 카드'로 불리며 바라던 것들이 이루어져 깊은 만족감과 행복을 느낍니다. 감정적, 물질적으로 풍요로운 상태이며 자신에 대해 자부심을 갖습니다.",
    meaning_reversed: "불만족, 허영, 과도함을 의미합니다. 겉으로는 성공한 것 같아도 내면의 공허함을 느끼거나 과도한 자만심으로 문제가 생길 수 있습니다. 진정한 행복이 무엇인지 되돌아볼 필요가 있습니다.",
    keywords: ["만족", "성취", "소원성취", "행복", "자부심"]
  },
  {
    card_number: 45,
    name_kr: "컵 10",
    name_en: "Ten of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/45-ten-of-cups.jpg",
    meaning_upright: "가족 행복, 조화, 감정적 충족, 공동체를 상징합니다. 가족이나 공동체 내에서 완벽한 조화와 행복을 경험합니다. 모든 관계가 원만하고 서로 사랑하며 지지하는 환경에서 생활할 수 있습니다.",
    meaning_reversed: "가족 갈등, 불화, 가치관 차이를 의미합니다. 가정 내에서 갈등이 발생하거나 기대했던 행복한 상황이 이루어지지 않을 수 있습니다. 관계 회복을 위한 노력이 필요합니다.",
    keywords: ["가족행복", "조화", "감정충족", "공동체", "사랑"]
  },
  {
    card_number: 46,
    name_kr: "컵 잭",
    name_en: "Page of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/46-page-of-cups.jpg",
    meaning_upright: "창의성, 직관, 감수성, 메시지를 상징합니다. 예술적 재능이나 직관력이 발달하며 감정적으로 민감하고 순수한 상태입니다. 사랑이나 우정과 관련된 좋은 소식을 받을 수 있습니다.",
    meaning_reversed: "감정 불안정, 미성숙, 나쁜 소식을 의미합니다. 감정의 기복이 심하거나 현실성이 부족할 수 있습니다. 기대했던 소식이 좋지 않거나 감정적 상처를 받을 수 있습니다.",
    keywords: ["창의성", "직관", "감수성", "메시지", "순수"]
  },
  {
    card_number: 47,
    name_kr: "컵 나이트",
    name_en: "Knight of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/47-knight-of-cups.jpg",
    meaning_upright: "로맨스, 매력, 예술적 추구, 이상주의를 상징합니다. 감정에 충실하며 예술이나 아름다움을 추구합니다. 로맨틱한 제안이나 창의적 프로젝트에 참여할 기회가 생길 수 있습니다.",
    meaning_reversed: "기분 변화, 비현실성, 실망을 의미합니다. 감정의 변화가 심하거나 비현실적인 기대로 인해 실망할 수 있습니다. 좀 더 현실적인 접근이 필요합니다.",
    keywords: ["로맨스", "매력", "예술추구", "이상주의", "감정"]
  },
  {
    card_number: 48,
    name_kr: "컵 퀸",
    name_en: "Queen of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/48-queen-of-cups.jpg",
    meaning_upright: "직관력, 연민, 치유, 감정적 성숙을 상징합니다. 뛰어난 직감력과 타인에 대한 깊은 이해력을 가지고 있습니다. 치유자나 상담자 역할을 하며 다른 사람들에게 위로와 지지를 제공합니다.",
    meaning_reversed: "감정 불안정, 의존성, 조작을 의미합니다. 감정에 너무 휩쓸리거나 다른 사람에게 지나치게 의존할 수 있습니다. 경계선을 명확히 하고 객관성을 유지해야 합니다.",
    keywords: ["직관력", "연민", "치유", "감정성숙", "이해력"]
  },
  {
    card_number: 49,
    name_kr: "컵 킹",
    name_en: "King of Cups",
    arcana_type: "minor",
    suit: "cups",
    image_url: "/images/cards/49-king-of-cups.jpg",
    meaning_upright: "감정적 균형, 관대함, 외교술, 지혜를 상징합니다. 감정을 잘 통제하면서도 따뜻한 마음을 가지고 있습니다. 뛰어난 인간관계 능력으로 갈등을 조정하고 모든 이를 포용할 수 있습니다.",
    meaning_reversed: "감정 억압, 조작, 변덕을 의미합니다. 겉으로는 차분해 보이지만 내면의 감정을 제대로 처리하지 못할 수 있습니다. 감정의 기복이 심하거나 타인을 조작하려 할 수 있습니다.",
    keywords: ["감정균형", "관대함", "외교술", "지혜", "포용"]
  },

  // 마이너 아르카나 - 소드 수트 (14장)  
  {
    card_number: 50,
    name_kr: "소드 에이스",
    name_en: "Ace of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/50-ace-of-swords.jpg",
    meaning_upright: "새로운 아이디어, 정신적 명료함, 진실, 돌파구를 상징합니다. 복잡했던 상황이 명확해지고 새로운 관점이나 해결책을 발견합니다. 진실이 드러나며 정의가 실현될 수 있습니다.",
    meaning_reversed: "혼란, 오해, 정신적 블록을 의미합니다. 생각이 정리되지 않거나 잘못된 정보로 인해 판단을 그르칠 수 있습니다. 의사소통에서 오해가 발생할 가능성이 높습니다.",
    keywords: ["새아이디어", "명료함", "진실", "돌파구", "해결책"]
  },
  {
    card_number: 51,
    name_kr: "소드 2",
    name_en: "Two of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/51-two-of-swords.jpg",
    meaning_upright: "우유부단, 딜레마, 균형, 결정 보류를 상징합니다. 두 가지 선택지 사이에서 고민하며 결정을 내리지 못하고 있습니다. 감정을 배제하고 이성적으로 판단할 필요가 있습니다.",
    meaning_reversed: "결정, 혼란 해소, 정보 획득을 의미합니다. 그동안 미뤄왔던 결정을 내리게 되거나 필요한 정보를 얻어 상황이 명확해집니다. 더 이상 우유부단하지 않습니다.",
    keywords: ["우유부단", "딜레마", "균형", "결정보류", "고민"]
  },
  {
    card_number: 52,
    name_kr: "소드 3",
    name_en: "Three of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/52-three-of-swords.jpg",
    meaning_upright: "상심, 배신, 이별, 슬픔을 상징합니다. 사랑하는 사람과의 이별이나 배신으로 인해 깊은 상처를 받습니다. 하지만 이 경험을 통해 더 강해지고 지혜를 얻을 수 있습니다.",
    meaning_reversed: "치유, 용서, 회복을 의미합니다. 과거의 상처에서 벗어나 치유의 과정을 거치고 있습니다. 용서와 화해를 통해 새로운 시작이 가능해집니다.",
    keywords: ["상심", "배신", "이별", "슬픔", "상처"]
  },
  {
    card_number: 53,
    name_kr: "소드 4",
    name_en: "Four of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/53-four-of-swords.jpg",
    meaning_upright: "휴식, 명상, 회복, 고요함을 상징합니다. 몸과 마음의 휴식이 필요한 시기입니다. 바쁜 일상에서 벗어나 조용히 자신을 돌아보고 에너지를 충전해야 합니다.",
    meaning_reversed: "활동 재개, 깨어남, 휴식 끝을 의미합니다. 충분한 휴식을 취한 후 다시 활동할 준비가 되었습니다. 새로운 계획을 세우고 실행에 옮길 때입니다.",
    keywords: ["휴식", "명상", "회복", "고요함", "충전"]
  },
  {
    card_number: 54,
    name_kr: "소드 5",
    name_en: "Five of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/54-five-of-swords.jpg",
    meaning_upright: "갈등, 패배, 부정한 승리, 논쟁을 상징합니다. 승리했지만 그 과정에서 많은 것을 잃었거나 부정한 방법으로 이겼을 수 있습니다. 관계의 손상이나 신뢰의 상실을 경험할 수 있습니다.",
    meaning_reversed: "화해, 용서, 갈등 해결을 의미합니다. 과거의 갈등이나 논쟁이 해결되고 관계가 회복될 수 있습니다. 자존심을 내려놓고 화해의 손길을 내밀 때입니다.",
    keywords: ["갈등", "패배", "부정승리", "논쟁", "손실"]
  },
  {
    card_number: 55,
    name_kr: "소드 6",
    name_en: "Six of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/55-six-of-swords.jpg",
    meaning_upright: "전환, 여행, 회복, 평온함을 상징합니다. 어려운 시기를 지나 더 나은 상황으로 이동하고 있습니다. 물리적이거나 정신적 여행을 통해 치유와 성장을 경험합니다.",
    meaning_reversed: "정체, 과거 회귀, 여행 취소를 의미합니다. 변화나 전환이 늦어지거나 과거의 문제가 다시 나타날 수 있습니다. 앞으로 나아가기 위한 추가적인 노력이 필요합니다.",
    keywords: ["전환", "여행", "회복", "평온함", "이동"]
  },
  {
    card_number: 56,
    name_kr: "소드 7",
    name_en: "Seven of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/56-seven-of-swords.jpg",
    meaning_upright: "기만, 도둑질, 전략, 회피를 상징합니다. 부정직한 행동이나 속임수를 당하거나 자신이 그런 행동을 할 수 있습니다. 때로는 전략적 후퇴나 우회적 접근이 필요할 수도 있습니다.",
    meaning_reversed: "정직, 고백, 책임감을 의미합니다. 숨겨졌던 진실이 드러나거나 잘못에 대해 책임을 지게 됩니다. 정직한 태도로 문제를 해결하려는 의지를 보입니다.",
    keywords: ["기만", "도둑질", "전략", "회피", "속임수"]
  },
  {
    card_number: 57,
    name_kr: "소드 8",
    name_en: "Eight of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/57-eight-of-swords.jpg",
    meaning_upright: "제약, 함정, 무력감, 자기제한을 상징합니다. 스스로 만든 제약이나 부정적 사고로 인해 옴짝달싹하지 못하는 상태입니다. 실제로는 해결책이 있지만 두려움에 사로잡혀 보지 못하고 있습니다.",
    meaning_reversed: "해방, 자유, 제약 극복을 의미합니다. 자신을 옭아매던 제약에서 벗어나 새로운 가능성을 발견합니다. 부정적 사고패턴에서 벗어나 적극적으로 행동할 수 있게 됩니다.",
    keywords: ["제약", "함정", "무력감", "자기제한", "두려움"]
  },
  {
    card_number: 58,
    name_kr: "소드 9",
    name_en: "Nine of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/58-nine-of-swords.jpg",
    meaning_upright: "걱정, 불안, 악몽, 정신적 고통을 상징합니다. 과도한 걱정이나 불안으로 인해 잠을 이루지 못하거나 정신적 고통을 겪고 있습니다. 대부분 실제보다 상황을 과장해서 생각하는 경우가 많습니다.",
    meaning_reversed: "회복, 희망, 걱정 해소를 의미합니다. 그동안의 걱정이나 불안이 해소되고 정신적 평안을 찾게 됩니다. 도움을 받거나 문제의 해결책을 발견할 수 있습니다.",
    keywords: ["걱정", "불안", "악몽", "정신고통", "스트레스"]
  },
  {
    card_number: 59,
    name_kr: "소드 10",
    name_en: "Ten of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/59-ten-of-swords.jpg",
    meaning_upright: "끝, 배신, 절망, 바닥을 상징합니다. 더 이상 나빠질 수 없는 최악의 상황에 도달했지만, 이것이 곧 새로운 시작의 전환점이 됩니다. 완전한 끝은 완전한 새로운 시작을 의미합니다.",
    meaning_reversed: "회복, 재생, 희망을 의미합니다. 최악의 상황에서 벗어나 서서히 회복되기 시작합니다. 새로운 기회와 희망이 보이며 재기할 수 있는 가능성이 생깁니다.",
    keywords: ["끝", "배신", "절망", "바닥", "전환점"]
  },
  {
    card_number: 60,
    name_kr: "소드 잭",
    name_en: "Page of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/60-page-of-swords.jpg",
    meaning_upright: "호기심, 감시, 소식, 학습을 상징합니다. 새로운 정보나 아이디어에 대한 강한 호기심을 가지고 있습니다. 중요한 소식이나 메시지를 받을 수 있으며, 학습이나 연구 활동이 활발해집니다.",
    meaning_reversed: "가십, 스파이, 나쁜 소식을 의미합니다. 불필요한 간섭이나 뒷말로 인해 문제가 발생할 수 있습니다. 신뢰할 수 없는 정보나 좋지 않은 소식을 접할 수 있습니다.",
    keywords: ["호기심", "감시", "소식", "학습", "정보"]
  },
  {
    card_number: 61,
    name_kr: "소드 나이트",
    name_en: "Knight of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/61-knight-of-swords.jpg",
    meaning_upright: "행동력, 성급함, 용기, 직진을 상징합니다. 목표를 향해 거침없이 돌진하며 빠른 결정과 행동을 취합니다. 때로는 너무 성급하여 실수할 수 있지만 용기 있는 행동력을 보여줍니다.",
    meaning_reversed: "무모함, 공격성, 방향 상실을 의미합니다. 계획 없이 행동하여 문제를 일으키거나 공격적인 태도로 관계를 악화시킬 수 있습니다. 좀 더 신중한 접근이 필요합니다.",
    keywords: ["행동력", "성급함", "용기", "직진", "결단력"]
  },
  {
    card_number: 62,
    name_kr: "소드 퀸",
    name_en: "Queen of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/62-queen-of-swords.jpg",
    meaning_upright: "지적, 독립적, 공정함, 명료함을 상징합니다. 뛰어난 판단력과 분석력으로 객관적이고 공정한 결정을 내립니다. 감정에 휩쓸리지 않고 이성적으로 상황을 파악하며 독립적인 삶을 추구합니다.",
    meaning_reversed: "냉정함, 비판적, 고립을 의미합니다. 지나치게 이성적이어서 감정을 무시하거나 다른 사람에게 냉정하게 대할 수 있습니다. 과도한 비판으로 인해 관계가 소원해질 수 있습니다.",
    keywords: ["지적", "독립적", "공정함", "명료함", "객관성"]
  },
  {
    card_number: 63,
    name_kr: "소드 킹",
    name_en: "King of Swords",
    arcana_type: "minor",
    suit: "swords",
    image_url: "/images/cards/63-king-of-swords.jpg",
    meaning_upright: "지적 권위, 논리적 사고, 공정한 판단, 리더십을 상징합니다. 뛰어난 지성과 경험으로 올바른 결정을 내리며 타인을 이끌어갑니다. 법적 문제나 중요한 결정에서 공정하고 현명한 판단을 보여줍니다.",
    meaning_reversed: "독재, 냉혹함, 조작을 의미합니다. 권력을 남용하거나 감정을 무시한 채 냉혹한 결정을 내릴 수 있습니다. 지나친 통제욕이나 조작으로 문제를 일으킬 수 있습니다.",
    keywords: ["지적권위", "논리적사고", "공정판단", "리더십", "현명함"]
  },

  // 마이너 아르카나 - 펜타클 수트 (14장)
  {
    card_number: 64,
    name_kr: "펜타클 에이스",
    name_en: "Ace of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/64-ace-of-pentacles.jpg",
    meaning_upright: "새로운 기회, 물질적 시작, 번영의 가능성을 상징합니다. 새로운 직업이나 투자 기회, 사업 시작에 매우 유리한 시기입니다. 물질적 성공과 안정을 위한 토대를 마련할 수 있습니다.",
    meaning_reversed: "기회 상실, 물질적 불안정, 계획 실패를 의미합니다. 좋은 기회를 놓치거나 재정적 문제가 발생할 수 있습니다. 현실적인 계획 수립이 필요합니다.",
    keywords: ["새기회", "물질시작", "번영가능성", "투자", "토대"]
  },
  {
    card_number: 65,
    name_kr: "펜타클 2",
    name_en: "Two of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/65-two-of-pentacles.jpg",
    meaning_upright: "균형, 다중 업무, 적응력, 유연성을 상징합니다. 여러 가지 일을 동시에 처리하며 변화하는 상황에 잘 적응합니다. 우선순위를 정하고 시간 관리를 잘하는 것이 중요합니다.",
    meaning_reversed: "균형 상실, 과부하, 우선순위 혼란을 의미합니다. 너무 많은 일을 한꺼번에 처리하려다 실수하거나 중요한 것을 놓칠 수 있습니다. 체계적인 관리가 필요합니다.",
    keywords: ["균형", "다중업무", "적응력", "유연성", "시간관리"]
  },
  {
    card_number: 66,
    name_kr: "펜타클 3",
    name_en: "Three of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/66-three-of-pentacles.jpg",
    meaning_upright: "협력, 팀워크, 기술 발전, 인정을 상징합니다. 다른 사람들과의 협력을 통해 좋은 결과를 얻을 수 있습니다. 전문 기술이나 능력이 인정받으며 함께 일하는 즐거움을 느낍니다.",
    meaning_reversed: "협력 부족, 개인주의, 기술 부족을 의미합니다. 팀워크가 부족하거나 자신만의 방식을 고집하여 갈등이 발생할 수 있습니다. 더 많은 학습과 협력이 필요합니다.",
    keywords: ["협력", "팀워크", "기술발전", "인정", "전문성"]
  },
  {
    card_number: 67,
    name_kr: "펜타클 4",
    name_en: "Four of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/67-four-of-pentacles.jpg",
    meaning_upright: "보존, 절약, 안정 추구, 통제를 상징합니다. 재정적 안정을 위해 절약하고 현상유지를 추구합니다. 때로는 지나치게 보수적이거나 변화를 거부할 수 있지만 안전함을 중시합니다.",
    meaning_reversed: "인색함, 집착, 고립을 의미합니다. 물질에 대한 지나친 집착으로 인해 인간관계나 새로운 기회를 놓칠 수 있습니다. 균형 잡힌 관점이 필요합니다.",
    keywords: ["보존", "절약", "안정추구", "통제", "보수적"]
  },
  {
    card_number: 68,
    name_kr: "펜타클 5",
    name_en: "Five of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/68-five-of-pentacles.jpg",
    meaning_upright: "경제적 어려움, 부족함, 고립감, 도움 필요를 상징합니다. 재정적 어려움이나 건강 문제로 힘든 시기를 보내고 있습니다. 하지만 도움을 요청하면 지원을 받을 수 있습니다.",
    meaning_reversed: "회복, 도움 받기, 개선을 의미합니다. 어려웠던 상황이 점차 나아지고 필요한 도움을 받을 수 있게 됩니다. 새로운 기회나 지원이 찾아올 것입니다.",
    keywords: ["경제어려움", "부족함", "고립감", "도움필요", "힘든시기"]
  },
  {
    card_number: 69,
    name_kr: "펜타클 6",
    name_en: "Six of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/69-six-of-pentacles.jpg",
    meaning_upright: "관대함, 나눔, 도움 주기, 공정함을 상징합니다. 다른 사람을 도우며 나눔의 기쁨을 경험합니다. 재정적으로 여유가 있어서 베풀 수 있으며, 공정한 거래나 교환이 이루어집니다.",
    meaning_reversed: "이기심, 불공정, 의존을 의미합니다. 베푸는 것을 꺼리거나 불공정한 거래를 할 수 있습니다. 과도한 의존이나 일방적인 관계가 문제가 될 수 있습니다.",
    keywords: ["관대함", "나눔", "도움주기", "공정함", "베풂"]
  },
  {
    card_number: 70,
    name_kr: "펜타클 7",
    name_en: "Seven of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/70-seven-of-pentacles.jpg",
    meaning_upright: "투자, 장기적 계획, 인내, 평가를 상징합니다. 그동안의 노력이 결실을 맺기까지 좀 더 기다려야 하는 시기입니다. 현재 상황을 점검하고 향후 계획을 재평가해보는 것이 좋습니다.",
    meaning_reversed: "성급함, 투자 실패, 조급함을 의미합니다. 결과를 너무 빨리 원하거나 잘못된 투자로 인해 손실을 볼 수 있습니다. 더 신중하고 장기적인 관점이 필요합니다.",
    keywords: ["투자", "장기계획", "인내", "평가", "기다림"]
  },
  {
    card_number: 71,
    name_kr: "펜타클 8",
    name_en: "Eight of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/71-eight-of-pentacles.jpg",
    meaning_upright: "기술 향상, 열심히 일함, 전문성, 숙련을 상징합니다. 자신의 기술이나 능력을 향상시키기 위해 꾸준히 노력하고 있습니다. 장인 정신으로 완벽을 추구하며 전문성을 기릅니다.",
    meaning_reversed: "기술 부족, 게으름, 불완전을 의미합니다. 충분히 노력하지 않거나 기술 향상에 소홀할 수 있습니다. 더 많은 연습과 학습이 필요합니다.",
    keywords: ["기술향상", "열심히일함", "전문성", "숙련", "장인정신"]
  },
  {
    card_number: 72,
    name_kr: "펜타클 9",
    name_en: "Nine of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/72-nine-of-pentacles.jpg",
    meaning_upright: "독립, 자족, 성취, 풍요로움을 상징합니다. 물질적 성공을 이루고 독립적인 삶을 누리고 있습니다. 자신의 노력으로 얻은 성과를 즐기며 여유로운 생활을 할 수 있습니다.",
    meaning_reversed: "의존, 불안정, 성취 부족을 의미합니다. 아직 완전한 독립을 이루지 못했거나 물질적 불안정을 겪을 수 있습니다. 더 많은 노력과 인내가 필요합니다.",
    keywords: ["독립", "자족", "성취", "풍요로움", "여유"]
  },
  {
    card_number: 73,
    name_kr: "펜타클 10",
    name_en: "Ten of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/73-ten-of-pentacles.jpg",
    meaning_upright: "가족의 부, 유산, 전통, 안정을 상징합니다. 가족 전체가 물질적 풍요와 안정을 누리며 후손에게 물려줄 유산을 만들어갑니다. 전통적 가치와 가족의 결속력이 중요합니다.",
    meaning_reversed: "가족 갈등, 유산 분쟁, 불안정을 의미합니다. 가족 내에서 재산 문제나 가치관 차이로 인한 갈등이 발생할 수 있습니다. 화합과 이해가 필요합니다.",
    keywords: ["가족의부", "유산", "전통", "안정", "결속"]
  },
  {
    card_number: 74,
    name_kr: "펜타클 잭",
    name_en: "Page of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/74-page-of-pentacles.jpg",
    meaning_upright: "학습 의욕, 실용성, 새로운 기회, 성실함을 상징합니다. 새로운 기술이나 지식을 배우려는 강한 의욕을 가지고 있습니다. 실용적이고 현실적인 접근으로 좋은 기회를 만날 수 있습니다.",
    meaning_reversed: "게으름, 비실용적, 기회 상실을 의미합니다. 학습에 대한 의욕이 부족하거나 비현실적인 계획으로 기회를 놓칠 수 있습니다. 더 실용적인 접근이 필요합니다.",
    keywords: ["학습의욕", "실용성", "새기회", "성실함", "현실적"]
  },
  {
    card_number: 75,
    name_kr: "펜타클 나이트",
    name_en: "Knight of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/75-knight-of-pentacles.jpg",
    meaning_upright: "근면, 신뢰성, 책임감, 꾸준함을 상징합니다. 느리지만 확실하게 목표를 향해 나아가며 맡은 일에 대한 책임감이 강합니다. 신뢰할 수 있고 성실한 태도로 주변의 인정을 받습니다.",
    meaning_reversed: "게으름, 고집, 진전 부족을 의미합니다. 지나치게 보수적이어서 변화를 거부하거나 진전이 너무 느릴 수 있습니다. 좀 더 적극적인 자세가 필요합니다.",
    keywords: ["근면", "신뢰성", "책임감", "꾸준함", "성실"]
  },
  {
    card_number: 76,
    name_kr: "펜타클 퀸",
    name_en: "Queen of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/76-queen-of-pentacles.jpg",
    meaning_upright: "양육, 실용성, 풍요, 안정감을 상징합니다. 가정을 잘 돌보며 실용적인 지혜로 물질적 안정을 만들어갑니다. 다른 사람을 보살피는 능력이 뛰어나며 따뜻한 마음씨를 가지고 있습니다.",
    meaning_reversed: "물질주의, 과보호, 질투를 의미합니다. 물질에만 치우쳐 정신적 가치를 무시하거나 과도한 보호로 상대방을 억압할 수 있습니다. 균형 잡힌 관점이 필요합니다.",
    keywords: ["양육", "실용성", "풍요", "안정감", "보살핌"]
  },
  {
    card_number: 77,
    name_kr: "펜타클 킹",
    name_en: "King of Pentacles",
    arcana_type: "minor",
    suit: "pentacles",
    image_url: "/images/cards/77-king-of-pentacles.jpg",
    meaning_upright: "물질적 성공, 관대함, 안정성, 실업가 정신을 상징합니다. 사업이나 재정 관리에 뛰어난 능력을 보이며 물질적 성공을 이룩했습니다. 관대하고 신뢰할 수 있는 리더로서 존경받습니다.",
    meaning_reversed: "탐욕, 부패, 물질주의를 의미합니다. 돈과 권력에만 집착하여 도덕성을 잃거나 부정한 방법으로 이익을 추구할 수 있습니다. 진정한 가치에 대한 성찰이 필요합니다.",
    keywords: ["물질성공", "관대함", "안정성", "실업가정신", "리더십"]
  }
];

// 타로카드 이미지 URL 생성 함수 (실제 구현시 Supabase Storage 사용)
export function getCardImageUrl(cardNumber) {
  // 실제로는 Supabase Storage에서 이미지를 가져와야 합니다
  // 현재는 플레이스홀더 이미지 사용
  return `https://via.placeholder.com/200x350?text=Card+${cardNumber}`;
}

// 카드 ID로 카드 정보 가져오기
export function getCardById(cardId) {
  return tarotCardsData.find(card => card.card_number === cardId);
}

// 랜덤 카드 선택 함수
export function getRandomCards(count = 3) {
  const shuffled = [...tarotCardsData].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(card => ({
    ...card,
    is_reversed: Math.random() < 0.5 // 50% 확률로 역방향
  }));
}

// 메이저 아르카나만 가져오기
export function getMajorArcana() {
  return tarotCardsData.filter(card => card.arcana_type === 'major');
}

// 마이너 아르카나만 가져오기
export function getMinorArcana() {
  return tarotCardsData.filter(card => card.arcana_type === 'minor');
}

// 수트별 카드 가져오기
export function getCardsBySuit(suit) {
  return tarotCardsData.filter(card => card.suit === suit);
}