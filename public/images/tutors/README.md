# Tutor Photography Assets Guide

This directory holds the official portrait photographs and placeholder visuals for TutoLearner Academy faculty.

---

## 1. File Specification for Real Photos

When real faculty photographs become available:

| Property | Recommended Specification |
| :--- | :--- |
| **Aspect Ratio** | Standardized **1:1 (Square)** |
| **Resolution** | Minimum `400x400` px (Recommended `800x800` px for Retina displays) |
| **Format** | `JPEG`, `PNG`, or `WebP` |
| **File Size** | Optimized under **150 KB** |
| **Framing** | Professional headshot / torso with centered eye level and neutral background |

---

## 2. Replacing an Image

To replace a placeholder with a real photo:
1. Save the new image file to this directory:
   - `somya-ranjan-naik.jpg` (or `.png` / `.webp`)
   - `shiwangi.jpg` (or `.png` / `.webp`)
   - `shreya-tiwari.jpg` (or `.png` / `.webp`)
2. Open [`src/data/tutors.ts`](file:///e:/Tutolearner%20Website/src/data/tutors.ts) and update the `image` path for the tutor:
   ```typescript
   // Example in src/data/tutors.ts:
   {
     name: "Somya Ranjan Naik",
     slug: "somya-ranjan-naik",
     image: "/images/tutors/somya-ranjan-naik.jpg",
     ...
   }
   ```
3. Next.js image optimization pipeline will automatically process, scale, and deliver AVIF/WebP variants.
