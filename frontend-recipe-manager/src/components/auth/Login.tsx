import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LoginForm } from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <div className=" relative min-h-screen  items-center justify-center grid ">
      <div className="absolute top-0 left-0 w-screen flex  items-center justify-between p-4">
        <a href="/">
          <div className="font-extrabold cursor-pointer">DZ FLAVOR</div>
        </a>
        <a href="/signup" className={cn(buttonVariants())}>
          Signup
        </a>
      </div>
      <div className="lg:p-8  pt-20 md:pt-0 px-10 md:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to Login to your account
            </p>
          </div>
          <LoginForm />
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
  );
}
