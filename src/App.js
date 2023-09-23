import { colorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from 'react-router-dom'
import Topbar from './scene/global/Topbar';
import Sidebar from './scene/global/Sidebar'
import Dasboard from './scene/dashboard'
import Dasboard from './scene/dashboard'
import Dasboard from './scene/dashboard'
import Dasboard from './scene/dashboard'
import Dasboard from './scene/dashboard'


function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <Topbar />
          </main>
        </div>
        ;
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
