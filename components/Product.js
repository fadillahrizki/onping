import Image from 'next/image';
import { Fragment } from 'react';
import Poco from '../public/UAS-Assets/Elektronik/Poco.jpg'
import Smart from '../public/UAS-Assets/Elektronik/Smart.png'
import MITV from '../public/UAS-Assets/Elektronik/MITV.png'
import Samsung from '../public/UAS-Assets/Elektronik/samsung.png'
import Redmi from '../public/UAS-Assets/Elektronik/Redmi.png'

export default function Product(props){
    return(
        <Fragment>
            <Image src={MITV} alt="11t" width="386" height="343" />
            <Image src={Redmi} alt="11t" width="386" height="343" />
            <Image src={Poco} alt="11t" width="386" height="343" />
            <Image src={Smart} alt="11t" width="386" height="343" />
            <Image src={Samsung} alt="11t" width="386" height="343" />
        </Fragment>
    )
}