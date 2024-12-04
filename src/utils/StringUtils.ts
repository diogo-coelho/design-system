export const formatNumberToMonetaryValueString = (number: number): string => {
  const integer = number | 0
  return `R$ ${integer.toString()},00`
}

export const isEmpty = (value: string): boolean => {
  return value.trim().length === 0
}

export const isEmail = (value: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(value)
}
