import React from 'react'
import { useState} from "react";
import { db } from "../utils/init-firebase"
import { addDoc, collection } from "firebase/firestore"
import { Card } from '../components/Card'
import {
    Button,
    Center,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
    Select,
  } from '@chakra-ui/react'

export default function Addmodsform() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [newCountry, setNewCountry] = useState(0);
    const usersCollectionRef = collection(db, "Users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { 
            name: newName, 
            age: Number(newAge),
            Country: newCountry
        });
      };
    return (
<div className='App'>
            <Card maxW='md' mx='auto' mt={4}>
            <chakra.form>
            <FormControl isRequired>
            <FormLabel htmlFor='name'>First name</FormLabel>
            <Input 
            type='text' 
            placeholder='name' 
            onChange={(event) => {
                setNewName(event.target.value)
            }}
                />
                </FormControl>
            <FormLabel htmlFor='name'>First name</FormLabel>
            <Input 
            type='number' 
            placeholder='Vender'
            onChange={(event) => {
                setNewAge(event.target.value)
            }}
            />
            <FormControl>
            <FormLabel htmlFor='country'>Country</FormLabel>
            <Select id='country' placeholder='Select country'>
            onChange={(event) => {
                setNewCountry(event.target.value)
            }}
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
            </Select>          
            </FormControl>
            <Button onClick={createUser}>Create</Button>
            </chakra.form>
            </Card>
        </div>
    )
}


