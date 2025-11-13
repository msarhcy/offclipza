'use client';
import React,{createContext,useContext,useEffect,useState} from 'react';
const ThemeContext = createContext({theme:'light',toggle:()=>{}} as any);
export default function ThemeProvider({children}:{children:React.ReactNode}) {
  const [theme,setTheme]=useState<'light'|'dark'>(()=> (typeof window!=='undefined' && localStorage.getItem('theme')==='dark') ? 'dark' : 'light');
  useEffect(()=>{ try{ document.documentElement.dataset.theme = theme }catch{}; try{ localStorage.setItem('theme',theme) }catch{} },[theme]);
  const toggle = ()=> setTheme(t => t === 'light' ? 'dark' : 'light');
  return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>;
}
export function useTheme(){ return useContext(ThemeContext); }
