import {OperationStatus} from '../Enums'
import styled from 'styled-components'

interface StatusDotProps {
  status: OperationStatus
}

const IconWrapper = styled.label`
  color: ${props => props?.color};
  font-size: 22px;
  padding: 3px;
`
export const StatusDot = ({status}: StatusDotProps): JSX.Element => {
  switch (status) {
    case OperationStatus.UPCOMING:
      return <IconWrapper color={'black'}>&#9679;</IconWrapper>
    case OperationStatus.IN_PROGRESS:
      return <IconWrapper color={'orange'}>&#9679;</IconWrapper>
    case OperationStatus.CONCLUDED:
      return <IconWrapper color={'green'}>&#9679;</IconWrapper>
  }
}
