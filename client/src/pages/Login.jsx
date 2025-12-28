import { useState } from "react"
import { LogIn, UserPlus, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Login = () => {
  const [signupInput, setSignupInput] = useState({name:"",email:"", password:""});
  const [loginInput, setLoginInput] = useState({email:"", password:""});
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showLoginPassword, setShowLoginPassword] = useState(false)

  const changeInputHnadler = (e)=>{
    const {name, value} = e.target;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <Tabs defaultValue="signup" className="w-full max-w-md">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        {/* ---------------- SIGNUP ---------------- */}
        <TabsContent value="signup">
          <Card className="rounded-2xl shadow-xl border border-slate-700">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <UserPlus className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Create Account</CardTitle>
              <CardDescription>
                Sign up to get started
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label>Name</Label>
                <Input placeholder="John Doe" required />
              </div>

              <div className="space-y-1">
                <Label>Email</Label>
                <Input type="email" placeholder="john@email.com" required />
              </div>

              <div className="space-y-1">
                <Label>Password</Label>
                <div className="relative">
                  <Input
                    type={showSignupPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowSignupPassword(!showSignupPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showSignupPassword ? (
                      <Eye size={18} />
                    ) : (
                      <EyeOff size={18} />
                    )}
                  </button>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full rounded-xl">
                Create Account
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* ---------------- LOGIN ---------------- */}
        <TabsContent value="login">
          <Card className="rounded-2xl shadow-xl border border-slate-700">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LogIn className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Login to your account
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label>Email</Label>
                <Input type="email" placeholder="john@email.com" required />
              </div>

              <div className="space-y-1">
                <Label>Password</Label>
                <div className="relative">
                  <Input
                    type={showLoginPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowLoginPassword(!showLoginPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showLoginPassword ? (
                      <Eye size={18} />
                    ) : (
                      <EyeOff size={18} />
                    )}
                  </button>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full rounded-xl">
                Login
              </Button>
              <span className="text-xs text-muted-foreground">
                Forgot password?
              </span>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Login
