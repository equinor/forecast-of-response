import {
  Button,
  Label,
  Search,
  SingleSelect,
  Table,
  Typography,
} from '@equinor/eds-core-react'
import {useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  CenterWrapper,
  FlexWrapper,
  GroupWrapper,
  PageWrapper,
} from '../components/Wrappers'
import {StatusDot} from '../components/Other'
import {forAPI} from '../services/forApi'
import {TOperation} from '../Types'
import {OperationStatus} from '../Enums'

export default (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date())
  const [operations, setOperations] = useState<TOperation[]>([])
  const local = 'en-GB'
  // const local = window.navigator.language

  useEffect(() => {
    forAPI.getAllOperations().then(result => {
      setOperations(result.data)
    })
  }, [])
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
          items={Object.values(OperationStatus)}
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
              operations.map(operation => (
                <Table.Row>
                  <Table.Cell>{operation.name}</Table.Cell>
                  <Table.Cell>
                    {new Date(operation.start).toLocaleString(local)}
                  </Table.Cell>
                  <Table.Cell>
                    {new Date(operation.end).toLocaleString(local)}
                  </Table.Cell>
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
