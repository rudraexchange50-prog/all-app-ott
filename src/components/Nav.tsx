import Link from 'next/link';
export default function Nav(){return <div className="nav"><Link href="/" className="brand">ALL APP OTT</Link><div className="row"><Link className="btn secondary" href="/admin">Admin</Link><Link className="btn" href="/login">Login</Link></div></div>}
