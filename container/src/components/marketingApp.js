import React, {useEffect, useRef} from 'react';
import { mount as marketingMount } from 'marketing/MarketingApp';


export default ()=> {
    const marketingRef= useRef(null)

    useEffect(() => {
        marketingMount(marketingRef.current)
    }, [])
    
     return <div ref={marketingRef} />
}