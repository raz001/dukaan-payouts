import React from 'react'
import Header from './Header'
import Overview from './Overview'
import Transaction from './Transaction';

const Payouts = () => {
  return (
    <section class="payouts">
        <Header />
        <Overview />
        <Transaction />
    </section>
  )
}

export default Payouts