import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*States of the various pieces of user information here */}
    {/* One component for the form.  Each input on the form should edit the state of the specific information */}
    {/* One component for the displayed CV.  This component should have each part of its info displayed VIA the states. */}
    <h1>Yes</h1>

    <App />
  </StrictMode>
);
