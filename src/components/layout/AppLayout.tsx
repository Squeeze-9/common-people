import React from 'react';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Link href="/">홈</Link>
        <Link href="/board/free">자유게시판</Link>
        <Link href="/board/hot">인기글</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
