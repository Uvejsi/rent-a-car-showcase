# Elite RENT - Dokumentacioni i Projektit

## 📋 Përmbledhje

**Elite RENT** është një aplikacion modern web për menaxhimin e qirasë së makinave premium. I ndërtuar me teknologji të fundit, ofron një eksperiencë të përsosur për klientët që dëshirojnë të marrin makina me qira.

---

## 🚀 Teknologjitë e Përdorura

### Frontend
| Teknologjia | Versioni | Përshkrimi |
|-------------|----------|------------|
| **React** | 18.3 | Libraria kryesore për UI |
| **TypeScript** | 5.x | Tipizim statik për siguri |
| **Vite** | 5.x | Build tool i shpejtë |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **shadcn/ui** | Latest | Komponentë UI të stilizuara |
| **React Router** | 6.x | Navigimi në aplikacion |
| **TanStack Query** | 5.x | Menaxhimi i state-it server |
| **Lucide React** | Latest | Ikonat vektoriale |

### Backend (Lovable Cloud)
| Teknologjia | Përshkrimi |
|-------------|------------|
| **PostgreSQL** | Databazë relacionale |
| **Row Level Security** | Siguria në nivel rreshti |
| **Edge Functions** | Funksione serverless |

### Fontet
- **Plus Jakarta Sans** - Font kryesor për tekst
- **Outfit** - Font display për tituj

---

## 📁 Struktura e Projektit

```
elite-rent/
├── src/
│   ├── components/
│   │   ├── cars/
│   │   │   └── CarCard.tsx          # Karta e makinës
│   │   ├── home/
│   │   │   ├── Hero.tsx             # Seksioni hero
│   │   │   ├── FeaturedCars.tsx     # Makina të zgjedhura
│   │   │   └── WhyChooseUs.tsx      # Pse na zgjidhni
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Navigimi kryesor
│   │   │   ├── Footer.tsx           # Fundi i faqes
│   │   │   └── Layout.tsx           # Layout wrapper
│   │   └── ui/                      # Komponentët shadcn/ui
│   │
│   ├── hooks/
│   │   ├── useCars.ts               # Hook për makinat
│   │   ├── useReservations.ts       # Hook për rezervimet
│   │   └── useContactMessages.ts    # Hook për mesazhet
│   │
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts            # Klienti Supabase
│   │       └── types.ts             # Tipet e gjeneruara
│   │
│   ├── pages/
│   │   ├── Index.tsx                # Faqja kryesore
│   │   ├── Makina.tsx               # Lista e makinave
│   │   ├── Rezervim.tsx             # Forma e rezervimit
│   │   ├── RrethNesh.tsx            # Rreth nesh
│   │   ├── Kontakt.tsx              # Forma e kontaktit
│   │   └── NotFound.tsx             # 404 faqja
│   │
│   ├── data/
│   │   └── cars.ts                  # Të dhëna fallback
│   │
│   ├── index.css                    # Stilet globale + design tokens
│   └── App.tsx                      # Routing kryesor
│
├── supabase/
│   └── config.toml                  # Konfigurimi Supabase
│
├── tailwind.config.ts               # Konfigurimi Tailwind
└── DOKUMENTACIONI.md                # Ky dokument
```

---

## 🗄️ Skema e Databazës

### Tabela: `cars`
Ruan informacionin e makinave në inventar.

| Kolona | Tipi | Përshkrimi |
|--------|------|------------|
| `id` | UUID | Identifikues unik (PK) |
| `name` | TEXT | Emri i makinës |
| `brand` | TEXT | Marka (Mercedes, BMW, etj.) |
| `type` | TEXT | Kategoria (Luksoz, SUV, Kompakt, Ekonomik) |
| `price` | DECIMAL | Çmimi për ditë në € |
| `image` | TEXT | URL e fotografisë |
| `seats` | INTEGER | Numri i ulëseve |
| `transmission` | TEXT | Automatik / Manuale |
| `fuel` | TEXT | Benzinë / Naftë / Hibrid |
| `year` | INTEGER | Viti i prodhimit |
| `available` | BOOLEAN | Disponueshmëria |
| `description` | TEXT | Përshkrimi |
| `created_at` | TIMESTAMP | Data e krijimit |
| `updated_at` | TIMESTAMP | Data e përditësimit |

### Tabela: `reservations`
Ruan rezervimet e klientëve.

| Kolona | Tipi | Përshkrimi |
|--------|------|------------|
| `id` | UUID | Identifikues unik (PK) |
| `car_id` | UUID | Referenca tek makina (FK) |
| `customer_name` | TEXT | Emri i plotë i klientit |
| `customer_email` | TEXT | Email-i i klientit |
| `customer_phone` | TEXT | Numri i telefonit |
| `pickup_date` | DATE | Data e marrjes |
| `return_date` | DATE | Data e kthimit |
| `pickup_location` | TEXT | Vendi i marrjes |
| `notes` | TEXT | Shënime shtesë |
| `status` | TEXT | pending / confirmed / cancelled |
| `total_price` | DECIMAL | Çmimi total |
| `created_at` | TIMESTAMP | Data e krijimit |
| `updated_at` | TIMESTAMP | Data e përditësimit |

### Tabela: `contact_messages`
Ruan mesazhet nga forma e kontaktit.

| Kolona | Tipi | Përshkrimi |
|--------|------|------------|
| `id` | UUID | Identifikues unik (PK) |
| `name` | TEXT | Emri i dërguesit |
| `email` | TEXT | Email-i |
| `subject` | TEXT | Subjekti i mesazhit |
| `message` | TEXT | Përmbajtja e mesazhit |
| `read` | BOOLEAN | Statusi i leximit |
| `created_at` | TIMESTAMP | Data e dërgimit |

---

## 🔐 Politikat e Sigurisë (RLS)

### Cars
- ✅ **SELECT**: Publiku mund të shohë të gjitha makinat

### Reservations
- ✅ **INSERT**: Kushdo mund të krijojë rezervim
- ✅ **SELECT**: Rezervimet janë të dukshme

### Contact Messages
- ✅ **INSERT**: Kushdo mund të dërgojë mesazh

---

## 🎨 Design System

### Ngjyrat Kryesore (HSL)
```css
--primary: 24 95% 53%          /* Portokalli i ngrohtë */
--primary-foreground: 0 0% 100% /* Bardhë */
--secondary: 20 80% 60%         /* Portokalli i lehtë */
--accent: 14 100% 60%           /* Akcent */
--background: 0 0% 3%           /* Sfond i errët */
--foreground: 0 0% 98%          /* Tekst i bardhë */
--muted: 0 0% 12%               /* Sfond i mutuar */
--card: 0 0% 6%                 /* Sfond kartash */
```

### Gradientët
- `gradient-primary`: Gradient kryesor portokalli
- `gradient-hero`: Sfond i errët për hero
- `gradient-card`: Gradient për kartat
- `gradient-glass`: Efekt i qelqit

### Animacionet
- `fadeIn`, `slideUp`, `slideDown`, `slideLeft`, `slideRight`
- `scaleIn`, `blurIn`, `floating`, `pulseGlow`, `shimmer`

---

## 📱 Faqet

### 1. Faqja Kryesore (`/`)
- Hero section me efekte parallax
- Makinat e zgjedhura
- Seksioni "Pse Na Zgjidhni"
- CTA për rezervim

### 2. Makinat (`/makina`)
- Lista e plotë e makinave
- Filtra sipas tipit dhe çmimit
- Kartat interaktive me hover effects

### 3. Rezervimi (`/rezervim`)
- Formular 3-hapësh:
  1. Të dhënat personale
  2. Zgjedhja e makinës
  3. Datat e rezervimit
- Validim në kohë reale
- Konfirmim me animacion

### 4. Rreth Nesh (`/rreth-nesh`)
- Historia e kompanisë
- Statistikat
- Vlerat thelbësore
- Ekipi drejtues

### 5. Kontakti (`/kontakt`)
- Informacionet e kontaktit
- Formular kontakti
- Harta e lokacionit

---

## 🔧 Komandat e Zhvillimit

```bash
# Instalimi i varësive
npm install

# Nisja e serverit të zhvillimit
npm run dev

# Ndërtimi për prodhim
npm run build

# Shikimi i build-it
npm run preview

# Linting
npm run lint
```

---

## 📊 Hooks të Personalizuara

### `useCars()`
Merr listën e makinave të disponueshme nga databaza.

```typescript
const { data: cars, isLoading, error } = useCars();
```

### `useCarById(carId)`
Merr detajet e një makine specifike.

```typescript
const { data: car } = useCarById("uuid-here");
```

### `useCreateReservation()`
Krijon një rezervim të ri.

```typescript
const mutation = useCreateReservation();
mutation.mutate({
  car_id: "uuid",
  customer_name: "Emri",
  customer_email: "email@example.com",
  customer_phone: "+355...",
  pickup_date: "2024-01-15",
  return_date: "2024-01-20",
  pickup_location: "Tiranë"
});
```

### `useCreateContactMessage()`
Dërgon një mesazh kontakti.

```typescript
const mutation = useCreateContactMessage();
mutation.mutate({
  name: "Emri",
  email: "email@example.com",
  subject: "Pyetje",
  message: "Mesazhi..."
});
```

---

## 🚀 Deployment

Projekti deployohet automatikisht përmes Lovable:

1. **Preview URL**: Për testim para publikimit
2. **Production URL**: Faqja live për klientët

### Hapat:
1. Bëj ndryshimet në kod
2. Kliko "Publish" në Lovable
3. Aplikacioni është live!

---

## 📈 Karakteristikat e Ardhshme (Roadmap)

- [ ] Panel admin për menaxhimin e makinave
- [ ] Sistem autentikimi për klientë
- [ ] Pagesa online me Stripe
- [ ] Njoftimet me email për rezervime
- [ ] Multi-language support (EN, IT, DE)
- [ ] Dark/Light mode toggle
- [ ] Sistem vlerësimesh dhe review
- [ ] Chat live me support

---

## 👥 Kontributi

Ky projekt është ndërtuar me Lovable AI. Për çdo pyetje ose sugjerim, kontaktoni ekipin në info@eliterent.al.

---

## 📄 Licenca

© 2024 Elite RENT. Të gjitha të drejtat e rezervuara.
