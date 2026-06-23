import styles from './page.module.css';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export const metadata = {
  title: '이혼전문 변호사 숏폼 마케팅 | 올인원 솔루션',
  description: "조회수만 높은 춤추는 숏폼은 변호사의 가치를 떨어뜨립니다. 우리는 '진짜 사건 수임'으로 이어지는 전략적 숏폼만 만듭니다.",
};

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
        <Link href="#contact" className={`${styles.ctaButton} animate-fade-in-up delay-200`}>
          우리 로펌 맞춤형 숏폼 진단받기 (선착순 월 5개 로펌 한정)
        </Link>
      </section>

      {/* 2. Agitation Section */}
      <section className={styles.agitation}>
        <div className="animate-fade-in-up">
          <p className={styles.agitationText}>
            "블로그 상위 노출에 수백만 원을 쓰셔도 문의가 없으신가요?"
          </p>
          <p className={styles.agitationText}>
            "대행사에 맡긴 숏폼 영상, 조회수는 나오는데 왜 수임으로는 안 이어질까요?"
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
            <h3 className={styles.featureTitle}>법률 맞춤형 하이-훅(High-Hook) 기획</h3>
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
            <h3 className={styles.featureTitle}>이탈 없는 전환 깔때기(Funnel)</h3>
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
          <h2 className={styles.sectionTitle}>숏폼 마케팅 왜 해야할까요?</h2>
          <p style={{color: 'var(--text-main)'}}>숫자로 증명하는 압도적인 성공 사례</p>
        </div>
        <div className={styles.proofContainer}>
          <div className={`${styles.proofCard} animate-fade-in-up delay-100`}>
            <h3>Case A (이혼 전문 A 변호사)</h3>
            <div className={styles.proofResult}>
              숏폼 도입 후 3개월 만에<br />
              <span className={styles.highlight}>월평균 유료 상담 문의 340% 증가</span>
            </div>
          </div>
          <div className={`${styles.proofCard} animate-fade-in-up delay-200`}>
            <h3>Case B (이혼 전문 B 변호사)</h3>
            <div className={styles.proofResult}>
              단 1개의 쇼츠 영상으로<br />
              조회수 50만 달성 및<br />
              <span className={styles.highlight}>상간자 소송 12건 동시 수임 성공</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactHeader}>
          <h2 className={styles.contactTitle}>무료 맞춤형 숏폼 진단 신청</h2>
          <p className={styles.contactDesc}>
            "지역별로 오직 한 분의 변호사님과만 파트너십을 맺습니다.<br />
            경쟁 로펌이 먼저 시작하기 전에 시장을 선점하세요."
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
