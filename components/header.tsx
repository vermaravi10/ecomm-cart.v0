"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const { dispatch, totalItems } = useCart()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary">PagePilot</h1>
          <span className="text-sm text-muted-foreground">Demo Store</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="relative bg-transparent"
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
          aria-label={`Shopping cart with ${totalItems} items`}
        >
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  )
}
