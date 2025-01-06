
import Bar from "@/Components/Bar"
import { InteractiveGridPattern } from '@/Components/ui/interactive-grid-pattern'
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
const Pricing = () => {
  return (
    <>
    <InteractiveGridPattern   className="opacity-30 -z-50"/>
      <Bar/>
    <div className="mt-24"> 
      <h1 className="text-center mb-5 font-body font-medium text-2xl">Choose Plan</h1>     
      <Card className="min-w-[300px] w-1/2 mx-auto border-2 border-blue-500">
        <CardHeader>
            <CardTitle className="font-body text-xl">Basic Subscriptions</CardTitle>
            <CardDescription className="font-body">Free Account Plan</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-xs font-body mt-[-10px] p-2">
            <CheckRoundedIcon className="text-cyan-500 mr-2"/>View daily, weekly, and monthly calendar.</p>
            <p className="text-xs font-body mt-2 p-2">
            <CheckRoundedIcon className="text-cyan-500 mr-2"/>Create events with date, time, and description.</p>
            <p className="text-xs font-body mt-2 p-2">
            <CheckRoundedIcon className="text-cyan-500 mr-2"/>Basic reminder notifications <br/> (15 minutes before the event).</p>
            <p className="text-xs font-body mt-2 p-2">
            <CheckRoundedIcon className="text-cyan-500 mr-2"/>Light/Dark theme customization.</p>
        </CardContent>
        <CardFooter>
            <Button className="border font-body w-1/2 mx-auto shadow-md text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Free</Button>
        </CardFooter>
        </Card>
        <Card className="min-w-[300px] w-1/2 mx-auto mt-10 border-2 border-violet-500">
        <CardHeader>
            <CardTitle className="font-body text-xl">Premium Subscriptions</CardTitle>
            <CardDescription className="font-body">Premium Account Plan</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-xs font-body mt-[-10px] p-2">
            <CheckRoundedIcon className="text-violet-500 mr-2"/>Everything from Basic plan.</p>
            <p className="text-xs font-body mt-2 p-2">
            <CheckRoundedIcon className="text-violet-500 mr-2"/>More calendar customization options (colors, themes).</p>
            <p className="text-xs font-body mt-2 p-2">
            <CheckRoundedIcon className="text-violet-500 mr-2"/> Add collaborators to events.</p>
            <p className="text-xs font-body mt-2 p-2">
            <CheckRoundedIcon className="text-violet-500 mr-2"/>Advanced notifications (custom reminders via email).
</p>
        </CardContent>
        <CardFooter>
            <Button className="border font-body w-1/2 mx-auto shadow-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">$4/month</Button>
        </CardFooter>
        </Card>
        
        <Card className="min-w-[300px] w-1/2 mx-auto mt-10 border-2 border-green-500">
        <CardHeader>
            <CardTitle className="font-body text-xl">Pro Subscriptions</CardTitle>
            <CardDescription className="font-body">Pro Account Plan</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-xs font-body mt-[-10px] p-2">
            <CheckRoundedIcon className="text-emerald-500 mr-2"/>Everything from Premium plan.</p>
            <p className="text-xs font-body mt-2 p-2">
            <CheckRoundedIcon className="text-emerald-500 mr-2"/>Unlimited calendars.</p>
            <p className="text-xs font-body mt-2 p-2">
            <CheckRoundedIcon className="text-emerald-500 mr-2"/>Priority support and dedicated assistance.</p>

        </CardContent>
        <CardFooter>
            <Button className="border font-body w-1/2 mx-auto shadow-md text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">$9/month</Button>
        </CardFooter>
        </Card>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    </>
  )
}

export default Pricing
