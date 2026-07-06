'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Movie } from '@/lib/types';
import Nav from '@/components/Nav';
import Link from 'next/link';

export default function Home(){
 const [movies,setMovies]=useState<Movie[]>([]); const [search,setSearch]=useState('');
 useEffect(()=>{async function load(){const q=query(collection(db,'movies'),orderBy('createdAt','desc')); const snap=await getDocs(q); setMovies(snap.docs.map(d=>({id:d.id,...d.data()} as Movie)));} load().catch(()=>{});},[]);
 const filtered=movies.filter(m=>(m.title+m.genre+m.language).toLowerCase().includes(search.toLowerCase()));
 return <><Nav/><section className="hero"><h1>All-in-One Licensed OTT Platform</h1><p className="muted">Admin panel se licensed movies add karo, users homepage par watch karenge.</p><div className="row"><input className="input" style={{maxWidth:420}} placeholder="Search movies..." value={search} onChange={e=>setSearch(e.target.value)}/><Link className="btn" href="/admin">Add Movie</Link></div></section><div className="grid">{filtered.map(m=><Link key={m.id} className="card" href={`/movie/${m.id}`} style={{textDecoration:'none',color:'white'}}>{m.posterUrl?<img src={m.posterUrl} alt={m.title}/>:<div className="poster">{m.title}</div>}<div className="cardBody"><b>{m.title}</b><p className="muted">{m.genre} • {m.language} • {m.year}</p><p className="muted">{m.description.slice(0,80)}...</p></div></Link>)}{filtered.length===0&&<p className="container muted">No movies yet. Admin panel se pehli movie add karo.</p>}</div></>
}
