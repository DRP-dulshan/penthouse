import { contact } from '@/data/property';
import WhatsAppIcon from './WhatsAppIcon';

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
  /** Adds the WhatsApp glyph before the label. */
  withIcon?: boolean;
};

/**
 * The page's single conversion action. Opens WhatsApp with the enquiry
 * pre-written so a warm lead only has to press send.
 */
export default function WhatsAppButton({
  children,
  className = 'btn-primary',
  withIcon = true,
}: WhatsAppButtonProps) {
  return (
    <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {withIcon ? <WhatsAppIcon /> : null}
      {children}
    </a>
  );
}
