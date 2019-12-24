import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ContainBuilder from './containers/ContainBuilder/ContainBuilder';


function App() {
  return (
   <div>
       <Layout>
         <ContainBuilder />
       </Layout>
   </div>
  );
}

export default App;
