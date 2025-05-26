import React from 'react';
import { Navigation } from '@/components/Navigation';
import Registration from '@/components/Registration';
import '../registrations/registrations.css';

export default function Home() {
  return (
    <div className="homeContainer">
      <Navigation />
      <div className="registration">
        <Registration />
      </div>
    </div>
  );
}