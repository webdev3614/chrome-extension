import { ReactNode } from 'react'
import AuthProvider from './context/auth-provider/provider'
import SettingsProvider from './context/settings-provider/provider'
import I18nProvider from './context/i18n-provider/provider'
import { ToastContainer } from 'react-toastify'

function App({children}:{children:ReactNode}) {
  return (
    <AuthProvider>
      <SettingsProvider>
        <I18nProvider>
        {
          children
        }
        <ToastContainer/>
        </I18nProvider>
      </SettingsProvider>
    </AuthProvider>
  )
}

export default App
