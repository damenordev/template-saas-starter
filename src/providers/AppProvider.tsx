export interface IAppProvider {
  children: React.ReactNode
}

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return <>{children}</>
}
