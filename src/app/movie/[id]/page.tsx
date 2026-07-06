'use client';
import { useEffect, useState } from 'react'; import { doc, getDoc } from 'firebase/firestore'; import { db } from '@/lib/firebase'; import { Movie } from '@/lib/types'; import Nav from '@/components/Nav';
export default function MoviePage({params}:{params:{id:string}}){ const [m,setM]=useState<Movie|null>(null); useEffect(()=>{getDoc(doc(db,'movies',params.id)).then(s=>setM({id:s.id,...s.data()} as Movie))},[params.id]); if(!m)return <><Nav/><div className="container">Loading...</div></>;
 return <><Nav/><div className="container"><h1>{m.title}</h1><p className="muted">{m.genre} • {m.language} • {m.year} • {m.source}</p>{m.videoUrl?<video className="player" controls src={m.videoUrl}/>:<div className="error">Video URL missing</div>}<p>{m.description}</p></div></>}
