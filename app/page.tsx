"use client";
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Modal } from '@mantine/core'
export default function Home() {

  const [todo, setTodo] = useState("")
  const [array, setArray] = useState<string[]>([])
  const [edit, setEdit] = useState(false)
  const [modal, setModal] = useState(false)
  const [open, setOpen] = useState(false)


  const handleChange = (e: any) => {
    setTodo(e.target.value)
  }

  const handleSave = () => {
    setArray([...array, todo])
  }

  const handleDelete = (index: number) => {
    const deleteIndex = [...array]
    deleteIndex.splice(index, 1)
    setArray(deleteIndex)
  }

  const handleEdit = () => {

  }

  const handleOpen = () => {
    setModal(true)
  }
  const handleClose = () => {
    setModal(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="pt-10">
     
        <div className="grid grid-cols-2 gap-5 p-5 bg-white rounded-md shadow-md">
          <div className="border-r-[1px] border-gray-400 p-5">
            <div className='flex  flex-col mt-1'>

              <TextField
                type='text'
                variant='outlined'
                label='New To Do'
                onChange={handleChange}
              />
              <div className='pt-5'>

                <Button
                  color='primary'
                  variant='outlined'
                  onClick={handleSave}
                >
                  Save
                </Button>
              </div>
            </div>

          </div>
          <div className=" p-5">
            <div className='text-center font-semibold p-2 bg-slate-100 rounded-md mb-1'>
              List of To Dos
            </div>
            <table className='table-fixed w-full border-collapse'>
              <thead >
                <tr className='border-gray-400 border-collapse'>
                  <th className='border-gray-400 '>
                    To Dos
                  </th>
                  <th className='border-gray-400 border-collapse'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {array.map((item, index) => (
                  <tr key={index}>

                    <p>{item}</p>

                    <td>
                      <div className='flex justify-center gap-5'>
                        <Button

                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => {
                            handleDelete(index)
                          }}
                        >
                          Delete
                        </Button>
                      </div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
      <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            opened={modal}
             onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
           OPENED
          </Modal>

        </div>
    </div>


  )
}
