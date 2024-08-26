import React, {useState} from 'react';
import '../styles/shopStyle.css';

interface MenuProps {
  list: string[];
  action: (item:string) => void;
  state: string;
};

export function SelectMenu({list, action, state}:MenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <>
      <div className='menuWrapper'>
      <button
        onClick={()=>setOpen(!open)}
      >{state}</button>
        <div className={open?"menuOpen":"menuClose"}>
            {(list.length > 0) && list.map(item => (
              <button onClick={()=>action(item)}>
                {item}
              </button>
            ))}
        </div>
      </div>
    </>
  )
};