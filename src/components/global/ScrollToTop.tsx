import React, { FC, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectRouterState } from '../../stateManagement/router/routerSelectors'

const ScrollToTop: FC = ({ children }) => {
  const { location: { pathname } } = useSelector(selectRouterState)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}

export default ScrollToTop
