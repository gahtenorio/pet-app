import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Dashboard from './src/pages/Dashboard';

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor='#D3E5DB' />
      <Dashboard />
    </>
  );
}