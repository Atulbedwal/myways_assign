"use client";
import React, { useState } from "react";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter, AlertDialogAction } from "../../components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // Import the close (X) icon

const End = () => {
  const [showDialog, setShowDialog] = useState(true); // Show dialog initially
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null); // Track selected emoji

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji); // Set selected emoji
  };

  const handleCloseDialog = () => {
    setShowDialog(false); // Close dialog
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen px-6 lg:px-16">
      <div className="flex justify-center">
        <span className="text-xl">Test Completed Successfully 🎉</span>
      </div>

      {showDialog && (
        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
          <AlertDialogTrigger asChild>
            {/* Invisible trigger for the dialog */}
            <div className="hidden" />
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-gray-800 text-white w-[90%] max-w-md p-6 rounded-lg justify-center">
            {/* Close Button */}
            <button
              onClick={handleCloseDialog}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <AlertDialogHeader>
              <AlertDialogTitle className="text-center">Please rate your experience</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="flex justify-center gap-4 my-4">
              {/* Emoji buttons */}
              {["😡", "🙁", "😐", "🙂", "😄"].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleEmojiClick(emoji)}
                  className={`text-3xl ${
                    selectedEmoji === emoji ? "ring-2 ring-[#4F33CC]" : ""
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <AlertDialogFooter>
              <AlertDialogAction asChild>
                <Button
                  onClick={handleCloseDialog}
                  className="bg-[#6C60F4] hover:bg-[#4F33CC] text-white w-full"
                >
                  Submit
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default End;
