import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"

export function DialogDemo() {

  return (
    <Dialog id='dialog' className="font-body">
      <DialogTrigger asChild className="grid place-items-center">
        <Button variant="default" className="mt-4 mx-auto place-content-center justify-center w-[200px] font-body">Get Started</Button>
      </DialogTrigger>
      <DialogContent className="w-[350px] sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle className="font-body">Get Started</DialogTitle>
          <DialogDescription className="font-body">
            Fill out this form to create your account and join our community.
          </DialogDescription>
        </DialogHeader >
        <div className="grid gap-4 py-4">
          <div className="items-center gap-4 font-body">
            <Label htmlFor="name" className="text-left  mb-2 block">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="yourmail@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 font-body">
            <Label htmlFor="username" className="block text-left mb-2">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@Your Name"
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 font-body">
            <Label htmlFor="username" className="block text-left mb-2">
              Password
            </Label>
            <Input
              id="username"
              defaultValue="Your password"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogClose>
          <Button className="w-[300px] font-body" id="submit-btn" type="submit">Create</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
