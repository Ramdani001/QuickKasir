// src/LockScreen.js
import React, { useState, useRef, useEffect } from 'react';

export default function LockScreen(onUnlock){
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState(0);

    const [locked, setIsLocked ] = useState(false);

    const screenRef = useRef(null);

    // Activity
    const [lastActivity, setLastActivity] = useState(Date.now());
    const inactivityTime = 1000;

    
    const resetTimer = () => {
        setLastActivity(Date.now());
    };

    useEffect(() => {
        const handleUserActivity = () => {
        resetTimer();
        };

        const checkInactivity = () => {
            if (Date.now() - lastActivity > inactivityTime) {
                setIsLocked(true);
            }
        };

        document.addEventListener('mousemove', handleUserActivity);
        document.addEventListener('keydown', handleUserActivity);

        const interval = setInterval(checkInactivity, 1000); // Check every second

        return () => {
        document.removeEventListener('mousemove', handleUserActivity);
        document.removeEventListener('keydown', handleUserActivity);
        clearInterval(interval);
        };
    }, [lastActivity]);

    // Activity
  
    const handleStart = (e) => {
      setIsDragging(true);
      e.preventDefault();
    };
  
    const handleMove = (e) => {
      if (!isDragging) return;
      const clientY = e.clientY || e.touches[0].clientY;
      const screenHeight = screenRef.current.clientHeight;
      const newPosition = Math.min(clientY / screenHeight, 1);
      setPosition(newPosition);
    };
    
    const handleEnd = () => {
        console.log(position)
        if (position > 0.3) {
          console.log("unlock");
        // onUnlock();
        document.getElementById("lock").classList.add("-mt-[1000px]");
        // document.getElementById("lock").classList.add("hidden");
      }

      setIsDragging(false);
      setPosition(0);  // Reset position
    };
    return (
        <>
            <div className={ locked ? "absolute top-0 min-h-screen bg-[url('img/bg_login.png')] bg-content bg-center" : "hidden"}
             ref={screenRef}
             onMouseDown={handleStart}
             onTouchStart={handleStart}
             onMouseMove={handleMove}
             onTouchMove={handleMove}
             onMouseUp={handleEnd}
             onTouchEnd={handleEnd}
             style={{ transform: `translateY(${position * -100}%)`, transition: 'transform 0.2s' }}
             id='lock'
            >
                <div className='w-screen flex justify-center h-screen items-center top-0 '
                    >
                    <div className='grid items-center h-full'>
                        <h1 className='text-4xl font-bold'></h1>

                        <div className='animate-bounce text 4xl ml-10'>
                            <img src="img/arrow.png" alt="" width={100}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};