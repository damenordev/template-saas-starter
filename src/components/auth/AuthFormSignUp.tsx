import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'

export const AuthFormSignUp = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 max-w-sm w-full mx-auto">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="********" required />
        </div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </div>
    </form>
  )
}
