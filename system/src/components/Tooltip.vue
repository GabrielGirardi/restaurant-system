<script setup>
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from "radix-vue"
import { Icon } from "@iconify/vue"
import "./style/css/tooltip.css"

</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger
        class="IconButton"
      >
        <Icon icon="radix-icons:arrow-right" width="14"/>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          as-child
          class="TooltipContent"
          :side-offset="5"
        >
          <ul>
            <TooltipArrow class="TooltipArrow" size="8" />
          </ul>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>