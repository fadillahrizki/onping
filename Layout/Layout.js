import React, { Fragment } from 'react'
import Header from '../components/Header'

export default function Layout ({children}){
    return(
        <Fragment>
            <Header/>
            <div>
                {children}
            </div>
        </Fragment>
    )

}