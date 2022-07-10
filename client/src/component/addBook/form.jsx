import React from 'react'
import { Box, TextField, TextareaAutosize } from '@mui/material'
import { Row, Col, Form,  Button } from "react-bootstrap" 
import pin from '../../assets/img/pin.svg'
import book from '../../assets/img/add-book-.svg'

function form() {
  return (
    <div>
        <div className="h1" style={{marginLeft : "1%", marginRight : "1%"}}>
            <h3>Add Book</h3>
        </div>

        <form action="">
                    <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                
                >
                <TextField id="outlined-basic" label="Title" variant="outlined" style={{width : "96%"}}/>

                <TextField id="outlined-basic" label="Date" variant="outlined" style={{width : "96%"}}/>

                <TextField id="outlined-basic" label="Pages" variant="outlined" style={{width : "96%"}}/>

                <TextField id="outlined-basic" label="ISBN" variant="outlined" style={{width : "96%"}}/>

                <TextField id="outlined-basic" label="Price" variant="outlined" style={{width : "96%"}}/>

                <textarea style={{width : "96%", height : "200px", resize : "none"}} placeholder="About This Book"></textarea>
                </Box>

                <Col>
                <input
                    type="file"
                    id="upload"
                    name="image"
                    hidden
                />
                <label for="upload" className="label-file-add-book mt-4">
                    Attach Book Image <img src={pin} style={{ marginBottom: '2px', marginLeft: '2px', width: '10%' }} alt="" />
                </label>
            </Col>
            <Col>
                <input
                    type="file"
                    id="upload"
                    name="file"
                    hidden
                />
                <label for="upload" className="label-file-add-book mt-4" >
                    Attach Book File <img src={pin} style={{ marginBottom: '2px', marginLeft: '2px', width: '10%' }} alt="" />
                </label>
            </Col>
            <div className="justify-content-end d-flex">
                <Button variant="dark" style={{ borderRadius: 0, width: '10%', alignItems: 'center', marginBottom: '10px', marginRight: '50px', marginTop:'50px' }}> Add Cart <img src={book} style={{ marginBottom: '2px', marginLeft: '2px'  }} alt="" /></Button>
            </div>
       
        </form>
    </div>
  )
}

export default form