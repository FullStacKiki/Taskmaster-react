import React from 'react'
import Bar from "@/Components/Bar.jsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Button } from "../Components/ui/button";
import { InteractiveGridPattern } from '@/Components/ui/interactive-grid-pattern'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
const Setting = () => {
  return (
    <div>
        <InteractiveGridPattern className="opacity-30 -z-50"/>
        <Card className="min-w-[300px] w-1/2 mx-auto mt-20 radius-sm bg-gray-100 border-1 shadow-xl">
        <CardHeader>
            <CardTitle className="font-body text-2xl align-center text-zinc-950"><Link to="/"><ArrowBackIcon className='mr-2 text-bold'/></Link>Settings</CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
        </Card>    
    </div>
  )
}

export default Setting
