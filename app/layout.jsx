import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';


export const metadata ={
    title: "Promptopia",
    description : 'Discover & Share AI Propmpts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
{/* test app */}
            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
 
  )
}
export default RootLayout;