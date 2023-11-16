import Image from 'next/image'
import React from 'react'

const FeatureCard = ({icon}) => {
  return (
    <div className="card-wrapper grid place-items-center">
        <div className="card-icon h-16 w-16 grid place-items-center bg-accent-purple rounded-full aspect-square">
            <Image src={icon} width={21} height={21} alt="Featured" className='fill-text' />
        </div>

        <h3 className="card-title text-text font-bold text-xl md:text-2xl pt-4">Instant Features</h3>
        <p className="card-desc text-text-light pt-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
    </div>
  )
}

export default FeatureCard