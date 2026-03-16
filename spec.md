# RGMCET Admissions Landing Page

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full single-page admissions landing site for Rajeev Gandhi Memorial College of Engineering and Technology (RGMCET), Nandyal, Andhra Pradesh
- Sticky navigation bar with smooth-scroll links to all sections
- Hero section: college name, tagline, hero image, CTA buttons (Apply Now, Explore Programs)
- Stats/achievements bar: established year, students enrolled, placement %, faculty count, NAAC accreditation
- Programs section: B.Tech (CSE, ECE, EEE, ME, CE, IT), M.Tech, MCA, MBA, Ph.D — cards with descriptions
- Why Choose RGMCET: infrastructure, placements, faculty, research highlights with icons
- Testimonials section: student/alumni quotes
- Admissions Enquiry Form: Full Name, Email, Phone, City/State, Program of Interest (dropdown), Specialization, Year of Passing, Submit
- Footer: contact info, address, phone, email, affiliated university (JNTUA), social links
- Floating "Apply Now" button
- Fade-in scroll animations, hover effects
- Responsive design (mobile + desktop)
- Backend storage for enquiry form submissions

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Select no special components (enquiry submissions stored directly in Motoko stable storage)
2. Generate Motoko backend with EnquirySubmission data type and submitEnquiry / getEnquiries functions
3. Build React frontend:
   - index.css with OKLCH color tokens (deep navy blue, maroon/crimson, gold/amber)
   - Navbar component with smooth scroll
   - HeroSection with animated headline and CTAs
   - StatsBar with animated counters
   - ProgramsSection with program cards
   - WhyChooseSection with feature tiles
   - TestimonialsSection
   - EnquiryForm wired to backend submitEnquiry
   - Footer with college contact details
   - FloatingApplyButton
4. Validate and deploy
