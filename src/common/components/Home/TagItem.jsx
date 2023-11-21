import React from 'react'
import { Typography ,Box} from '@mui/material'
import {styled} from '@mui/material/styles'


const TagItem = ({title,name}) => {
  return (
    <TagItemBox>
        <Typography variant='fontSize400'>{title}</Typography>
        <Typography variant='fontSize12' sx={{textAlign:'center'}}>{name}</Typography>
    </TagItemBox>
  )
}

const TagItemBox = styled(Box)({
    border:"1px solid rgb(235, 235, 235)",
    borderRadius:"4px",
    borderWidth: "2px",
    borderColor: "rgb(235, 235, 235)",
    padding: "8px",
    margin: "4px",
    minHeight: "46px",
    minWidth: "106px",
    width:'150px',
    display:'flex',
    flexDirection:'column'
})

export default TagItem