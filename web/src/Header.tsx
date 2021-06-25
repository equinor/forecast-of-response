import styled from 'styled-components'
import {Tabs, TopBar} from '@equinor/eds-core-react'
import Icon from './Icons'

export default (): JSX.Element => {
  const Icons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    > * {
      margin-left: 40px;
    }
  `

  return (
    <TopBar>
      <TopBar.Header>
        <Icon name="grid_on" size={16} />
        Forecast of Response
      </TopBar.Header>
      <TopBar.CustomContent>
        <Tabs activeTab={1} onChange={() => {}} variant="minWidth">
          <Tabs.List>
            <Tabs.Tab>Home</Tabs.Tab>
            <Tabs.Tab>Library</Tabs.Tab>
            <Tabs.Tab>Operations</Tabs.Tab>
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
