import { IUser } from './IUser'

export interface ITask {
  id?:	number
  title?:	string
  description?:	string
  dueDate?:	Date
  isCompleted?:	boolean
  userId?:	string
  state?: string
  user?: IUser
}
