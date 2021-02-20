import styled from 'styled-components'

const Button = styled.button`
  background: '${({ theme }) => theme.colors.apricot}';
  text-transform: uppercase;
  padding: 12px 23px;
  font-size: 14px;
  border-radius: 100px;
`

export default Button
