# What's Your Coffee Personality? — Requirements

## Overview
A personality quiz that asks users 5 lifestyle questions and recommends a coffee drink based on their answers.

---

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|-------------|--------|---------|
| Bold Adventurer | Double Espresso | "You live for intensity" |
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" |
| Social Butterfly | Cappuccino | "Coffee is better with company" |
| Artisan Snob | Pour-Over, Single Origin | "You know what you like" |
| Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |

---

## Result Display
**Single recommendation** — show the top personality only.
Example: *"You're a Bold Adventurer! Your coffee: Double Espresso."*

---

## Visual Style
- **Base:** Warm & Cozy (earth tones, soft gradients, warm browns)
- **Font:** Playfair Display (headings) + Lato (body)
- **Background:** Warm gradient (#f5ebe0 → #e8d5b7)
- **Card:** Cream white (#fffdf9), soft border, rounded corners
- **Header:** Quiz title ("What's Your Coffee Personality?") instead of question number
- **Progress:** 5 segmented dots (filled = completed questions)
- **Answer options:** Plain buttons with emoji + icon, no radio buttons
- **Icons:** Lucide icon library

---

## Images
- One image per coffee result (5 total)
- **Style:** Watercolor or sketch illustration (NOT realistic photos)
- **Status:** Placeholders for now — to be replaced in iteration
- Images needed for:
  - Double Espresso (Bold Adventurer)
  - Caramel Latte (Sweet Enthusiast)
  - Cappuccino (Social Butterfly)
  - Pour-Over, Single Origin (Artisan Snob)
  - Large Drip (Practical Pragmatist)

---

## Quiz Questions & Answer Mappings

### Q1: What does your ideal weekend morning look like?
| Answer | Personality |
|--------|-------------|
| 🏔️ Sunrise hike or outdoor adventure | Bold Adventurer |
| 🥐 Brunch with a big group of friends | Social Butterfly |
| 🎨 A market, gallery, or new café to explore | Artisan Snob |
| 📋 Catching up on errands and to-do lists | Practical Pragmatist |
| 🍰 Slow coffee, good book, staying cozy | Sweet Enthusiast |

### Q2: How do you pick a restaurant?
| Answer | Personality |
|--------|-------------|
| 🔥 Wherever has the boldest, most adventurous menu | Bold Adventurer |
| 🍰 Somewhere with great desserts and cozy vibes | Sweet Enthusiast |
| 👥 Wherever my friends want to go | Social Butterfly |
| 🔍 Weeks of research — Yelp, reviews, chef's background | Artisan Snob |
| 📍 Closest place with solid reviews | Practical Pragmatist |

### Q3: What's your travel style?
| Answer | Personality |
|--------|-------------|
| 🧗 Off the beaten path — hiking, hostels, no plans | Bold Adventurer |
| 🛁 Boutique hotel, local pastries, slow mornings | Sweet Enthusiast |
| 🎉 Wherever my friends are going | Social Butterfly |
| 🗺️ Carefully curated itinerary, hidden gems only | Artisan Snob |
| ✈️ Flights and hotel sorted — figure the rest out there | Practical Pragmatist |

### Q4: Your work bag contains…
| Answer | Personality |
|--------|-------------|
| 💪 Just my phone — I travel light | Bold Adventurer |
| 🧸 Snacks, a candle, my favorite pen | Sweet Enthusiast |
| 📱 My laptop — I'm always connected | Social Butterfly |
| 📚 A book, notebook, and very specific headphones | Artisan Snob |
| 🎒 Everything I might possibly need | Practical Pragmatist |

### Q5: What kind of party do you throw?
| Answer | Personality |
|--------|-------------|
| 🏕️ Spontaneous outdoor hangout | Bold Adventurer |
| 🕯️ Intimate dinner party, homemade food | Sweet Enthusiast |
| 🎊 Big group, the more the merrier | Social Butterfly |
| 🍷 Small gathering, curated playlist, specific wine | Artisan Snob |
| 🍕 Pizza and whatever works for everyone | Practical Pragmatist |

---

## Tech Stack
- **Framework:** Next.js
- **Language:** JavaScript
- **Icons:** Lucide
- **Deployment:** To be determined in lesson 4.5
