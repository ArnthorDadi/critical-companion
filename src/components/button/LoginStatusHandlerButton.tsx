import { signIn, signOut, useSession } from "next-auth/react";
import { Button, ButtonProps } from "@/components/button/index";
import { cn } from "@/utils/utility";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const LoginStatusHandlerButton = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  const { data: sessionData, update } = useSession();
  const route = useRouter();

  const defaultChildren = sessionData ? "Sign out" : "Sign in";

  const onClick = useCallback(async () => {
    if (sessionData) {
      await signOut();
    } else {
      await signIn();
    }
  }, [sessionData]);

  return (
    <Button className={cn(className, "w-full")} onClick={onClick} {...props}>
      {children ? children : defaultChildren}
    </Button>
  );
};
