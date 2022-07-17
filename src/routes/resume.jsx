import { MainImage } from '../components/MainImage'
import { Footer } from '../components/Footer'
import { ResumeItem } from '../components/ResumeItem'
import { useMediaQuery } from 'react-responsive'
import { resumeItems } from '../data/resumeitems'
import { AppHeader } from '../components/AppHeader'

const rItems = resumeItems

export default function Resume() {
  const isMobile = useMediaQuery({ query: '(max-width:780px' })

  const resumeList = rItems.map((ritem, index) => (
    <ResumeItem
      key={index}
      rtitle={ritem.title}
      raffiliation={ritem.affiliation}
      rtag1={ritem.tag1}
      rtag2={ritem.tag2}
      rtag3={ritem.tag3}
      rtext={ritem.text}
    />
  ))

  const resumeWrapper = {
    maxWidth: '48rem',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '4rem',
    marginBottom: '8rem',
    padding: '0 1.5rem',
  }
  return (
    <div>
      <AppHeader />
      <MainImage
        title={'RESUME'}
        subtitle1={'Kousuke Masuda'}
        subtitle2={'Research and Design'}
      />
      <div style={resumeWrapper}>{resumeList}</div>
      <Footer />
    </div>
  )
}
