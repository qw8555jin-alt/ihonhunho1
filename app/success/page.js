import Link from 'next/link';

export default function Success() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#020c1b',
      color: '#ccd6f6'
    }}>
      <h1 style={{ color: '#d4af37', marginBottom: '1rem', fontSize: '2.5rem' }}>접수가 완료되었습니다!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        남겨주신 소중한 정보를 바탕으로 24시간 이내에 연락 드리겠습니다.
      </p>
      <Link href="/" style={{
        padding: '0.8rem 1.5rem',
        backgroundColor: '#d4af37',
        color: '#020c1b',
        textDecoration: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        transition: 'all 0.3s'
      }}>
        메인으로 돌아가기
      </Link>
    </div>
  );
}
