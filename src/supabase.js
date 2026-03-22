import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

**Arquivo `src/App.jsx`**
— Este é o sistema completo. Me confirma que criou os arquivos acima que eu gero o `App.jsx` já integrado com o Supabase para você colar.

---

**2.4 — Arquivo `.env.local` (NÃO criar no GitHub)**
Este arquivo fica só na Vercel (vamos configurar na Etapa 3). Ele vai conter:
```
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anon
