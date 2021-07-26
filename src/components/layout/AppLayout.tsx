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
      <nav>
        <Link href="/">홈</Link>
        <Link href="/board/free">자유게시판</Link>
        <Link href="/board/hot">인기글</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </nav>
      <aside>
        <Link href="/post/post1">post1</Link>
        <Link href="/post/post2">post2</Link>
      </aside>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
