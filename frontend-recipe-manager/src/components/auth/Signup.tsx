import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SignupForm } from "@/components/auth/SignupForm";

export default function Signup() {
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="absolute top-0 w-screen flex items-center justify-between p-4">
          <a href="/">
            <div className="font-extrabold cursor-pointer">DZ FLAVOR</div>
          </a>
          <a href="/login" className={cn(buttonVariants())}>
            Login
          </a>
        </div>
        <div className="lg:p-8  ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <SignupForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service{" "}
              </a>
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
