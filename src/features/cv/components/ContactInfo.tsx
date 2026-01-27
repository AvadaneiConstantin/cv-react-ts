/**
 * ContactInfo Component - Contact information with copy functionality
 *
 * Key Dependencies:
 * - cvData: Centralized CV data source
 * - useState: Local state for clipboard functionality
 *
 * Core Functionality:
 * - Displays contact information with interactive elements
 * - Copy-to-clipboard functionality with visual feedback
 * - External links for social profiles
 * - Responsive design optimized for mobile
 * - Interactive hover states and transitions
 */
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Copy, Check } from "lucide-react";
import { cvData } from "../data";

export const ContactInfo = () => {
  const { profile } = cvData;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, itemLabel: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemLabel);

      // Reset after 2 seconds
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        setCopiedItem(itemLabel);
        setTimeout(() => setCopiedItem(null), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy text: ", fallbackErr);
      }

      document.body.removeChild(textArea);
    }
  };

  const ContactItem = ({
    icon: Icon,
    label,
    value,
    copyValue,
    isLink = false,
    href,
  }: {
    icon: any;
    label: string;
    value: string;
    copyValue?: string;
    isLink?: boolean;
    href?: string;
  }) => {
    const handleCopy = () => {
      copyToClipboard(copyValue || value, label);
    };

    const content = (
      <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/30 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">{label}</p>
            <p className="text-sm text-slate-300 font-medium">{value}</p>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          title={`Copy ${label}`}
        >
          {copiedItem === label ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-slate-400" />
          )}
        </button>
      </div>
    );

    if (isLink && href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
          <span className="text-cyan-400 text-sm">📞</span>
        </div>
        Contact Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactItem
          icon={Mail}
          label="Email"
          value={profile.email!}
          copyValue={profile.email!}
        />
        <ContactItem
          icon={Phone}
          label="Phone"
          value={profile.phone!}
          copyValue={profile.phone!}
        />
        <ContactItem
          icon={MapPin}
          label="Location"
          value={profile.location!}
          copyValue={profile.location!}
        />
        <ContactItem
          icon={Linkedin}
          label="LinkedIn"
          value="linkedin.com/in/constantin-avadanei"
          copyValue={profile.linkedin!}
          isLink={true}
          href={profile.linkedin!}
        />
      </div>
    </section>
  );
};
