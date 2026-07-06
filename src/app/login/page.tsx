'use client';
import { useState } from 'react'; import { signInWithEmailAndPassword } from 'firebase/auth'; import { auth } from '@/lib/firebase'; import Nav from '@/components/Nav'; import { useRouter } from 'next/navigation';
export default function Login(){ const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState(''); const r=useRouter();
 async function login(e:any){e.preventDefault(); setErr(''); try{await signInWithEmailAndPassword(auth,email,password); r.push('/admin')}catch(error:any){setErr(error.message)}}
 return <><Nav/><form className="form" onSubmit={login}><h2>Admin Login</h2>{err&&<div className="error">{err}</div>}<label>Email</label><input className="input" value={email} onChange={e=>setEmail(e.target.value)} /><label>Password</label><input type="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} /><button className="btn">Login</button></form></>}
