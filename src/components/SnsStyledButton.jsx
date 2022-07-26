import { MdChevronRight } from 'react-icons/md'
import styled from 'styled-components'

export const SnsStyledButton = (props) => {
  const BaseButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  letter-spacing: 0.125rem;
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background: ${props.color};
  &:hover {
    background-color:${props.bcolor};
    cursor: pointer;
`

  return (
    <>
      <BaseButton href={props.link} target="_blank">
        {props.title} <MdChevronRight style={{ fontSize: '1.25rem' }} />
      </BaseButton>
    </>
  )
}
