import Image from 'next/image'
import React from 'react'

const AboutSection = ({subTitle, title, description, list, image, right}) => {
  return (
    <div className={`element-wrapper mt-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 ${right && "md:flex-row-reverse"}`}>
        <div className={`col-data py-4 md:py-16 grid gap-4 flex-1`}>
            <h6 className="subtitle md:text-xl font-alt text-accent-purple">{subTitle ? subTitle : "About Subtitle"}</h6>
            <h3 className="title text-3xl">{title ? title : "About Title"}</h3>
            <p className="desc md:text-lg text-text-light">{description ? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
            {
                list ?
                <ul className="about-list text-text-light">
                    {
                        list.map((el, index) => {
                            return <li key={index} className="list-item md:text-lg">{el}</li>
                        })
                    }
                    
                </ul>
                :
                <ul className="about-list text-text-light">
                    <li className="list-item md:text-lg">Duis aute irure dolor in reprehenderit</li>
                    <li className="list-item md:text-lg">Excepteur sint occaecat </li>
                    <li className="list-item md:text-lg">Amet consectetur adipiscing elit</li>
                </ul>
            }
        </div>

        <div className={`col-image flex-1`}>
            <img src={image} alt={title} className='object-contain w-full h-full'  ss />
        </div>
    </div>
  )
}

export default AboutSection