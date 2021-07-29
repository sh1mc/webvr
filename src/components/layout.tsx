import Helmet from 'react-helmet'
import styled from 'styled-components'
import React from 'react'

const Layout: React.FC = ({ children }) => {
	return (
		<>
		<Root>
			<Helmet>
			  <title>Create Next App</title>
			  <link rel="icon" href="/favicon.ico" />
			</Helmet>
			<Main>
				{children}
			</Main>
		</Root>
		</>
	)
}

export default Layout

const Root = styled.div`
	min-height: 100vh;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Main = styled.main`
	padding: 5rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Footer = styled.footer`
	width: 100%;
	height: 100px;
	border-top: 1px solid #eaeaea;
	display: flex;
	justify-content: center;
	align-items: center;
`
