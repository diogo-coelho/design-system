export interface AccountProps {
  userId: string
  currentValue: number
}

export interface StatementType {
  title: string
  value: number
  date: Date
}

export interface StatementProps extends AccountProps {
  statement: StatementType[]
}
