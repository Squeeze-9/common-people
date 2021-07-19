import React from 'react';
import Link from 'next/link';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Link href="/">
        <a>홈</a>
      </Link>
      <Link href="/board/free">
        <a>자유게시판</a>
      </Link>
      <Link href="/board/hot">
        <a>인기글</a>
      </Link>
      <Link href="/profile">
        <a>프로필</a>
      </Link>
      <Link href="/login">
        <a>로그인</a>
      </Link>
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
      {children}
    </div>
  );
};

export default AppLayout;
