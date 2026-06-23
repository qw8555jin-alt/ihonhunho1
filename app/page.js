import styles from './page.module.css';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export const metadata = {
  title: '이혼전문 변호사 숏폼 마케팅 | 올인원 솔루션',
  description: "조회수만 높은 춤추는 숏폼은 변호사의 가치를 떨어뜨립니다. 우리는 '진짜 사건 수임'으로 이어지는 전략적 숏폼만 만듭니다.",
};

const CASES = [
  {
    title: "Case A (이혼 전문 A 변호사)",
    intro: "도입 성과: 숏폼 도입 후 3개월 만에",
    result: "수임 결과: 월평균 유료 상담 문의 340% 증가"
  },
  {
    title: "Case B (이혼 전문 B 변호사)",
    intro: "도입 성과: 단 1개의 쇼츠 영상으로 조회수 50만 달성 및",
    result: "수임 결과: 상간자 소송 12건 동시 수임 성공"
  },
  {
    title: "Case C (이혼 전문 C 변호사)",
    intro: "도입 성과: 가사 소송 전문 브랜드 채널 개설 및 정기 콘텐츠 발행 시스템 구축",
    result: "수임 결과: 재산분할 및 기여도 분쟁 등 고단가 사건 5건 추가 수임 성공"
  },
  {
    title: "Case D (이혼 전문 D 변호사)",
    intro: "도입 성과: 원데이 슛(One-Day Shoot) 시스템 도입으로 변호사 마케팅 공수 80% 감소",
    result: "수임 결과: 마케팅 투자 비용 대비 착수금 기준 7배 매출 달성"
  },
  {
    title: "Case E (이혼 전문 E 변호사)",
    intro: "도입 성과: 상간녀/상간남 위자료 소송 특화 숏폼 시리즈 타겟팅 적중",
    result: "수임 결과: 영상 발행 2주 만에 상간자 위자료 청구 소송 8건 동시 추가 수임"
  },
  {
    title: "Case F (이혼 전문 F 변호사)",
    intro: "도입 성과: 네이비 & 골드 톤의 텍스트 중심 연출로 법조계 품위 유지 및 차별화",
    result: "수임 결과: 자산가 층 의뢰인의 고액 재산분할 소송 3건 추가 수임 성공"
  },
  {
    title: "Case G (이혼 전문 G 변호사)",
    intro: "도입 성과: 특정 광역권 대상 숏폼 마케팅 지역 독점권 선점 전략 실행",
    result: "수임 결과: 디지털 채널 활성화를 통해 전년 동기 대비 월평균 6건 이상의 추가 수임 지속"
  },
  {
    title: "Case H (이혼 전문 H 변호사)",
    intro: "도입 성과: 일상적 법률 명쾌하게 풀이하는 스크립트 적용 및 릴스 알고리즘 진입",
    result: "수임 결과: 총조회수 120만 회 돌파 및 당월 가사 사건 11건 추가 수임 계약 완료"
  },
  {
    title: "Case I (이혼 전문 I 변호사)",
    intro: "도입 성과: 주말 및 야간 시간대 집중 송출 공략 및 숏폼 하단 상담 동선 최적화",
    result: "수임 결과: 직장인 의뢰인 타겟팅 성공으로 야간/주말 비대면 상담을 통해 4건 추가 수임"
  },
  {
    title: "Case J (이혼 전문 J 변호사)",
    intro: "도입 성과: 국제이혼 및 혼인취소 등 세부 전문 분야 타겟팅 쇼츠 집중 발행",
    result: "수임 결과: 틈새시장 선점으로 경쟁 없이 첫 달 마케팅 비용 대비 12배의 수임료 수익 기록"
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <HeroSlider />
        <h1 className={`${styles.title} animate-fade-in-up`}>
          원피드마케팅의 목표는<br />
          <span className={styles.highlight}>오직 수임률 증가 입니다</span>
        </h1>
        <p className={`${styles.subtitle} animate-fade-in-up delay-100`}>
          수임 증가만을 목적으로<br />
          기획+촬영+편집을 대행해드립니다
        </p>
      </section>

      {/* 2. Agitation Section */}
      <section className={styles.agitation}>
        <div className="animate-fade-in-up">
          <p className={styles.agitationText}>
            "블로그 상위 노출에 수백만 원을 쓰셔도 <span style={{color: 'var(--secondary)', fontWeight: 'bold'}}>문의가 없으신가요?</span>"
          </p>
          <p className={styles.agitationText}>
            "대행사에 맡긴 숏폼 영상, 조회수는 나오는데 <span style={{color: 'var(--secondary)', fontWeight: 'bold'}}>왜 수임으로는 안 이어질까요?</span>"
          </p>
          <div className={styles.agitationCore}>
            이혼 소송은 감정적 몰입과 강력한 신뢰가 필요한 <strong>'고관여 상품'</strong>입니다.<br />
            단순 트렌드 따라하기식 숏폼은 돈 낭비일 뿐입니다.
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>이혼 전문 숏폼 솔루션</h2>
          <p style={{color: 'var(--text-muted)'}}>오직 변호사님만을 위한 차별화된 전략을 제시합니다.</p>
        </div>
        <div className={styles.featuresContainer}>
          <div className={`${styles.featureCard} animate-fade-in-up delay-100`}>
            <span className={styles.featureIcon}>📝</span>
            <h3 className={styles.featureTitle}>법률 맞춤형 <span style={{whiteSpace: 'nowrap'}}>하이-훅(High-Hook)</span> 기획</h3>
            <p className={styles.featureDesc}>
              법률적 리스크(변호사법 위반 등)는 철저히 배제하면서, 의뢰인의 감정을 흔드는 심리 기반 카피라이팅 기획.
            </p>
          </div>
          <div className={`${styles.featureCard} animate-fade-in-up delay-200`}>
            <span className={styles.featureIcon}>🎬</span>
            <h3 className={styles.featureTitle}>신뢰감을 주는 비주얼 디렉팅</h3>
            <p className={styles.featureDesc}>
              가볍지 않고 진정성 있는 톤앤매너 설정 (조명, 구도, 폰트 구성의 고급화).
            </p>
          </div>
          <div className={`${styles.featureCard} animate-fade-in-up delay-300`}>
            <span className={styles.featureIcon}>🎯</span>
            <h3 className={styles.featureTitle}>이탈 없는 전환 설계(Funnel)</h3>
            <p className={styles.featureDesc}>
              숏폼 시청 → 프로필 링크 랜딩 → 카카오톡/전화 상담으로 이어지는 동선 설계.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className={styles.process}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>체계적인 업무 프로세스</h2>
        </div>
        <div className={styles.processContainer}>
          <div className={`${styles.processStep} animate-fade-in-up`}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3>1:1 맞춤 승소 데이터 분석</h3>
              <p>변호사님의 주력 분야(재산분할, 양육권, 상간녀 소송 등) 분석 및 타겟팅.</p>
            </div>
          </div>
          <div className={`${styles.processStep} animate-fade-in-up delay-100`}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3>숏폼 스크립트 설계</h3>
              <p>변호사법을 준수하는 100% 맞춤형 대본 작성.</p>
            </div>
          </div>
          <div className={`${styles.processStep} animate-fade-in-up delay-200`}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3>원데이 슛(One-Day Shoot)</h3>
              <p>변호사님의 본업에 방해되지 않도록 최소한의 시간으로 한 달 치 영상 촬영.</p>
            </div>
          </div>
          <div className={`${styles.processStep} animate-fade-in-up delay-300`}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h3>전환 최적화 편집 & 업로드</h3>
              <p>시각적 몰입도를 높이는 타이포그래피 기반 편집 및 데이터 모니터링.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Social Proof Section */}
      <section className={styles.socialProof}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} style={{color: 'var(--white)'}}>원피드 마케팅과 함께하신 대표님들</h2>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={styles.proofContainer}>
            {[...CASES, ...CASES].map((c, i) => (
              <div key={i} className={styles.proofCard}>
                <h3>{c.title}</h3>
                <div className={styles.proofResult}>
                  <div className={styles.proofIntro}>{c.intro}</div>
                  <span className={styles.proofHighlight}>{c.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactHeader}>
          <h2 className={styles.contactTitle}>무료 맞춤형 숏폼 진단 신청</h2>
          <p className={styles.contactDesc}>
            "지역별로 오직 한 분의 변호사님과만<br />
            <span style={{color: 'var(--secondary)', fontWeight: 'bold'}}>파트너십을 맺습니다.</span><br /><br />
            경쟁 로펌이 먼저 시작하기 전에<br />
            <span style={{color: 'var(--secondary)', fontWeight: 'bold'}}>시장을 선점하세요.</span>"
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
