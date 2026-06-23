"use client";

import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={styles.formContainer}>
      {/* 
        Netlify Forms 연동을 위한 설정
        Netlify에 배포 시 이 폼 태그를 자동으로 인식하여 이메일 알림을 보냅니다.
      */}
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/success"
      >
        {/* Netlify Forms 필수 숨김 필드 */}
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="lawFirmName">사무실명</label>
          <input 
            type="text" 
            id="lawFirmName" 
            name="사무실명" 
            className={styles.input} 
            placeholder="예: 법무법인 파트너스" 
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>과거 숏폼 진행여부</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="과거 숏폼 진행여부" value="O" className={styles.radioInput} required />
              예 (진행 경험 있음)
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="과거 숏폼 진행여부" value="X" className={styles.radioInput} required />
              아니오 (처음입니다)
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>현재 운영중인 채널 여부</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="현재 운영중인 채널 여부" value="운영 중" className={styles.radioInput} required />
              예 (운영 중)
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="현재 운영중인 채널 여부" value="미운영" className={styles.radioInput} required />
              아니오 (미운영)
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="startDate">희망 시작일</label>
          <input 
            type="date" 
            id="startDate" 
            name="희망 시작일" 
            className={styles.input} 
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="videoCount">원하는 영상의 개수(월단위)</label>
          <select id="videoCount" name="원하는 영상의 개수" className={styles.select} required defaultValue="">
            <option value="" disabled>선택해주세요</option>
            <option value="월 4개 (주 1회)">월 4개 (주 1회)</option>
            <option value="월 8개 (주 2회)">월 8개 (주 2회)</option>
            <option value="월 12개 (주 3회 이상)">월 12개 (주 3회 이상)</option>
            <option value="협의 후 결정">협의 후 결정</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="budget">예상 월 예산</label>
          <select id="budget" name="예상 월 예산" className={styles.select} required defaultValue="">
            <option value="" disabled>선택해주세요</option>
            <option value="100만원 이하">100만원 이하</option>
            <option value="100만원 - 300만원">100만원 - 300만원</option>
            <option value="300만원 - 500만원">300만원 - 500만원</option>
            <option value="500만원 이상">500만원 이상</option>
            <option value="협의 후 결정">협의 후 결정</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">연락 받으실 이메일</label>
          <input 
            type="email" 
            id="email" 
            name="연락 받으실 이메일" 
            className={styles.input} 
            placeholder="example@lawfirm.com" 
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="monthlyCases">현재 월평균 수임 건수 <span style={{fontSize: '0.85em', color: 'var(--text-muted)', fontWeight: 'normal'}}>(마케팅 목표 설정 참고용)</span></label>
          <select id="monthlyCases" name="현재 월평균 수임 건수" className={styles.select} defaultValue="">
            <option value="" disabled>대략적인 건수를 선택해주세요 (선택)</option>
            <option value="1~3건">1~3건</option>
            <option value="4~7건">4~7건</option>
            <option value="8~15건">8~15건</option>
            <option value="16건 이상">16건 이상</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="retainerFee">이혼 소송 평균 착수금 대역 <span style={{fontSize: '0.85em', color: 'var(--text-muted)', fontWeight: 'normal'}}>(타겟 고객층 분석 참고용)</span></label>
          <select id="retainerFee" name="이혼 소송 평균 착수금 대역" className={styles.select} defaultValue="">
            <option value="" disabled>평균적인 대역을 선택해주세요 (선택)</option>
            <option value="300만원 ~ 400만원">300만원 ~ 400만원</option>
            <option value="400만원 ~ 500만원">400만원 ~ 500만원</option>
            <option value="500만원 이상">500만원 이상</option>
            <option value="비공개 (상담 시 논의)">비공개 (상담 시 논의)</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="location">사무실 위치 (상세주소 제외)</label>
          <input 
            type="text" 
            id="location" 
            name="사무실 위치" 
            className={styles.input} 
            placeholder="ex)서울시 서초동, 강원도 강릉시" 
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="inquiry">문의사항 <span style={{fontSize: '0.85em', color: 'var(--text-muted)', fontWeight: 'normal'}}>(선택)</span></label>
          <textarea 
            id="inquiry" 
            name="문의사항" 
            className={styles.textarea} 
            placeholder="추가로 궁금하신 점이나 현재 로펌의 마케팅 고민을 자유롭게 적어주세요." 
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          무료 상담 신청하기
        </button>
      </form>
    </div>
  );
}
