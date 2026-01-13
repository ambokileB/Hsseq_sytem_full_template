import { useState ,useEffect } from 'react'

import { DefaultDashboard } from './pages'
import { PrimeReactProvider } from 'primereact/api';
import { TopProgressBar ,ScrollTop} from './components';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading data
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <PrimeReactProvider>
      <TopProgressBar loading={loading} />
       <ScrollTop>
     
       <DefaultDashboard/>
       
       </ScrollTop>
    </PrimeReactProvider>
  )
}

export default App