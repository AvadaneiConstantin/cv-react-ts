/**
 * CVView Component - Main CV content orchestrator
 *
 * Key Dependencies:
 * - CVHeader: Profile information and contact details
 * - Experience: Professional experience timeline
 * - Skills: Technical and soft skills display
 * - Education: Academic background and languages
 *
 * Core Functionality:
 * - Orchestrates all CV components in sequential layout
 * - Provides consistent spacing and typography
 * - Responsive design with mobile optimization
 * - Central container for CV content display
 * - Maintains visual hierarchy and flow
 */
import { CVHeader } from "./components/CVHeader";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";

export const CVView = () => {
  return (
    <div className="max-w-[800px] mx-auto pb-20 space-y-16 font-sans">
      <CVHeader />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
};

export default CVView;
