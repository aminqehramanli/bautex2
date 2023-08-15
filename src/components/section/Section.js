import React, { Component } from 'react'
import SectionHeader from './SectionHeader'
import SectionGrid from './SectionGrid'
import SectionButton from './SectionButton'

export class Section extends Component {
  render() {
    return (
      <section>
      <SectionHeader/>,

      <SectionGrid/>,

      <SectionButton/>
      </section>


    )
  }
}

export default Section
