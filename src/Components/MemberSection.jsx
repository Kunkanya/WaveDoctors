import React from 'react'
import { Grid } from '@mui/material'
import Datas from "../asset/data.json";
import Btn from './Btn'
import {FaInstagram} from 'react-icons/fa'
//import Logo from '../asset/logo/logowhite.png'
import '../Style/Footer.scss'
const MemberSection = () => {
    const Logo ="asset/logo/logowhite.png"
    return (
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <Btn text="Devenir membre" link={Datas.memberLink} />
        <Btn text="Faire un don" link={Datas.donateLink} />
      </Grid>
    )
}

export default MemberSection
