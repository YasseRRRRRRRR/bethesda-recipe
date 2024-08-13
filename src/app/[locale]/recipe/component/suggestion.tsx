import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus, SendHorizontal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const SuggestionModal = ({ suggestion }: { suggestion: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="flex items-center justify-center space-x-2 hover:bg-opacity-80"
        >
          {suggestion} <Plus className="size-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] px-4 py-6 space-y-4">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg font-semibold">
            Add Suggestion
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Make sure to add as much info as you can to let us have a better
            idea, keep in mind it has to be lore friendly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="col-span-1 text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="col-span-1 text-right">
              Description
            </Label>
            <Textarea
              id="description"
              className="col-span-3 border border-gray-300 rounded-md resize-y min-h-[100px]"
              placeholder="Write the description here..."
              rows={4}
            />
          </div>
        </div>
        <DialogFooter className="flex justify-end space-x-4">
          <Button type="button">
            Send
            <SendHorizontal className="size-4 ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestionModal;
