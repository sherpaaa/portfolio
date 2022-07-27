import { MainImage } from '../components/MainImage'
import { ProjectCard } from '../components/ProjectCard'
import { Footer } from '../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { pItems } from '../data/projects'
import { AppHeader } from '../components/AppHeader'

const projectitems = pItems

export default function Projects() {
  const isDesktop = useMediaQuery({
    query: '(min-width:780px)',
  })
  const isMobile = useMediaQuery({ query: '(max-width:780px' })

  const projectWrapper = {
    maxWidth: '48rem',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '4rem',
    marginBottom: '8rem',
  }

  const projectWrapperM = {
    maxWidth: '48rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4rem',
    marginBottom: '8rem',
    padding: '1rem',
  }

  const projectList = projectitems.map((pitem, index) => (
    <ProjectCard
      key={index}
      rf={pitem.rf}
      ptitle={pitem.ptitle}
      ptag1={pitem.ptag1}
      ptag2={pitem.ptag2}
      ptag3={pitem.ptag3}
      pcaption={pitem.pcaption}
      point1={pitem.point1}
      point2={pitem.point2}
      member={pitem.member}
      duration={pitem.duration}
    />
  ))
  return (
    <div>
      <AppHeader />
      <MainImage
        title={'PROJECTS'}
        subtitle1={'Kousuke Masuda'}
        subtitle2={'Research and Design'}
      />
      {isDesktop && <div style={projectWrapper}>{projectList}</div>}
      {!isDesktop && <div style={projectWrapperM}>{projectList}</div>}
      <Footer />
    </div>
  )
}
