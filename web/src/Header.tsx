import styled from 'styled-components'
import {Tabs, TopBar} from '@equinor/eds-core-react'
import Icon from './Icons'
import {Link, useLocation} from 'react-router-dom'

const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  > * {
    margin-left: 40px;
  }
`

export default (): JSX.Element => {
  const activeTab = useLocation().pathname.substring(1)
  return (
    <TopBar>
      <TopBar.Header>
        <Icon name="grid_on" size={16} />
        Forecast of Response
      </TopBar.Header>
      <TopBar.CustomContent>
        <Tabs activeTab={1} onChange={() => {}} variant="minWidth">
          <Tabs.List>
            <Link to={'/home'}>
              <Tabs.Tab active={activeTab == 'home'}>Home</Tabs.Tab>
            </Link>
            <Link to={'/library'}>
              <Tabs.Tab active={activeTab == 'library'}>Library</Tabs.Tab>
            </Link>
            <Link to={'/operations'}>
              <Tabs.Tab active={activeTab == 'operations'}>Operations</Tabs.Tab>
            </Link>
          </Tabs.List>
        </Tabs>
      </TopBar.CustomContent>
      <TopBar.Actions>
        <Icons>
          <Icon name="account_circle" size={16} title="user" />
          <Icon name="accessible" size={16} />
          <Icon name="notifications" size={16} />
          <Icon name="fullscreen" size={16} />
        </Icons>
      </TopBar.Actions>
    </TopBar>
  )
}
