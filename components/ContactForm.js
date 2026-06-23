"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className={styles.formContainer}>
      {/* 
        Netlify Forms 연동을 위한 설정
        Netlify에 배포 시 이 폼 태그를 자동으로 인식하여 이메일 알림을 보냅니다.
      */}
      <form 
        name="contact" 
        method="POST" 
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

        <div className={styles.privacyGroup}>
          <label className={styles.privacyLabel}>
            <input 
              type="checkbox" 
              name="개인정보_수집_동의" 
              required 
              className={styles.privacyCheckbox} 
            />
            <span>[필수] 개인정보 수집 및 이용에 동의합니다.</span>
          </label>
          <button 
            type="button" 
            className={styles.privacyToggleBtn} 
            onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
          >
            [상세보기]
          </button>
        </div>

        {isPrivacyOpen && (
          <div className={styles.privacyContent}>
            <strong>■ 개인정보 수집 및 이용 동의 (필수)</strong><br/><br/>
            구명도는 변호사 맞춤형 숏폼 마케팅 제안서 발송 및 서비스 상담을 위해 아래와 같이 개인정보를 수집 및 이용합니다. 내용을 자세히 읽으신 후 동의 여부를 결정해 주시기 바랍니다.<br/><br/>
            1. 개인정보의 수집 및 이용 목적<br/>
            - 로펌/사무실 맞춤형 숏폼 마케팅 제안서 및 분석 리포트 발송<br/>
            - 서비스 이용에 따른 본인 식별 및 원활한 상담 의사소통 경로 확보<br/><br/>
            2. 수집하는 개인정보의 항목<br/>
            - 필수항목: 사무실명, 이메일 주소, 주 활동 지역(대략적인 위치)<br/><br/>
            3. 개인정보의 보유 및 이용 기간<br/>
            - 목적 달성 완료 후 즉시 파기 (단, 상담 및 안내를 위해 신청일로부터 최대 1년간 보관 후 지체 없이 파기합니다.)<br/><br/>
            4. 동의를 거부할 권리 및 불이익<br/>
            - 귀하는 본 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 단, 동의를 거부하실 경우 맞춤형 제안서 발송 및 상담 서비스 이용이 제한될 수 있습니다.
          </div>
        )}

        <button type="submit" className={styles.submitBtn}>
          무료 상담 신청하기
        </button>
        <p style={{textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
          * 영업일 기준 2일 이내 이메일로 답변 드립니다.
        </p>
      </form>
    </div>
  );
}
