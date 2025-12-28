import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-[hsl(142,70%,45%)] text-white 
               shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-card text-foreground text-sm font-medium
                     opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
