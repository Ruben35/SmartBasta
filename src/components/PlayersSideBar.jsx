import {React, useEffect, useRef, useState} from 'react';
import useMediaQuery from '../utils/CustomHooks';

const PlayersSideBar = ({open,onClose}) => {
    const [openContainer, setOpenContainer] = useState(open);
    const isFirstRun = useRef(true);

    let isWide= useMediaQuery("(min-width: 1025px)");

    const handleClick = (e)=>{
        e.preventDefault();
        onClose();
    }

    useEffect(()=>{
        if(isFirstRun.current){
            isFirstRun.current = false;
            return;
        }else{ 
            if(open){
                setOpenContainer(open);
            }else{
                setTimeout(() => {
                    setOpenContainer(open);
                }, 500)
            }
        }
    }, [open]);

    const bar=isWide?"playersBar":"playersBar "+(open?"open":"close");

    return (
        <div>
            <div className={"playersBarContainer "+(openContainer?"open":"close")}>
                <div className={bar}>
                    <div className="container">
                        <div className="header">
                            <span>Posiciones</span>
                            <span>Ronda 1</span>
                        </div>
                    </div>
                </div>
                <div className={"playersBarDarkArea "+(open?"open":"close")} onClick={handleClick}>
                </div>
            </div>
        </div>
    );
}

export default PlayersSideBar;