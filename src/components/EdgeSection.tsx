import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'

const EdgeSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex items-center p-4 justify-between bg-blue-500">
          <div className="xl:w-1/2 px-4 mt-8">
            <div className="px-4">
              <h1 className="font-bold mb-8 text-2xl text-[#0F002D]">
                No AI Hallucinations
              </h1>
              <h6 className="text-lg font-normal leading-[35px]">
                <strong>Aeka</strong> provides insights devoid of AI-induced
                illusions. No mirages, No fuzzy interpretations, just concrete
                results that steer your strategies.
              </h6>
            </div>
          </div>
          <div className="xl:w-1/2 hidden xl:block">
            <div className="rounded-2xl bg-[#277e3a]">IMAGE</div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default EdgeSection
