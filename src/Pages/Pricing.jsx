
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
const Pricing = () => {
  return (
    <>
    <InteractiveGridPattern   className="opacity-30 -z-50"/>
      <Bar/>
    <div className="mt-24"> 
      <h1 className="text-center mb-5 font-body font-medium text-xl">Choose Plan</h1>     
      <Card className="min-w-[300px] w-1/2 mx-auto">
        <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>Free Account Plan</CardDescription>
        </CardHeader>
        <CardContent>
            <p>
            Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
        </Card>
    </div>
    </>
  )
}

export default Pricing
