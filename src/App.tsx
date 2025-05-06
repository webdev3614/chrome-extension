import { ReactNode } from 'react'
import './App.css'
import {  Stack } from '@mui/material'

function App({children}:{children:ReactNode}) {
  return (
    <Stack>
      {
        children
      }
    </Stack>
  )
}

export default App
