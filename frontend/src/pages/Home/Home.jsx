import React, { useEffect, useState } from 'react'
import "./Home.css"
import { axsiosGetAllData } from '../../api/axios'

function Home() {
  const [user, setUser]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    
    let cancelled = false;

    async function fetchUser() {
      try {
        setLoading(true);
        const res = await fetch(`http://127.0.0.1:3000/api/launchers`);
        const data = await res.json();
        if (!cancelled) setUser(data["data"]);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    
    
    fetchUser();
    
    
    
    
    return () => { cancelled = true; };
  }, []); 
  
  
  
  return <div>
    <ul>
      {/* {user.map((u,i) => <li key={i}>I am a { u.name }</li>)} */}
    </ul>
  </div>
}



export default Home