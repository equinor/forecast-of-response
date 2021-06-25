import {OperationStatus} from './Enums'

export type TOperation = {
  id: number
  name: string
  creator: string
  start: Date
  end: Date
  status: OperationStatus
  location: string
  grid?: string
}
