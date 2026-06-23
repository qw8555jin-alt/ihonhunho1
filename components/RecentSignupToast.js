"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './RecentSignupToast.module.css';

const LOCATIONS = [
  '서초동', '강남동', '역삼동', '여의도동', '종로', 
  '해운대구', '수성구', '송도', '판교', '분당', '일산'
];

export default function RecentSignupToast() {
  const [toast, setToast] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const recentLocations = useRef([]); // 최근 5번 지역 저장

  useEffect(() => {
    let timeoutId;
    let hideTimeoutId;
    
    const showRandomToast = () => {
      // 5~10초 사이 랜덤 딜레이 생성 (5000ms ~ 10000ms)
      const randomDelay = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000);
      
      timeoutId = setTimeout(() => {
        // 최근 5번 이내에 나온 지역 제외
        const availableLocations = LOCATIONS.filter(
          loc => !recentLocations.current.includes(loc)
        );
        
        const randomLocation = availableLocations[Math.floor(Math.random() * availableLocations.length)];
        
        // 큐(Queue) 업데이트: 새 지역 추가 및 크기 유지
        recentLocations.current.push(randomLocation);
        if (recentLocations.current.length > 5) {
          recentLocations.current.shift();
        }

        setToast(`${randomLocation}에서 진단 신청을 완료했습니다.`);
        setIsVisible(true);
        
        // 3.5초간 노출 후 숨김
        hideTimeoutId = setTimeout(() => {
          setIsVisible(false);
          // 사라진 뒤 다음 알림 예약
          showRandomToast();
        }, 3500);
        
      }, randomDelay);
    };

    // 첫 사이클 시작
    showRandomToast();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(hideTimeoutId);
    };
  }, []);

  return (
    <div className={`${styles.toastWrapper} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.toastContent}>
        <span className={styles.icon}>🔔</span>
        <p className={styles.text}>{toast}</p>
      </div>
    </div>
  );
}
