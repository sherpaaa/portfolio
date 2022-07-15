import { MdChevronRight } from 'react-icons/md'

export const SnsButton = (props) => {
  const bst = {
    padding: '0.5rem 1.25rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    letterSpacing: '0.125rem',
    backgroundColor: props.color,
    color: '#FFF',
    textDecoration: 'none',
    marginRight: '1rem',
  }

  return (
    <a href={props.link} style={bst} target="_blank">
      {props.title}
      <MdChevronRight style={{ fontSize: '1.25rem' }} />
    </a>
  )
}
