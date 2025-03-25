import Link from 'next/link'
import Logo from '@/components/logo';

export default function Navigation({ domain,logo }) {
  return (
    <>
      <div className="flash-news">
        <div className="container">
          <a href="https://adao.ai" target="_blank" rel="noopener noreferrer">
            <span>
              <b>Flash News!</b>
            </span>
            &nbsp;ADAO token is dropping to your Base chain soon! Get ADAO today while it's on sale!
          </a>
        </div>
      </div>
      <section className="header-navigation">
        <div className="container">
        <Logo domain={domain} logo={logo} />
          <div className="navs">
            <Link href="/part" target='_blank'>Partner</Link>
            <Link href="/contact" target='_blank'>Contact</Link>
            <Link href={`https://www.profilesuite.com/signup?domain=${domain}`} target='_blank'><button className="signup-btn">Sign Up</button></Link>
          </div>
        </div>
      </section>
    </>    
  );
}
