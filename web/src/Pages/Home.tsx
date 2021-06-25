import {
  Button,
  Label,
  Search,
  SingleSelect,
  Table,
  Typography,
} from '@equinor/eds-core-react'
import {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  CenterWrapper,
  FlexWrapper,
  GroupWrapper,
  PageWrapper,
} from '../Components/Wrappers'
import {StatusDot} from '../Components/Other'

export default (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date())
  const [operations, setOperations] = useState<any>({
    'Gullfaks new mooring': {
      from: '02.07.2021',
      to: '05.08.2021',
      location: 'Gullfaks',
      creator: 'Timothy',
      status: 'Concluded',
    },
    'Sverdrup anchor': {
      from: '31.01.2022',
      to: '05.08.2025',
      location: 'Johan Sverdrup',
      creator: 'Rune',
      status: 'Upcoming',
    },
  })

  return (
    <PageWrapper>
      <Typography variant="h2">Home</Typography>
      <Button onClick={() => {}}>Create new operation</Button>
      <FlexWrapper>
        <div style={{width: '450px'}}>
          <Search
            placeholder="Search..."
            onChange={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          />
        </div>

        <GroupWrapper>
          <Label label="From:" />
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </GroupWrapper>
        <GroupWrapper>
          <Label label="To:" />
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </GroupWrapper>
        <SingleSelect
          label="Status"
          initialSelectedItem="In progress"
          items={['In progress', 'Upcoming', 'Concluded']}
        />
      </FlexWrapper>
      <CenterWrapper>
        <Table density="comfortable">
          <Table.Head>
            <Table.Row>
              <Table.Cell>Operation name</Table.Cell>
              <Table.Cell>Date from</Table.Cell>
              <Table.Cell>Date to</Table.Cell>
              <Table.Cell>Location</Table.Cell>
              <Table.Cell>Creator</Table.Cell>
              <Table.Cell>Status</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {operations &&
              Object.entries(operations).map(([name, operation]: any) => (
                <Table.Row>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{operation.from}</Table.Cell>
                  <Table.Cell>{operation.to}</Table.Cell>
                  <Table.Cell>{operation.location}</Table.Cell>
                  <Table.Cell>{operation.creator}</Table.Cell>
                  <Table.Cell>
                    {<StatusDot status={operation.status} />}
                    {operation.status}
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </CenterWrapper>
    </PageWrapper>
  )
}
