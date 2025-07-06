# Image Setup Guide

## Overview

The image quiz currently uses placeholder images (`virus1.jpg` and `virus2.jpg`) for demonstration purposes. To use actual COVID-19 related images, follow these steps:

## Required Images

### Reliable Practices (20 images)

Create a folder structure: `public/images/reliable/` and add images for:

1. `mask-wearing.jpg` - People wearing masks properly
2. `social-distancing.jpg` - People maintaining 6ft distance
3. `hand-washing.jpg` - Person washing hands with soap
4. `vaccination.jpg` - Person getting vaccinated
5. `ventilation.jpg` - Well-ventilated indoor space
6. `cleaning-surfaces.jpg` - Person cleaning/disinfecting surfaces
7. `isolating-sick.jpg` - Person staying home when sick
8. `outdoor-activities.jpg` - People doing activities outdoors
9. `healthcare-worker.jpg` - Healthcare worker in PPE
10. `testing.jpg` - Person getting COVID-19 test
11. `elderly-protection.jpg` - Elderly person being protected
12. `contactless-delivery.jpg` - Contactless delivery service
13. `telemedicine.jpg` - Person on video call with doctor
14. `healthy-lifestyle.jpg` - Person exercising/eating healthy
15. `mental-health-support.jpg` - Person seeking mental health help
16. `trusted-sources.jpg` - Official health authority website/news
17. `gradual-reopening.jpg` - Gradual reopening with safety measures
18. `contact-tracing.jpg` - Contact tracing app/process
19. `essential-workers.jpg` - Essential workers with protection
20. `community-support.jpg` - Community helping each other

### Unreliable Practices (20 images)

Create a folder structure: `public/images/unreliable/` and add images for:

1. `no-mask-crowd.jpg` - Crowded indoor space without masks
2. `close-contact.jpg` - People in close physical contact
3. `touching-face.jpg` - Person touching face with unwashed hands
4. `anti-vaccine.jpg` - Anti-vaccine misinformation
5. `enclosed-space.jpg` - Poorly ventilated enclosed space
6. `dirty-surfaces.jpg` - Dirty/contaminated surfaces
7. `going-out-sick.jpg` - Sick person going out in public
8. `indoor-crowd.jpg` - Large indoor crowd without distancing
9. `ignoring-symptoms.jpg` - Person ignoring COVID symptoms
10. `ignoring-test.jpg` - Person refusing to get tested
11. `visiting-elderly-sick.jpg` - Sick person visiting elderly
12. `handshake.jpg` - People shaking hands
13. `emergency-room-crowd.jpg` - Crowded emergency room
14. `unhealthy-habits.jpg` - Unhealthy lifestyle choices
15. `isolation-depression.jpg` - Person struggling with isolation
16. `fake-news.jpg` - Fake news/misinformation
17. `rush-reopening.jpg` - Rushed reopening without precautions
18. `ignoring-tracing.jpg` - Person ignoring contact tracing
19. `non-essential-travel.jpg` - Non-essential travel during pandemic
20. `hoarding.jpg` - Person hoarding supplies

## Image Requirements

### Technical Specifications

- **Format**: JPG or PNG
- **Size**: Recommended 800x600 pixels or larger
- **File size**: Keep under 500KB per image for fast loading
- **Aspect ratio**: 4:3 or 16:9 recommended

### Content Guidelines

- **Reliable images**: Show proper COVID-19 prevention practices
- **Unreliable images**: Show practices that increase transmission risk
- **Diversity**: Include people of different ages, ethnicities, and backgrounds
- **Clarity**: Images should clearly show the practice being demonstrated
- **Appropriate**: Avoid graphic or disturbing content

## Implementation Steps

1. **Create folders**:

   ```bash
   mkdir -p public/images/reliable
   mkdir -p public/images/unreliable
   ```

2. **Add images** to the respective folders

3. **Update image paths** in `src/data/imageQuestions.ts`:

   ```typescript
   {
     id: 1,
     reliableImage: "/images/reliable/mask-wearing.jpg",
     unreliableImage: "/images/unreliable/no-mask-crowd.jpg",
     explanation: "..."
   }
   ```

4. **Test the quiz** to ensure all images load correctly

## Image Sources

### Free Stock Photo Websites

- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Pixabay (pixabay.com)
- Freepik (freepik.com)

### Search Terms

- "COVID-19 prevention"
- "mask wearing"
- "social distancing"
- "hand washing"
- "vaccination"
- "healthcare worker"
- "crowded indoor"
- "unhealthy habits"

## Legal Considerations

- Ensure you have proper rights/licenses for all images
- Credit photographers when required
- Avoid using copyrighted material without permission
- Consider using Creative Commons licensed images

## Testing

After adding images:

1. Test the image quiz to ensure all images load
2. Check that the correct image is marked as "reliable" in each pair
3. Verify that explanations match the images shown
4. Test on different screen sizes to ensure responsive design

## Fallback Images

The current implementation includes error handling that will show a placeholder if an image fails to load. You can create a custom placeholder image at `public/images/placeholder.jpg` for better user experience.
