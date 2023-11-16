import React from 'react'

const SectionTitle = ({ title, subTitle, description }) => {
  return (
    <div className="title-wrapper md:w-[750px] mx-auto text-center">
        {subTitle && <p className="label py-1 px-3 text-accent-green text-sm font-semibold bg-accent-mint inline-block rounded-full">{subTitle}</p>}
        <h1 className="section-title text-text font-extrabold text-3xl leading-10 md:text-[40px] md:leading-[50px] pt-4">{title ? title : "Section Title"}</h1>
        <p className="section-desc md:text-xl text-text-light pt-4">{description ? description : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
    </div>
  )
}

export default SectionTitle