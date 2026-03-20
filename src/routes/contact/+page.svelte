<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
    import FadeIn from '$lib/components/ui/FadeIn.svelte';
    import { ADDRESS } from '$lib/components/utils/constants';
    import { EMAIL } from '$lib/components/utils/constants';
    import { PHONENUM } from '$lib/components/utils/constants';
    import { COUNTRY } from '$lib/components/utils/constants';
    import { POSTALCODE } from '$lib/components/utils/constants';
    import { onMount } from 'svelte';
    import { cart, cartToMessage } from '$lib/stores/cart';

  // ⚠️ Replace with your real key from https://dashboard.hcaptcha.com
    const SITE_KEY = '10000000-ffff-ffff-ffff-000000000001'; // test key for dev

    let name = '';
    let email = '';
    let phone = '';
    let subject = '';
    let message = '';

    // Pre-fill message with cart items if any
    let cartItems = $derived($cart);
    $effect(() => {
        if (cartItems.length > 0 && !message) {
            message = cartToMessage(cartItems);
            subject = subject || 'Prijsvraag';
        }
    });

    let captchaToken: string | null = null;
    let captchaError = false;
    let submitting = false;
    let submitted = false;
    let errors: Record<string, string> = {};
    

    let captchaContainer: HTMLDivElement;
    let captchaBlocked = false;
    let widgetId: number | null = null;

    onMount(() => {
        const renderCaptcha = () => {
            if (typeof (window as any).hcaptcha !== 'undefined') {
                // hCaptcha already loaded — render manually into our div
                widgetId = (window as any).hcaptcha.render(captchaContainer, {
                sitekey: SITE_KEY,
                theme: 'dark',
                callback: (token: string) => {
                    captchaToken = token;
                    captchaError = false;
                    captchaBlocked = false;
                },
                'expired-callback': () => { captchaToken = null; }
        });
      } else {
        // Script not loaded yet — wait for it
        (window as any).onloadCallback = () => {
          widgetId = (window as any).hcaptcha.render(captchaContainer, {
            sitekey: SITE_KEY,
            theme: 'dark',
            callback: (token: string) => {
              captchaToken = token;
              captchaError = false;
              captchaBlocked = false;
            },
            'expired-callback': () => { captchaToken = null; }
          });
        };
      }

      // Blocked detection — if still no widget after 3s
      setTimeout(() => {
        if (typeof (window as any).hcaptcha === 'undefined') {
          captchaBlocked = true;
        }
      }, 3000);
    };

    renderCaptcha();

    // Cleanup on unmount — reset the widget
    return () => {
        if (widgetId !== null && typeof (window as any).hcaptcha !== 'undefined') {
            (window as any).hcaptcha.reset(widgetId);
        }
        };
    });

    function validate() {
        errors = {};
        if (!name.trim()) errors.name = 'Naam is verplicht';
        if (!email.trim()) errors.email = 'E-mail is verplicht';
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Vul een geldig e-mailadres in';
        if (!subject) errors.subject = 'Selecteer een onderwerp';
        if (!message.trim()) errors.message = 'Bericht is verplicht';
        else if (message.trim().length < 20) errors.message = 'Schrijf minimaal 20 tekens';
        return Object.keys(errors).length === 0;
    }

    async function handleSubmit() {
        if (!validate()) return;

        if (!captchaToken) {
        captchaError = true;
        return;
        }

    submitting = true;

    // Wire up to your API route here
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, phone, subject, message, captchaToken })
    // });

        await new Promise(resolve => setTimeout(resolve, 1000)); // simulate
        submitting = false;
        submitted = true;
    }

    function reset() {
        name = ''; email = ''; phone = ''; subject = ''; message = '';
        captchaToken = null; errors = {};
        submitted = false;
    }
</script>

<!-- Load hCaptcha script — no npm package needed -->
<svelte:head>
  <script src="https://js.hcaptcha.com/1/api.js?onload=onloadCallback&render=explicit" async defer></script>
</svelte:head>

<section class="page-header ml-5">
  <div class="pt-2 container flex flex-col sm:items-left sm:text-left md:items-center md:text-center gap-1 w-3xl">
    <FadeIn delay={1000}>
        <h1 class=" justify-center">Contact</h1>
    </FadeIn>
    <FadeIn delay={2000}>
      <p class="intro">
        Vragen over een specifiek mes, prijs of maatwerk?
        Stuur ons een bericht — wij reageren binnen 1 werkdag.
      </p>
    </FadeIn>
  </div>
</section>

<section class="contact-section">
  <div class="container">
    <div class="contact-grid">

      <!-- Form -->
         
        {#if submitted}
          <div class="success-box">
            <div class="success-icon" aria-hidden="true">✓</div>
            <h2>Bericht Verstuurd!</h2>
            <p>Bedankt voor uw bericht. We nemen spoedig contact met u op.</p>
            <button class="btn btn-outline" onclick={reset}>
              Nieuw Bericht
            </button>
          </div>
        {:else}
          <div class="form">

            <h6 class="sidebar-title">Contactformulier</h6>
            <div class="form-row">
              <div class="form-group">
                <label for="name">Naam *</label>
                <input class="border-solid bg-(--color-bg) border-2 border-(--color-border) pl-1"
                  id="name"
                  type="text"
                  bind:value={name}
                  placeholder="Jan de Vries"
                  aria-invalid={!!errors.name}
                />
                {#if errors.name}<span class="error">{errors.name}</span>{/if}
              </div>
              <div class="form-group ">
                <label for="email">E-mail *</label>
                <input class="border-solid bg-(--color-bg) border-2 border-(--color-border) pl-1"
                  id="email"
                  type="email"
                  bind:value={email}
                  placeholder="jan@bedrijf.nl"
                  aria-invalid={!!errors.email}
                />
                {#if errors.email}<span class="error">{errors.email}</span>{/if}
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Telefoon (optioneel)</label>
                <input class="border-solid bg-(--color-bg) border-2 border-(--color-border) pl-1"
                  id="phone"
                  type="tel"
                  bind:value={phone}
                  placeholder="+31 6 00 000 000"
                />
              </div>
              <div class="form-group">
                <label for="subject">Onderwerp *</label>
                <select class="border-solid bg-(--color-bg) border-2 border-(--color-border) pl-1 color-(--color-text-muted)" id="subject" bind:value={subject} aria-invalid={!!errors.subject}>
                  <option value="">— Selecteer onderwerp —</option>
                  <option>Algemene vraag</option>
                  <option>Prijsvraag</option>
                  <option>Maatwerk / speciaal mes</option>
                  <option>Volume of contractprijs</option>
                  <option>Klacht of feedback</option>
                  <option>Anders</option>
                </select>
                {#if errors.subject}<span class="error">{errors.subject}</span>{/if}
              </div>
            </div>

            {#if cartItems.length > 0}
                <div class="cart-summary">
                    <span class="cart-summary-title">Uw bestelling ({cartItems.reduce((s,i) => s + i.quantity, 0)} items)</span>
                    <ul>
                        {#each cartItems as item}
                            <li>{item.quantity}× {item.label} — {item.price}</li>
                        {/each}
                    </ul>
                    <button type="button" class="clear-cart-btn" onclick={() => { cart.clear(); message = ''; }}>Wis bestelling</button>
                </div>
            {/if}

            <div class="form-group">
              <label for="message">Bericht *</label>
              <textarea
                class="border-solid bg-(--color-bg) border-2 border-(--color-border) pl-1"
                id="message"
                rows={6}
                bind:value={message}
                placeholder="Beschrijf uw vraag of wens..."
                aria-invalid={!!errors.message}
              ></textarea>
              {#if errors.message}<span class="error">{errors.message}</span>{/if}

              
            </div>

            <!-- hCaptcha widget -->
            <div class="captcha-wrapper">
            <div bind:this={captchaContainer}></div>
                {#if captchaBlocked}
                    <p class="error">
                    Verificatie geblokkeerd. Schakel uw adblocker uit of mail 
                    <a href="mailto:{EMAIL}">{EMAIL}</a>.
                    </p>
                {/if}
                {#if captchaError}
                    <span class="error">Voltooi de CAPTCHA verificatie.</span>
                {/if}
            </div>
            
            <button
                class="btn btn-primary submit-btn"
                onclick={handleSubmit}
                disabled={submitting}
            >
                {submitting ? 'Versturen…' : 'Verstuur Bericht'}
            </button>

          </div>
        {/if}
      

      <!-- Sidebar -->
      <FadeIn delay={200} direction="left">
        <aside class="sidebar">
          <div class="contact-info">
            <h2 class="sidebar-title">Direct Contact</h2>

            <div class="contact-item">
              <div class="contact-icon" aria-hidden="true">✉</div>
              <div>
                <strong>E-mail</strong>
                <a href="mailto:{EMAIL}">{EMAIL}</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon" aria-hidden="true">☎</div>
              <div>
                <strong>Telefoon</strong>
                <a href="tel:{PHONENUM}">{PHONENUM}</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon" aria-hidden="true">📍</div>
              <div>
                <strong>Adres</strong>
                <address>
                  {ADDRESS}<br />
                  {POSTALCODE}<br />
                  {COUNTRY}
                </address>
              </div>
            </div>
          </div>

          <!-- Swap for real Google Maps embed when ready -->
          <div class="map-placeholder">
            <span class="mt-4">Google Maps</span>
            <small class="p-10">
                <iframe class="googlemap" title="HillknivesMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.981523266354!2d4.46631147650523!3d51.9342905719135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434ad0a6e5e6b%3A0xdcb8d586e50fc411!2sMessenslijperij%20Hillknives!5e0!3m2!1sen!2snl!4v1773091790113!5m2!1sen!2snl" width="300" height="300" style="border:0;" allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </small>
          </div>
        </aside>
      </FadeIn>

    </div>
  </div>
</section>

<style>

  h1 {
    font-family: var(--font-display);
    color: var(--color-text);
    font-size: clamp(3rem, 8vw, 6rem);
    margin-bottom: 1.5rem;
  }

  .intro {
    font-size: 1.1rem;
    color: var(--color-text);
    max-width: 50ch;
    line-height: 1.7;
  }

  /* ── Layout ─────────────────────────────────────────── */
  .contact-section { padding: 4rem 0; }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 4rem;
    align-items: flex-start;
    color: var(--color-text);
  }

  /* ── Form ───────────────────────────────────────────── */
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background-color: var(--color-bg-surface);
    padding: 2rem;
    border: 1px solid var(--color-border);
    margin-left: 10rem;
    box-shadow: 2px 2px 10px 0px var(--color-bg);
    z-index: 40;
    position: relative;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .error {
    color: var(--color-accent-2);
    font-size: 0.78rem;
    letter-spacing: 0.05em;
  }

  .captcha-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-height: 80px;
    overflow: visible;
  }

  .submit-btn {
    width: 15rem;
    align-self: flex-end;
    font-size: 1rem;
    padding: 1rem 2rem;
    border: solid 2px var(--color-steel);
    background-color: var(--color-accent-2);
    cursor: pointer;
    box-shadow: 1px 1px 2px 0px var(--color-bg);
    transition: background-color 0.2s, box-shadow 0.2s;
  }

  .submit-btn:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  /* ── Success ────────────────────────────────────────── */
  .success-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 3rem;
    border: 1px solid var(--color-border);
    background: var(--color-bg-surface);
  }

  .success-icon {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-accent-dim);
    border: 2px solid var(--color-accent);
    border-radius: 50%;
    font-size: 1.2rem;
    color: var(--color-accent);
  }

  /* ── Sidebar ────────────────────────────────────────── */
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: sticky;
    top: 100px;
  }

  .contact-info {
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    box-shadow: 2px 2px 10px 0px var(--color-bg);
  }

  .sidebar-title {
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-accent);
  }

  .contact-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .contact-icon {
    width: 36px;
    height: 36px;
    background: var(--color-bg-raised);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  .contact-item strong {
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text-dim);
    margin-bottom: 0.3rem;
  }

  .contact-item a,
  .contact-item address {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    font-style: normal;
    line-height: 1.55;
    transition: color 0.2s;
  }

  .contact-item a:hover { color: var(--color-accent); }

  /* ── Map placeholder ────────────────────────────────── */
  .map-placeholder {
    border: 1px solid var(--color-border);
    aspect-ratio: 4/3;
    background: var(--color-bg-surface);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--color-text-dim);
    font-size: 0.85rem;
    box-shadow: 2px 2px 10px 0px var(--color-bg);
  }

  /* ── Responsive ─────────────────────────────────────── */
  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .sidebar {
      position: static;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .contact-info, .map-placeholder, .form {
      flex: 1;
      min-width: 280px;
      margin-left: 5rem;

    }
  }

  @media (max-width: 800px) {
    .form-row { grid-template-columns: 1fr; }
    .form {
      margin-left: 0;
      padding: 1.5rem;
    }
    .contact-info, .map-placeholder, .form {
      flex: 1;
      min-width: 280px;
      margin-left: 0rem;
      padding: 1.5rem;
    }
  }
  /* ── Cart summary ───────────────────────────────────── */
  .cart-summary {
    background: var(--color-bg-raised);
    border: 1px solid var(--color-accent);
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .cart-summary-title {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-accent);
  }
  .cart-summary ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .cart-summary li {
    font-size: 0.85rem;
    color: var(--color-text-muted);
  }
  .clear-cart-btn {
    background: none;
    border: none;
    color: var(--color-text-dim);
    font-size: 0.75rem;
    cursor: pointer;
    text-decoration: underline;
    align-self: flex-start;
    padding: 0;
    transition: color 0.2s;
  }
  .clear-cart-btn:hover { color: var(--color-accent-2); }

  @media (max-width: 600px) {
    .form-row { grid-template-columns: 1fr; }
    .form {
      margin-left: 0;
      padding: 1.5rem;
    }
    .contact-info, .map-placeholder, .form {
      flex: 1;
      min-width: 280px;
      margin-left: 0rem;
      padding: 1.5rem;
    }
  }
</style>
