interface loginProps {
  email?: string
  password?: string
  onLoginSuccess?: () => void
  onCancel?: () => void
}
interface registerProps {
  first_name?: string
  last_name?: string
  email?: string
  password?: string
  password_confirm?: string
  onLoginSuccess?: () => void
  onCancel?: () => void
}

export type { 
  loginProps,
  registerProps
};