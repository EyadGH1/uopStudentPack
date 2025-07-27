import React from 'react'
import GpaCalculator from '@/components/GPACalc';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const GPA = () => {
  return (
    <div>
        <Header />
            <GpaCalculator />
        <Footer />
    </div>
  )
}

export default GPA