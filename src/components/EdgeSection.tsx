import React from 'react'
import Section from './structure/Section'
import Container from './structure/Container'
import RichImage from './common/RichImage'

const EdgeSection = () => {
  return (
    <Section id="edge-section">
      <Container>
        <RichImage index={1}/>
        <RichImage index={2}/>
        <RichImage index={3}/>
        <RichImage index={4}/>
      </Container>
    </Section>
  )
}

export default EdgeSection
