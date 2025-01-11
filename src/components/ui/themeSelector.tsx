"use client";

import { LaptopIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function ModeDropdown({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn("bg-background/5", className)}
          size="icon"
        >
          <Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ModeSelector({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <TooltipProvider>
      <RadioGroup
        value={theme}
        defaultValue="system"
        className={cn(
          "flex gap-0 rounded-3xl border bg-background/65 backdrop-blur-2xl",
          className
        )}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Label
              htmlFor="light"
              className="flex flex-col items-center justify-between rounded-full bg-popover p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:bg-accent"
              onClick={() => setTheme("light")}
            >
              <RadioGroupItem
                value="light"
                id="light"
                className="sr-only"
                aria-label="light theme"
              />
              <Sun className={cn("size-4", iconClassName)} />
            </Label>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs" showArrow={true}>
            <p>Light</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Label
              htmlFor="dark"
              className="flex flex-col items-center justify-between rounded-full bg-popover p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:bg-accent"
              onClick={() => setTheme("dark")}
            >
              <RadioGroupItem
                value="dark"
                id="dark"
                className="sr-only"
                aria-label="dark theme"
              />
              <Moon className={cn("size-4", iconClassName)} />
            </Label>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs" showArrow={true}>
            <p>Dark</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Label
              htmlFor="system"
              className="flex items-center justify-between rounded-full bg-popover flex-col p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:bg-accent"
              onClick={() => setTheme("system")}
            >
              <RadioGroupItem
                value="system"
                id="system"
                className="sr-only"
                aria-label="system theme"
              />
              <LaptopIcon className={cn("size-4", iconClassName)} />
            </Label>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs" showArrow={true}>
            <p>System</p>
          </TooltipContent>
        </Tooltip>
      </RadioGroup>
    </TooltipProvider>
  );
}
